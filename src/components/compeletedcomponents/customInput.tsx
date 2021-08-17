import {types} from '@babel/core';
import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Input, ThemeProvider} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles/index';
import Icon from 'react-native-vector-icons/Ionicons';
const theme = {};

interface Props {
  multiLine?: any;
  height?: any;
  backGroundColor?: any;
  errorMessage?: any;
  value?: any;
  setValue?: any;
  shadowColor?: any;
  width?: any;
  placeHolder?: any;
  placeholderTextColor?: any;
  icon?: any;
  iconColor?: any;
  iconSize?: any;
  keyboardType?: any;
  inputStyle?: any;
  lable?: any;
  lableStyle?: any;
  iconOnPress?: any;
}

const CustomInput: React.FC<Props> = ({
  multiLine,
  height,
  backGroundColor,
  errorMessage,
  value,
  setValue,
  shadowColor,
  width,
  placeHolder,
  placeholderTextColor,
  icon,
  iconColor,
  iconSize,
  keyboardType,
  inputStyle,
  lable,
  lableStyle,
  iconOnPress,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Input
        inputContainerStyle={[
          Styles.inputContainer,
          Styles.shadowStyle,
          {
            width: width,
            height: height,
            backgroundColor: backGroundColor,
            shadowColor: shadowColor,
            borderColor: errorMessage
              ? Colors.WRONG_INPUT_BORDER_COLOR
              : backGroundColor,
          },
        ]}
        label={lable}
        labelStyle={lableStyle}
        inputStyle={inputStyle}
        placeholder={placeHolder}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize="none"
        autoCorrect={false}
        multiline={multiLine}
        errorMessage={errorMessage}
        keyboardType={keyboardType}
        value={value}
        onChangeText={setValue}
        errorStyle={Styles.errorStyle}
        rightIcon={
          <Icon
            name={icon}
            color={iconColor}
            size={iconSize}
            style={{marginRight: Spacing.MARGIN_1}}
            onPress={iconOnPress}
          />
        }
      />
    </ThemeProvider>
  );
};

export default CustomInput;

const Styles = StyleSheet.create({
  inputContainer: {
    borderRadius: Spacing.BORDER_RADIUS_8,
    borderWidth: 1,
  },
  errorStyle: {
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.WRONG_INPUT_TEXT_COLOR,
  },
  shadowStyle: {
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    elevation: 1,
  },
});
