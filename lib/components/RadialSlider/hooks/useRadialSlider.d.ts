import React from 'react';
import type { RadialSliderHookProps } from '../types';
declare const useRadialSlider: (props: RadialSliderHookProps) => {
    angle: number;
    lineCount: number;
    lines: any[];
    svgSize: number;
    containerRef: React.RefObject<unknown>;
    lineHeight: number;
    startPoint: {
        x: number;
        y: number;
    };
    endPoint: {
        x: number;
        y: number;
    };
    startRadian: number;
    radianValue: number;
    isMarkerVariant: boolean;
    marks: any;
    isRadialCircleVariant: boolean;
    centerValue: number;
    isRadialSliderVariant: boolean;
    isSpeedoMeterVariant: boolean;
};
export default useRadialSlider;
