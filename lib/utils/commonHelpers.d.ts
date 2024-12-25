declare const createRange: (start: any, end: number, step: number | undefined) => any[];
declare const getExtraSize: (sliderWidth: number, thumbRadius: number, thumbBorderWidth: number) => number;
declare const getRadianByValue: (nvalue: number, openingRadian: number, max: number, min: number) => number;
declare const polarToCartesian: (radian: number, radius: number, sliderWidth: number, thumbRadius: number, thumbBorderWidth: number, sliderPoint: number, variant: string) => {
    x: number;
    y: number;
};
declare const cartesianToPolar: (x: number, y: number, radius: number, sliderWidth: number, thumbRadius: number, thumbBorderWidth: number, sliderPoint: number, variant: string) => number;
declare const getCurrentRadian: (value: number, openingRadian: number, max: number, min: number) => number;
export { polarToCartesian, createRange, getRadianByValue, getExtraSize, cartesianToPolar, getCurrentRadian, };
