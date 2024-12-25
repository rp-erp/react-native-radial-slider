import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
const CenterContent = (props) => {
    const { title, subTitle, unit, titleStyle, subTitleStyle, valueStyle, unitStyle, isHideTitle, isHideSubtitle, isHideValue, value, centerContentStyle, unitValueContentStyle, } = props;
    return (React.createElement(View, { style: [styles.hideCenterContent, centerContentStyle] },
        !isHideTitle && (React.createElement(Text, { style: [styles.helperText, styles.subTitleWidth, titleStyle] }, title)),
        !isHideValue && (React.createElement(View, { style: [styles.hideValue, unitValueContentStyle] },
            React.createElement(Text, { style: [styles.valueText, styles.large_header, valueStyle] }, value),
            React.createElement(Text, { style: [styles.valueUnit, styles.helperText, unitStyle] }, unit))),
        !isHideSubtitle && (React.createElement(Text, { style: [styles.helperText, styles.subTitleWidth, subTitleStyle] }, subTitle))));
};
export default CenterContent;
//# sourceMappingURL=CenterContent.js.map