import {Dimensions,PixelRatio} from 'react-native';
const WIDTH=Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;
const GUIDELINEBASEWIDTH = 375;

export const WIDTHSCALESIZE = (size: number) => (WIDTH / GUIDELINEBASEWIDTH) * size;
export const HEIGHTSCALESIZE = (size: number) => (HEIGHT / GUIDELINEBASEWIDTH) * size;
export const FONTSCALE = (size: number) => size * PixelRatio.getFontScale();

