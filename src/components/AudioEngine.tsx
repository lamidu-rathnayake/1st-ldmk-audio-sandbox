// src/components/AudioEngine.tsx
import { useEffect, useRef, useState } from "react";
import { Engine } from "./engine";

const AudioEngine = () => {
    const [engineState, setEngineState] = useState<string>("not initialized");
    const audioContextRef = useRef<Engine | null>(null);

    if (!audioContextRef.current) {
        audioContextRef.current = new Engine();
    }

    useEffect(() => {
        if (audioContextRef.current) {
            audioContextRef.current.onStateChangeCallBack = (state) => {
                setEngineState(state);
            };
        }

        return () => {
            audioContextRef.current?.close();
        };
    }, []);

    return (
        <>
            <p>Audio Engine State: {engineState}</p>
            <button
                onMouseDown={async () => {
                    await audioContextRef.current?.init();
                }}
            >
                Initialize Audio Engine
            </button>
            <button
                onMouseDown={() => {
                    if (
                        audioContextRef.current?.getState() === "suspended" ||
                        audioContextRef.current?.getState() ===
                            "not initialized" ||
                        audioContextRef.current?.getState() === "closed"
                    ) {
                        setEngineState(
                            "Please initialize the audio engine first",
                        );
                        return;
                    }
                    audioContextRef.current?.makeSound();
                }}
            >
                Make Sound
            </button>
            <button
                onMouseDown={async () => {
                    await audioContextRef.current?.close();
                }}
            >
                Close Audio Engine
            </button>
        </>
    );
};

export default AudioEngine;
