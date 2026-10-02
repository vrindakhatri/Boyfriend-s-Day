// Web Audio synthesizer for ambient background music & interactive sound cues

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isPlayingMusic = false;
  private musicInterval: any = null;
  private isMuted = false;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a soft click/tap sound
  public playTap() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {
      // Audio not supported or blocked
    }
  }

  // Slide transition whoosh / blip
  public playSlideSound() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(260, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(520, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch {}
  }

  // Celebration chord
  public playCelebration() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const notes = [261.63, 329.63, 392.0, 523.25, 659.25]; // C major chord
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.06);

        gain.gain.setValueAtTime(0.08, this.ctx.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.06 + 0.6);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + idx * 0.06);
        osc.stop(this.ctx.currentTime + idx * 0.06 + 0.6);
      });
    } catch {}
  }

  // Toggle lo-fi / chill ambient synth chords
  public toggleMusic(onStateChange?: (playing: boolean) => void) {
    this.initCtx();
    if (this.isPlayingMusic) {
      this.stopMusic();
      if (onStateChange) onStateChange(false);
    } else {
      this.startMusic();
      if (onStateChange) onStateChange(true);
    }
  }

  public isMusicActive() {
    return this.isPlayingMusic;
  }

  public startMusic() {
    this.initCtx();
    if (!this.ctx) return;
    this.isPlayingMusic = true;

    // Chords progression: Cmaj7 -> Am7 -> Fmaj7 -> G7
    const chords = [
      [261.63, 329.63, 392.0, 493.88], // Cmaj7
      [220.0, 261.63, 329.63, 392.0],  // Am7
      [174.61, 220.0, 261.63, 329.63], // Fmaj7
      [196.0, 246.94, 293.66, 349.23], // G7
    ];

    let chordIdx = 0;

    const playChord = () => {
      if (!this.isPlayingMusic || !this.ctx) return;
      const currentNotes = chords[chordIdx % chords.length];
      chordIdx++;

      currentNotes.forEach((freq) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        const now = this.ctx.currentTime;
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.03, now + 0.8);
        gain.gain.linearRampToValueAtTime(0.001, now + 3.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 3.3);
      });
    };

    playChord();
    this.musicInterval = setInterval(playChord, 3400);
  }

  public stopMusic() {
    this.isPlayingMusic = false;
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }
}

export const sound = new SoundEngine();
