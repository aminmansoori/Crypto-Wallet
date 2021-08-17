import React from 'react';
import {ThemeProvider, Button} from 'react-native-elements';
import {Spacing, Typography} from '../../styles/index';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

interface Props {
  shadowColor?: any;
  borderRadius?: any;
  isAvtive?: any;
  title?: any;
  icon?: any;
  onPress?: any;
  textColor?: any;
  buttonBackgroundColor?: any;
  buttonBorderColor?: any;
  iconColor?: any;
  buttonWidth?: any;
  buttonHeight?: any;
  fontSize?: any;
  fontFamily?: any;
}

const theme = {
  Button: {
    buttonStyle: {
      width: Spacing.WIDTH_SCALE_300,
      height: Spacing.HEIGHT_BUTTON,
      borderRadius: Spacing.BORDER_RADIUS_8,
    },
    titleStyle: {
      fontSize: Typography.FONT_SIZE_14,
      fontFamily: Typography.FONT_MEDIUM.fontFamily,
    },
  },
};

const CustomButton: React.FC<Props> = ({
  shadowColor,
  borderRadius,
  isAvtive,
  title,
  icon,
  onPress,
  textColor,
  buttonBackgroundColor,
  buttonBorderColor,
  iconColor,
  buttonWidth,
  buttonHeight,
  fontSize,
  fontFamily,
}) => {
  return (
    <ThemeProvider theme={theme}>
      {icon ? (
        <Button
          buttonStyle={{
            borderRadius: borderRadius,
            width: buttonWidth,
            height: buttonHeight,
            backgroundColor: buttonBackgroundColor,
            borderColor: buttonBorderColor,
            borderWidth: 1,
          }}
          titleStyle={{
            fontSize: fontSize,
            fontFamily: fontFamily,
            color: textColor,
            marginLeft: Spacing.MARGIN_1,
          }}
          title={title}
          icon={
            <Icon
              name={icon}
              size={(Spacing.ICON_SIZE * 2) / 3}
              color={iconColor}
            />
          }
          onPress={onPress}
          type="outline"
        />
      ) : (
        <Button
          buttonStyle={{
            height: buttonHeight,
            borderRadius: borderRadius,
            backgroundColor: buttonBackgroundColor,
            width: buttonWidth,
          }}
          titleStyle={{
            fontSize: fontSize,
            fontFamily: fontFamily,
            color: textColor,
          }}
          disabled={isAvtive}
          title={title}
          onPress={onPress}
        />
      )}
    </ThemeProvider>
  );
};

export default CustomButton;

const Styles = StyleSheet.create({
    shadowStyle: {
      shadowOffset: {width: 5, height: 5},
      shadowOpacity: 0.5,
      elevation: 10,
    },
  });
  