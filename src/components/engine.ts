// src/components/engine.ts
export class Engine {
    ctx: AudioContext | null = null;
    gainNode: GainNode | null = null;
    onStateChangeCallBack: ((state: string) => void) | null = null; // this is the callback function that will be called when the state of the audio context change.

    async init() {
        if (this.ctx) return;

        this.ctx = new (
            window.AudioContext || (window as any).webkitAudioContext
        )();
        this.gainNode = this.ctx.createGain();
        this.gainNode.gain.setValueAtTime(0.2, this.ctx.currentTime);

        this.gainNode.connect(this.ctx.destination);

        this.ctx.onstatechange = () => {
            if (this.onStateChangeCallBack && this.ctx) {
                this.onStateChangeCallBack(this.ctx.state);
            }
        };

        if (this.ctx.state === "suspended") {
            await this.ctx.resume();
        }

        if (this.onStateChangeCallBack)
            this.onStateChangeCallBack(this.ctx.state);
    }

    makeSound() {
        if (!this.ctx || !this.gainNode) return;

        const oscillator = this.ctx.createOscillator();
        oscillator.connect(this.gainNode);
        oscillator.type = "sine";
        oscillator.frequency.value = 440;
        oscillator.start(this.ctx.currentTime);
        oscillator.stop(this.ctx.currentTime + 2);

        if (this.onStateChangeCallBack)
            this.onStateChangeCallBack(this.ctx.state);
    }

    async close() {
        if (!this.ctx) return;

        if (this.ctx) {
            await this.ctx.close();

            if (this.onStateChangeCallBack)
                this.onStateChangeCallBack(this.ctx.state);
            this.ctx = null;
        }
    }

    getState() {
        return this.ctx?.state || "not initialized";
    }

    changeGain(gain: number) {
        if (!this.gainNode || !this.ctx) return;
        this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.ctx.currentTime)
        this.gainNode.gain.linearRampToValueAtTime(gain, this.ctx.currentTime + 0.02);
    }
}
