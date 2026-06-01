// src/components/engine.ts
export class Engine {
    ctx : AudioContext | null = null;

    async init() {
        if (this.ctx) return;

        this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        if(this.ctx.state === 'suspended') {
            await this.ctx.resume();
        }
        console.log(this.ctx.state);
    }
    
    makeSound() {
        if(!this.ctx) return;
        
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = 440;
        osc.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime);
        osc.stop(this.ctx.currentTime + 1);
        console.log(this.ctx.state);
    }

    async close() {
        if(!this.ctx) return;

        if(this.ctx) {
            await this.ctx.close();
            this.ctx = null;
        }
    }

    getState() {
        return this.ctx?.state || "not initialized";
    }

}