import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;
// Used via Metrics.baseMargin
const Metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
};
export { horizontalScale, verticalScale, moderateScale, Metrics };
//# sourceMappingURL=Metrics.js.map