import React from 'react';
import {ThemeProvider, Button} from 'react-native-elements';
import {Spacing, Colors, Typography} from '../../styles/index';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View} from 'react-native';
interface Props {
  title?: any;
  icon?: any;
  onPress?: any;
  textColor?: any;
  buttonBackgroundColor?: any;
  borderColor?: any;
  shadowColor?: any;
  width?: any;
  borderRadius?: any;
  inAvtive?: any;
  height?:any
}

const theme = {
  Button: {
    buttonStyle: {
      width: Spacing.ICON_BUTTON_WIDTH,
      height: Spacing.HEIGHT_BUTTON,
      borderRadius: Spacing.BORDER_RADIUS_8,
      borderColor: Colors.STANDARD_BG_SHADOW_BUTTON_COLOR,
      borderWidth: 1,
    },
  },
};

const ShadowIconButton: React.FC<Props> = ({
  title,
  icon,
  onPress,
  buttonBackgroundColor,
  borderColor,
  shadowColor,
  width,
  borderRadius,
  height
}) => {
  return (
    <ThemeProvider theme={theme}>
      <View
        style={[
          Styles.shadowStyle,
          {
            width: width,
            height:height,
            backgroundColor: buttonBackgroundColor,
            shadowColor: shadowColor,
            borderRadius: borderRadius,
          },
        ]}>
        <Button
          buttonStyle={{
            backgroundColor: buttonBackgroundColor,
            borderColor: borderColor,
            width: width,
            borderRadius: borderRadius,
          }}
          titleStyle={Styles.titleStyle}
          title={title}
          icon={
            <Icon
              name={icon}
              size={(Spacing.ICON_SIZE * 3) / 4}
              color={Colors.STANDARD_SHADOW_TEXT_BUTTON_COLOR}
            />
          }
          onPress={onPress}
          type="outline"></Button>
      </View>
    </ThemeProvider>
  );
};

export default ShadowIconButton;

const Styles = StyleSheet.create({
  shadowStyle: {
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 10,
    elevation: 20,
  },
  titleStyle: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_MEDIUM.fontFamily,
    color: Colors.STANDARD_SHADOW_TEXT_BUTTON_COLOR,
    marginLeft: Spacing.MARGIN_1,
  },
});
