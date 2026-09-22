

type SoundPreset = 'funkGroove' | 'cityPopNight' | 'smoothLounge' | 'summerBreeze';

class AudioEngine {
  private ctx: AudioContext | null = null;
  private isRunning: boolean = false;
  private intervalId: number | null = null;
  private step: number = 0;
  private masterGain: GainNode | null = null;
  private volume: number = 0.7;
  private currentPreset: SoundPreset = 'funkGroove';
  private listeners: Set<(isPlaying: boolean, currentStep: number) => void> = new Set();

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public subscribe(cb: (isPlaying: boolean, currentStep: number) => void) {
    this.listeners.add(cb);
    return () => {
      this.listeners.delete(cb);
    };
  }

  private notify(isPlaying: boolean, currentStep: number) {
    this.listeners.forEach((cb) => cb(isPlaying, currentStep));
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public play(preset: SoundPreset = 'funkGroove') {
    this.initContext();
    if (this.isRunning && this.currentPreset === preset) {
      return;
    }
    this.currentPreset = preset;
    this.isRunning = true;
    this.step = 0;
    this.notify(true, this.step);

    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }

    
    const stepDurationMs = (60 / 108 / 4) * 1000; 
    this.intervalId = window.setInterval(() => {
      this.tick();
    }, stepDurationMs);
  }

  public pause() {
    this.isRunning = false;
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.notify(false, this.step);
  }

  public toggle(preset: SoundPreset = 'funkGroove') {
    if (this.isRunning) {
      this.pause();
    } else {
      this.play(preset);
    }
  }

  public isAudioPlaying(): boolean {
    return this.isRunning;
  }

  private tick() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const currentStep = this.step % 16;

    
    const bassNotes = [
      73.42, 0, 73.42, 87.31, 
      98.00, 0, 87.31, 73.42, 
      58.27, 0, 58.27, 65.41, 
      110.0, 98.0, 87.31, 82.41 
    ];

    const freq = bassNotes[currentStep];
    if (freq > 0) {
      this.triggerBassNote(freq, now);
    }

    
    if (currentStep === 0) {
      
      this.triggerChord([293.66, 349.23, 440.00, 523.25, 659.25], now, 0.45);
    } else if (currentStep === 6) {
      
      this.triggerChord([196.00, 246.94, 349.23, 440.00, 659.25], now, 0.35);
    } else if (currentStep === 8) {
      
      this.triggerChord([233.08, 293.66, 349.23, 440.00, 523.25], now, 0.45);
    } else if (currentStep === 12) {
      
      this.triggerChord([220.00, 277.18, 392.00, 523.25], now, 0.4);
    }

    
    const hihatVelocity = currentStep % 4 === 2 ? 0.08 : currentStep % 2 === 0 ? 0.05 : 0.03;
    this.triggerHiHat(now, hihatVelocity);

    
    if (currentStep === 4 || currentStep === 12) {
      this.triggerSnare(now);
    }

    this.step++;
    this.notify(true, this.step);
  }

  private triggerBassNote(freq: number, time: number) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const noteGain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(freq / 2, time);

    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, time);
    filter.frequency.exponentialRampToValueAtTime(140, time + 0.18);
    filter.Q.setValueAtTime(4.0, time);

    noteGain.gain.setValueAtTime(0.35, time);
    noteGain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);

    osc.connect(filter);
    subOsc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(time);
    subOsc.start(time);
    osc.stop(time + 0.25);
    subOsc.stop(time + 0.25);
  }

  private triggerChord(frequencies: number[], time: number, duration: number) {
    if (!this.ctx || !this.masterGain) return;

    frequencies.forEach((freq) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      const filter = this.ctx!.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, time);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1800, time);
      filter.frequency.exponentialRampToValueAtTime(700, time + duration);

      gain.gain.setValueAtTime(0.04, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(time);
      osc.stop(time + duration);
    });
  }

  private triggerHiHat(time: number, velocity: number) {
    if (!this.ctx || !this.masterGain) return;

    
    const bufferSize = this.ctx.sampleRate * 0.04;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(7500, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(velocity, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.035);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(time);
    noise.stop(time + 0.04);
  }

  private triggerSnare(time: number) {
    if (!this.ctx || !this.masterGain) return;

    const bufferSize = this.ctx.sampleRate * 0.15;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(1400, time);
    noiseFilter.Q.setValueAtTime(1.2, time);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.12, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);

    
    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, time);
    osc.frequency.exponentialRampToValueAtTime(80, time + 0.08);

    const oscGain = this.ctx.createGain();
    oscGain.gain.setValueAtTime(0.15, time);
    oscGain.gain.exponentialRampToValueAtTime(0.001, time + 0.09);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    osc.connect(oscGain);
    oscGain.connect(this.masterGain);

    noise.start(time);
    osc.start(time);
    noise.stop(time + 0.15);
    osc.stop(time + 0.1);
  }
}

export const audioEngine = new AudioEngine();
