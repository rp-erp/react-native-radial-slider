import React from 'react';
import { useRadialSlider } from './hooks';
import { Circle, G, Polygon } from 'react-native-svg';
const NeedleContent = (props) => {
    const { radius = 100, min = 0, max = 100, markerCircleSize, markerCircleColor, markerPositionY, markerPositionX, needleBackgroundColor, needleColor, needleBorderWidth, needleHeight, } = props;
    const { lineCount, lines } = useRadialSlider(props);
    return (React.createElement(React.Fragment, null, lines.map(_value => {
        const activeIndex = (((((props === null || props === void 0 ? void 0 : props.value) - min) * 100) / (max - min)) *
            lineCount) /
            100;
        const needleRotation = activeIndex < 50 ? 122 : 119;
        const circleSize = Math.round(radius / markerCircleSize) * 2;
        const dynamicNeedleHeight = (needleHeight / radius) * 100 + 5;
        return (React.createElement(G, { key: _value, transform: `rotate(${activeIndex - needleRotation}, ${radius}, ${radius})`, x: markerPositionX, y: markerPositionY },
            React.createElement(Circle, { r: circleSize, cx: radius, cy: radius, fill: markerCircleColor }),
            React.createElement(Polygon, { points: `97, 118 103, 118 100, ${dynamicNeedleHeight}`, x: radius - 100, y: radius - 100, fill: needleBackgroundColor, strokeWidth: needleBorderWidth, stroke: needleColor, strokeLinejoin: 'round' })));
    })));
};
export default NeedleContent;
//# sourceMappingURL=NeedleContent.js.map