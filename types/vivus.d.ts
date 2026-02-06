declare module 'vivus' {
  interface VivusOptions {
    type?: 'delayed' | 'sync' | 'oneByOne' | 'script' | 'scenario';
    duration?: number;
    start?: 'inViewport' | 'manual' | 'autostart';
    delay?: number;
    animTimingFunction?: (x: number) => number;
    pathTimingFunction?: (x: number) => number;
    dashGap?: number;
    forceRender?: boolean;
    reverseStack?: boolean;
    selfDestroy?: boolean;
    onReady?: (vivus: Vivus) => void;
  }

  class Vivus {
    static EASE: (x: number) => number;
    static EASE_IN: (x: number) => number;
    static EASE_OUT: (x: number) => number;
    static EASE_OUT_BOUNCE: (x: number) => number;

    constructor(
      element: string | SVGElement,
      options?: VivusOptions,
      callback?: (vivus: Vivus) => void
    );

    play(speed?: number, callback?: (vivus: Vivus) => void): this;
    stop(): this;
    reset(): this;
    finish(): this;
    setFrameProgress(progress: number): this;
    getStatus(): 'start' | 'progress' | 'end';
    destroy(): void;
  }

  export = Vivus;
}
