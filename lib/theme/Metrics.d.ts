declare const horizontalScale: (size: number) => number;
declare const verticalScale: (size: number) => number;
declare const moderateScale: (size: number, factor?: number) => number;
declare const Metrics: {
    screenWidth: number;
    screenHeight: number;
};
export { horizontalScale, verticalScale, moderateScale, Metrics };
