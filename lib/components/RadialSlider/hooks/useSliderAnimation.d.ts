import type { RadialSliderAnimationHookProps } from '../types';
declare const useSliderAnimation: (props: RadialSliderAnimationHookProps) => {
    panResponder: import("react-native").PanResponderInstance;
    prevValue: import("react").MutableRefObject<number>;
    value: number;
    setValue: import("react").Dispatch<import("react").SetStateAction<number>>;
    curPoint: {
        x: number;
        y: number;
    };
    currentRadian: number;
};
export default useSliderAnimation;
