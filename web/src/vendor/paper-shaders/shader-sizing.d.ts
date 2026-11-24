export interface ShaderSizingUniforms {
    u_fit: (typeof ShaderFitOptions)[ShaderFit];
    u_scale: number;
    u_rotation: number;
    u_originX: number;
    u_originY: number;
    u_offsetX: number;
    u_offsetY: number;
    u_worldWidth: number;
    u_worldHeight: number;
}
export interface ShaderSizingParams {
    fit?: 'none' | 'contain' | 'cover';
    scale?: number;
    rotation?: number;
    originX?: number;
    originY?: number;
    offsetX?: number;
    offsetY?: number;
    worldWidth?: number;
    worldHeight?: number;
}
export declare const defaultObjectSizing: Required<ShaderSizingParams>;
export declare const defaultPatternSizing: Required<ShaderSizingParams>;
export declare const ShaderFitOptions: {
    readonly none: 0;
    readonly contain: 1;
    readonly cover: 2;
};
export type ShaderFit = keyof typeof ShaderFitOptions;
