import React from 'react';
import { G, Text as SVGText } from 'react-native-svg';
import { useRadialSlider } from './hooks';
const MarkerValueContent = (props) => {
    const { radius = 100, thumbBorderWidth = 5, 
    // min = 0,
    max = 100, 
    // markerValue,
    // fixedMarker = false,
    markerValueInterval = 10, 
    // value,
    markerValueColor, } = props;
    const { lineHeight, lineCount, angle, marks, centerValue } = useRadialSlider(props);
    return (React.createElement(React.Fragment, null, marks.map((mark, index) => {
        /* const markIndex = Math.floor(
          (((((!fixedMarker ? (markerValue as number) : (value as number)) -
            min) *
            100) /
            (max - min)) *
            lineCount) /
            100
        ); */
        var _a;
        const maxCount = (lineCount / max);
        const markerInnerValue = Math.round((max / markerValueInterval));
        // if number is below 99(two digit number) then we set -2 for x property in svg Text
        const twoDigitsPositionValue = max < 99 ? -2 : -3;
        const getTransformValue = () => {
            return `rotate(92) translate(${twoDigitsPositionValue})`;
        };
        const getTextPositionValue = (type) => {
            if ((mark === null || mark === void 0 ? void 0 : mark.value) < centerValue) {
                return type === 'x' ? '0' : '-85';
            }
            else {
                return type === 'x' ? twoDigitsPositionValue : '-85';
            }
        };
        return (React.createElement(G, { key: index.toString() }, (index % markerInnerValue === 0) && (React.createElement(G, { transform: `translate(${radius + (lineHeight - thumbBorderWidth)}, ${radius + (lineHeight - thumbBorderWidth)})  ` },
            React.createElement(SVGText, { transform: `rotate(${index * maxCount + 87 + angle})  ${getTransformValue()} `, x: getTextPositionValue('x'), y: getTextPositionValue('y'), fill: markerValueColor, children: (_a = mark === null || mark === void 0 ? void 0 : mark.value) !== null && _a !== void 0 ? _a : 0 })))));
    })));
};
export default MarkerValueContent;
//# sourceMappingURL=MarkerValueContent.js.map