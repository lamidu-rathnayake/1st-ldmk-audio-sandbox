// src/components/AudioEngine.tsx
import { useRef, useState } from "react";
import { Engine }  from "./engine";

const AudioEngine = () => {
    const [engineState, setEngineState] = useState<string>("not initialized");
    const audioContextRef = useRef<Engine | null>(null);
    
    if (!audioContextRef.current){
        audioContextRef.current = new Engine();
    }

    return (
        <>
            <p>Audio Engine State: {engineState}</p>
            <button
                onMouseDown={async() => {
                    await audioContextRef.current?.init();
                    setEngineState(audioContextRef.current?.getState() || "not initialized");
                }}
            >
                Initialize Audio Engine
            </button>
            <button
                onMouseDown={() => {
                    if (audioContextRef.current?.getState() === "suspended" || audioContextRef.current?.getState() === "not initialized" || audioContextRef.current?.getState() === "closed") {
                        setEngineState("Please initialize the audio engine first");
                        return;
                    }
                    audioContextRef.current?.makeSound();
                    setEngineState(audioContextRef.current?.getState() || "not initialized");;
                }}
            >
                Make Sound
            </button>
            <button
                onMouseDown={async() => {
                    await audioContextRef.current?.close();
                    setEngineState(audioContextRef.current?.getState() || "not initialized");
                }}
            >
                Close Audio Engine
            </button>
        </>
    );
};

export default AudioEngine;
