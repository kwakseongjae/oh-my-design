export declare class ShaderMount {
    parentElement: PaperShaderElement;
    canvasElement: HTMLCanvasElement;
    private gl;
    private program;
    private uniformLocations;
    /** The fragment shader that we are using */
    private fragmentShader;
    /** Stores the RAF for the render loop */
    private rafId;
    /** Time of the last rendered frame */
    private lastRenderTime;
    /** Total time that we have played any animation, passed as a uniform to the shader for time-based VFX */
    private currentFrame;
    /** The speed that we progress through animation time (multiplies by delta time every update). Allows negatives to play in reverse. If set to 0, rAF will stop entirely so static shaders have no recurring performance costs */
    private speed;
    /** Actual speed used that accounts for visibility: we pause the shader if the tab is hidden or the element out of the viewport */
    private currentSpeed;
    /** Uniforms that are provided by the user for the specific shader being mounted (not including uniforms that this Mount adds, like time and resolution) */
    private providedUniforms;
    /** Names of the uniforms that should have mipmaps generated for them */
    private mipmaps;
    /** Just a sanity check to make sure frames don't run after we're disposed */
    private hasBeenDisposed;
    /** If the resolution of the canvas has changed since the last render */
    private resolutionChanged;
    /** Store textures that are provided by the user */
    private textures;
    private minPixelRatio;
    private maxPixelCount;
    private isSafari;
    private uniformCache;
    private textureUnitMap;
    private ownerDocument;
    constructor(
    /** The div you'd like to mount the shader to. The shader will match its size. */
    parentElement: HTMLElement, fragmentShader: string, uniforms: ShaderMountUniforms, webGlContextAttributes?: WebGLContextAttributes, 
    /** The speed of the animation, or 0 to stop it. Supports negative values to play in reverse. */
    speed?: number, 
    /** Pass a frame to offset the starting u_time value and give deterministic results*/
    frame?: number, 
    /**
     * The minimum pixel ratio to render at, defaults to 2.
     * May be reduced to improve performance or increased together with `maxPixelCount` to improve antialiasing.
     */
    minPixelRatio?: number, 
    /**
     * The maximum amount of physical device pixels to render for the shader,
     * by default it's 1920 * 1080 * 2x dpi (per each side) = 8,294,400 pixels of a 4K screen.
     * Actual DOM size of the canvas can be larger, it will just lose quality after this.
     *
     * May be reduced to improve performance or increased to improve quality on high-resolution screens.
     */
    maxPixelCount?: number, 
    /** Names of the uniforms that should have mipmaps generated for them */
    mipmaps?: string[]);
    private initProgram;
    private setupPositionAttribute;
    private setupUniforms;
    /**
     * The scale that we should render at.
     * - Used to target 2x rendering even on 1x screens for better antialiasing
     * - Prevents the virtual resolution from going beyond the maximum resolution
     * - Accounts for the page zoom level so we render in physical device pixels rather than CSS pixels
     */
    private renderScale;
    private parentWidth;
    private parentHeight;
    private parentDevicePixelWidth;
    private parentDevicePixelHeight;
    private devicePixelsSupported;
    private intersectionObserver;
    private isInViewport;
    private resizeObserver;
    private setupResizeObserver;
    private setupIntersectionObserver;
    private handleVisualViewportChange;
    /** Resize handler for when the container div changes size or the max pixel count changes and we want to resize our canvas to match */
    private handleResize;
    private render;
    private requestRender;
    /** Creates a texture from an image and sets it into a uniform value */
    private setTextureUniform;
    /** Utility: recursive equality test for all the uniforms */
    private areUniformValuesEqual;
    /** Sets the provided uniform values into the WebGL program, can be a partial list of uniforms that have changed */
    private setUniformValues;
    /** Gets the current total animation time from 0ms */
    getCurrentFrame: () => number;
    /** Set a frame to get a deterministic result, frames are literally just milliseconds from zero since the animation started */
    setFrame: (newFrame: number) => void;
    /** Set an animation speed (or 0 to stop animation) */
    setSpeed: (newSpeed?: number) => void;
    /** Apply the target speed, pausing (0) while the tab is hidden or the element is out of the viewport */
    private updateCurrentSpeed;
    private setCurrentSpeed;
    /** Set the maximum pixel count for the shader, this will limit the number of pixels that will be rendered */
    setMaxPixelCount: (newMaxPixelCount?: number) => void;
    /** Set the minimum pixel ratio for the shader */
    setMinPixelRatio: (newMinPixelRatio?: number) => void;
    /** Update the uniforms that are provided by the outside shader, can be a partial set with only the uniforms that have changed */
    setUniforms: (newUniforms: ShaderMountUniforms) => void;
    /** Render right away only when the rAF loop isn't running */
    private renderUnlessAnimating;
    private handleDocumentVisibilityChange;
    /** Dispose of the shader mount, cleaning up all of the WebGL resources */
    dispose: () => void;
}
/** The parent `<div>` element that has a ShaderMount available on it */
export interface PaperShaderElement extends HTMLElement {
    paperShaderMount: ShaderMount | undefined;
}
/** Check if an element is a Paper shader element */
export declare function isPaperShaderElement(element: HTMLElement): element is PaperShaderElement;
/**
 * Uniform types that we support to be auto-mapped into the fragment shader
 *
 * We accept undefined as a convenience for server rendering, when some things may be undefined
 * We just skip setting the uniform if it's undefined. This allows the shader mount to still take up space during server rendering
 */
export interface ShaderMountUniforms {
    [key: string]: boolean | number | number[] | number[][] | HTMLImageElement | undefined;
}
export interface ShaderMotionParams {
    speed?: number;
    frame?: number;
}
export type ShaderPreset<T> = {
    name: string;
    params: Required<T>;
};
export type ImageShaderPreset<T> = {
    name: string;
    /**
     * Params for the shader excluding the image.
     * Image is excluded as it isn't considered a preset,
     * e.g. when switching between presets it shouldn't switch the image.
     *
     * While we exclude images from presets they should still be set with a default prop value so the code-first usage of shaders remains great.
     */
    params: Required<Omit<T, 'image'>>;
};
