import { useEffect, useRef, useState } from 'react';
import { PanResponder, } from 'react-native';
import { cartesianToPolar, getCurrentRadian, getRadianByValue, polarToCartesian, } from '../../../utils/commonHelpers';
import useRadialSlider from './useRadialSlider';
const useSliderAnimation = (props) => {
    const { step = 1, radius = 100, sliderWidth = 18, thumbRadius = 18, thumbBorderWidth = 5, disabled, min = 0, onChange = () => { }, max = 100, onComplete = () => { }, startAngle = 270, variant = 'default', } = props;
    let moveStartValue;
    let startCartesian;
    let moveStartRadian;
    const { radianValue } = useRadialSlider(props);
    const prevValue = useRef(props.value > min ? props.value : min);
    const [value, setValue] = useState((props === null || props === void 0 ? void 0 : props.value) < min ? min : (props === null || props === void 0 ? void 0 : props.value) > max ? max : props === null || props === void 0 ? void 0 : props.value);
    useEffect(() => {
        if (max < (props === null || props === void 0 ? void 0 : props.value)) {
            setValue(max);
        }
        else if (min > (props === null || props === void 0 ? void 0 : props.value)) {
            setValue(min);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [max, min]);
    useEffect(() => {
        if (min <= (props === null || props === void 0 ? void 0 : props.value) && max >= (props === null || props === void 0 ? void 0 : props.value)) {
            setValue(props === null || props === void 0 ? void 0 : props.value);
            prevValue.current = props === null || props === void 0 ? void 0 : props.value;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props === null || props === void 0 ? void 0 : props.value]);
    useEffect(() => {
        onChange(value);
        prevValue.current = value;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    const handlePanResponderGrant = () => {
        moveStartValue = prevValue.current;
        moveStartRadian = getRadianByValue(prevValue.current, radianValue, max, min);
        startCartesian = polarToCartesian(moveStartRadian, radius, sliderWidth, thumbRadius, thumbBorderWidth, startAngle, variant);
        return true;
    };
    const handlePanResponderMove = (_e, gestureState) => {
        if (disabled) {
            return;
        }
        let { x, y } = startCartesian;
        x += gestureState.dx;
        y += gestureState.dy;
        const radian = cartesianToPolar(x, y, radius, sliderWidth, thumbRadius, thumbBorderWidth, startAngle, variant);
        const ratio = (moveStartRadian - radian) / ((Math.PI - radianValue) * 2);
        const diff = max - min;
        let nValue;
        if (step) {
            nValue = moveStartValue + Math.round((ratio * diff) / step) * step;
        }
        else {
            nValue = moveStartValue + ratio * diff;
        }
        nValue = Math.max(min, Math.min(max, nValue));
        setValue((prevState) => {
            const roundedValue = parseFloat(nValue.toFixed(1));
            prevValue.current =
                Math.abs(roundedValue - prevState) > diff / 4
                    ? prevState
                    : roundedValue;
            return Math.abs(roundedValue - prevState) > diff / 4
                ? prevState
                : roundedValue;
        });
        onChange(prevValue.current);
    };
    const handlePanResponderEnd = () => {
        if (disabled) {
            return;
        }
        onComplete(prevValue.current);
    };
    const panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => false,
        onPanResponderGrant: handlePanResponderGrant,
        onPanResponderMove: handlePanResponderMove,
        onPanResponderRelease: handlePanResponderEnd,
        onPanResponderTerminationRequest: () => false,
        onPanResponderTerminate: handlePanResponderEnd,
    })).current;
    const currentRadian = getCurrentRadian(value, radianValue, max, min);
    const curPoint = polarToCartesian(currentRadian, radius, sliderWidth, thumbRadius, thumbBorderWidth, startAngle, variant);
    return {
        panResponder,
        prevValue,
        value,
        setValue,
        curPoint,
        currentRadian,
    };
};
export default useSliderAnimation;
//# sourceMappingURL=useSliderAnimation.js.map