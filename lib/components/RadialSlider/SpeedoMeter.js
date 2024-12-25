import React, { useEffect } from 'react';
import Svg, { Path, Defs, LinearGradient, Stop, } from 'react-native-svg';
import { View, Platform } from 'react-native';
import { styles } from './styles';
import { useSliderAnimation, useRadialSlider } from './hooks';
import CenterContent from './CenterContent';
import TailText from './TailText';
import LineContent from './LineContent';
import NeedleContent from './NeedleContent';
import { defaultSpeedoMeterProps } from './SpeedometerDefaultProps';
import MarkerValueContent from './MarkerValueContent';
const SpeedoMeter = (props) => {
    const { radius, sliderWidth, sliderTrackColor, openingRadian, linearGradient = [], style, markerLineSize, contentStyle, isHideSlider, isHideCenterContent, isHideTailText, isHideLines, unit = '', strokeLinecap, max, unitStyle, value = 0, unitValueContentStyle, min, } = props;
    const { value: sliderValue = 0, setValue, curPoint, currentRadian, } = useSliderAnimation(props);
    useEffect(() => {
        if (value < min) {
            setValue(min);
        }
        else if (value > max) {
            setValue(max);
        }
        else {
            setValue(value);
        }
    }, [max, min, setValue, value]);
    const { svgSize, containerRef, startPoint, endPoint, startRadian, isMarkerVariant, } = useRadialSlider(props);
    const onLayout = () => {
        const ref = containerRef.current;
        if (ref) {
            ref.measure((_x, _y, _width, _height) => { });
        }
    };
    return (React.createElement(View, { onLayout: onLayout, ref: containerRef, style: [styles.container, style, { width: svgSize, height: svgSize }], testID: "slider-view" },
        React.createElement(Svg, { width: svgSize + markerLineSize / 2 - (Platform.OS === 'web' ? 20 : 0), height: svgSize + markerLineSize / 2, viewBox: `-${markerLineSize / 2} -${markerLineSize / 2} ${svgSize + markerLineSize} ${svgSize + markerLineSize}`, preserveAspectRatio: "none" },
            React.createElement(Defs, null,
                React.createElement(LinearGradient, { x1: "0%", y1: "100%", x2: "100%", y2: "0%", id: "gradient" }, linearGradient === null || linearGradient === void 0 ? void 0 : linearGradient.map((item, index) => (React.createElement(Stop, { key: index, offset: item.offset, stopColor: item.color }))))),
            !isHideTailText && React.createElement(TailText, { ...props }),
            !isHideLines && (React.createElement(LineContent, { ...props, value: sliderValue })),
            isMarkerVariant && (React.createElement(MarkerValueContent, { ...props, value: sliderValue })),
            !isMarkerVariant && !isHideSlider && (React.createElement(React.Fragment, null,
                React.createElement(Path, { strokeWidth: sliderWidth, stroke: sliderTrackColor, fill: "none", strokeLinecap: strokeLinecap, d: `M${startPoint.x},${startPoint.y} A ${radius},${radius},0,${startRadian - openingRadian >= Math.PI ? '1' : '0'},1,${endPoint.x},${endPoint.y}` }),
                React.createElement(Path, { strokeWidth: sliderWidth, stroke: "url(#gradient)", fill: "none", strokeLinecap: strokeLinecap, d: `M${startPoint.x},${startPoint.y} A ${radius},${radius},0,${startRadian - currentRadian >= Math.PI ? '1' : '0'},1,${curPoint.x},${curPoint.y}` }))),
            React.createElement(NeedleContent, { ...props, value: sliderValue })),
        React.createElement(View, { style: [styles.content, contentStyle], pointerEvents: "box-none" }, !isHideCenterContent && (React.createElement(CenterContent, { ...props, value: sliderValue, unitValueContentStyle: [
                styles.centerText,
                unitValueContentStyle,
                // eslint-disable-next-line react-native/no-inline-styles
                { marginLeft: (unit === null || unit === void 0 ? void 0 : unit.length) ? (unit === null || unit === void 0 ? void 0 : unit.length) * 5 : 10 },
            ], isHideSubtitle: true, isHideTitle: true, unitStyle: [styles.speedValueUnit, unitStyle], centerContentStyle: styles.centerTextView })))));
};
SpeedoMeter.defaultProps = defaultSpeedoMeterProps;
export default SpeedoMeter;
//# sourceMappingURL=SpeedoMeter.js.map