# 1st-ldmk-audio-sandbox 🎛️⚡
### `Version 1.0.0` | **Developer:** Lamidu Rathnayake (`LDMRK`)
### `Target Framework:` Client-Side React + Vite + TypeScript (JUCE 8 WebView Gateway Paradigm)

---

## 🌌 Project Vision & Context

**1st-ldmk-audio-sandbox** is the baseline foundational workspace, technical scratchpad, and architecture lab for the **LDMRK** hybrid audio ecosystem. 

This repository implements a critical tactical bridge within your multi-year software engineering roadmap leading to your 2028 graduation. By isolating and mastering **Client-Side React, TypeScript strict-type interfaces, and the Web Audio API** inside a zero-server, fast compile-time environment, you are directly designing the exact frontend user interfaces, modular layout systems, and asynchronous state event handlers required to drive modern, high-performance **JUCE 8 WebView** audio plugins.

---

## 🧭 Theoretical Foundation & Architectural Mental Model

Historically, cross-platform UI engineering for desktop audio plugins required painstaking, imperative C++ rendering configurations via `juce::Graphics` or raw layout bindings. This approach results in verbose codebases that are notoriously difficult to scale, optimize, or make natively responsive across modern high-resolution (4K/8K) retina displays.

The modern music technology industry—led by cloud-integrated giants like **Splice**, **Waves**, and **Output**—is undergoing a major structural paradigm shift. This shift was officially stabilized and integrated as a first-class citizen in **JUCE 8** through the decoupling of concerns:

1. **The Presentation Layer (Frontend):** A localized single-page application built using a reactive web stack (**React + TypeScript**). It captures user mouse tracking events, parameters, and renders fluid UI animations at 60 FPS using GPU-accelerated web technologies.
2. **The Processing Engine (Backend):** A high-performance native **C++ core module** running inside the host DAW (Ableton, FL Studio, Pro Tools). It executes ultra-low-latency real-time Digital Signal Processing (DSP) loops within strict hard-real-time thread constraints.

This sandbox isolates and targets the **Presentation Layer**. The state mechanics, array operations, and data structures you build here using native browser oscillator nodes map directly to the communication protocols you will later establish across the web-native IPC boundary via JUCE 8's global `Juce` namespace.

---

## 🛠️ Stack Configuration & Local Execution

The project is scaffolded using **Vite** on top of **React** and **TypeScript** to achieve near-zero compilation latency and instant Hot Module Replacement (HMR) during your **05:30 AM Morning Focus Blocks**.

### 📋 Prerequisites
Ensure your local machine has Node.js and npm installed. Verify their execution states via your terminal:
```bash
node --version
npm --version