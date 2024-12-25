import React from 'react';
import Constants from '../../constants';
import RadialSlider from './RadialSlider';
import SpeedoMeter from './SpeedoMeter';
const RootSlider = (props) => {
    const { variant } = props;
    return variant === Constants.speedoMeterMarker ||
        variant === Constants.speedometer ? (
    // @ts-ignore
    React.createElement(SpeedoMeter, { ...props })) : (React.createElement(RadialSlider, { ...props }));
};
export default RootSlider;
//# sourceMappingURL=RootSlider.js.map