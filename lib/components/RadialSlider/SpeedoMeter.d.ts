import React from 'react';
import type { SpeedoMeterProps } from './types';
import { defaultSpeedoMeterProps } from './SpeedometerDefaultProps';
declare const SpeedoMeter: {
    (props: SpeedoMeterProps & typeof defaultSpeedoMeterProps): React.JSX.Element;
    defaultProps: {
        radius: number;
        min: number;
        max: number;
        step: number;
        value: number;
        title: string;
        unit: string;
        markerLineSize: number;
        sliderWidth: number;
        sliderTrackColor: string;
        lineColor: string;
        lineSpace: number;
        linearGradient: {
            offset: string;
            color: string;
        }[];
        onChange: (_v: number) => void;
        onComplete: (_v: number) => void;
        openingRadian: number;
        disabled: boolean;
        isHideSlider: boolean;
        isHideTitle: boolean;
        isHideSubtitle: boolean;
        isHideValue: boolean;
        isHideTailText: boolean;
        isHideLines: boolean;
        isHideMarkerLine: boolean;
        isHideCenterContent: boolean;
        fixedMarker: boolean;
        markerCircleSize: number;
        markerCircleColor: string;
        markerPositionY: number;
        markerPositionX: number;
        needleBackgroundColor: string;
        needleColor: string;
        needleBorderWidth: number;
        needleHeight: number;
        variant: string;
        markerValueInterval: number;
        markerValueColor: string;
        strokeLinecap: string;
    };
};
export default SpeedoMeter;
