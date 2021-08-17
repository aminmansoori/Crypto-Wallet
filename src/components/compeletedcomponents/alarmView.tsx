import React from 'react';
import {ThemeProvider, Text} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import {Colors, Spacing, Typography} from '../../styles/index';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  text?: any;
  icon?: any;
  onPress?: any;
}

const AlarmView: React.FC<Props> = ({text, icon, onPress}) => {
  return (
    <ThemeProvider>
      <View style={Styles.viewStyle}>
        <Icon
          name={icon}
          size={Spacing.ICON_SIZE}
          color={Colors.ICON_WARNING_COLOR}
        />
        <Text style={Styles.textStyle} onPress={onPress}>
          {text}
        </Text>
      </View>
    </ThemeProvider>
  );
};

export default AlarmView;

const Styles = StyleSheet.create({
  textStyle: {
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    color: Colors.WRONG_INPUT_TEXT_COLOR,
    fontSize: Typography.FONT_SIZE_14,
  },
  viewStyle: {
    padding: Spacing.MARGIN_1,
    borderWidth: 1,
    width: Spacing.WIDTH_SCALE_300,
    height: Spacing.HEIGHT_ALARM,
    borderColor: Colors.WRONG_INPUT_BORDER_COLOR,
    borderRadius: Spacing.BORDER_RADIUS_8,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: Spacing.ALARM_MARGIN,
  },
});
