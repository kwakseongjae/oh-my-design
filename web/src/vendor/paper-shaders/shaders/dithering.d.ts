import type { ShaderMotionParams } from '../shader-mount.js';
import { type ShaderSizingParams, type ShaderSizingUniforms } from '../shader-sizing.js';
/**
 * Animated 2-color dithering over multiple pattern sources (noise, warp, dots, waves, ripple, swirl, sphere).
 *
 * SIZING NOTE: This shader performs sizing in the fragment shader (not vertex shader) to keep
 * u_pxSize in consistent actual pixels. The pixel grid is computed from gl_FragCoord before any
 * transforms, so scaling/rotating only affects the underlying pattern shape.
 * No vertex shader outputs (v_objectUV, v_patternUV, etc.) are used.
 *
 * Fragment shader uniforms:
 * - u_time (float): Animation time
 * - u_resolution (vec2): Canvas resolution in pixels
 * - u_pixelRatio (float): Device pixel ratio
 * - u_originX (float): Reference point for positioning world width in the canvas (0 to 1)
 * - u_originY (float): Reference point for positioning world height in the canvas (0 to 1)
 * - u_worldWidth (float): Virtual width of the graphic before it's scaled to fit the canvas
 * - u_worldHeight (float): Virtual height of the graphic before it's scaled to fit the canvas
 * - u_fit (float): How to fit the rendered shader into the canvas dimensions (0 = none, 1 = contain, 2 = cover)
 * - u_scale (float): Overall zoom level of the graphics (0.01 to 4)
 * - u_rotation (float): Overall rotation angle of the graphics in degrees (0 to 360)
 * - u_offsetX (float): Horizontal offset of the graphics center (-1 to 1)
 * - u_offsetY (float): Vertical offset of the graphics center (-1 to 1)
 * - u_colorBack (vec4): Background color in RGBA
 * - u_colorFront (vec4): Foreground (ink) color in RGBA
 * - u_shape (float): Shape pattern type (1 = simplex, 2 = warp, 3 = dots, 4 = wave, 5 = ripple, 6 = swirl, 7 = sphere)
 * - u_type (float): Dithering type (1 = random, 2 = 2x2 Bayer, 3 = 4x4 Bayer, 4 = 8x8 Bayer)
 * - u_pxSize (float): Pixel size of dithering grid (0.5 to 20)
 *
 * */
export declare const ditheringFragmentShader: string;
export interface DitheringUniforms extends ShaderSizingUniforms {
    u_colorBack: [number, number, number, number];
    u_colorFront: [number, number, number, number];
    u_shape: (typeof DitheringShapes)[DitheringShape];
    u_type: (typeof DitheringTypes)[DitheringType];
    u_pxSize: number;
}
export interface DitheringParams extends ShaderSizingParams, ShaderMotionParams {
    colorBack?: string;
    colorFront?: string;
    shape?: DitheringShape;
    type?: DitheringType;
    size?: number;
}
export declare const DitheringShapes: {
    readonly simplex: 1;
    readonly warp: 2;
    readonly dots: 3;
    readonly wave: 4;
    readonly ripple: 5;
    readonly swirl: 6;
    readonly sphere: 7;
};
export type DitheringShape = keyof typeof DitheringShapes;
export declare const DitheringTypes: {
    readonly random: 1;
    readonly '2x2': 2;
    readonly '4x4': 3;
    readonly '8x8': 4;
};
export type DitheringType = keyof typeof DitheringTypes;
