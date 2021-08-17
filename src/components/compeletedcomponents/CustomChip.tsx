import React from 'react';
import {ThemeProvider, Text} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import {Colors, Spacing, Typography} from '../../styles/index';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  text?: any;
  icon?: any;
  onPress?: any;
  iconOnPress?:any
}

const CustomChip: React.FC<Props> = ({text, icon, onPress,iconOnPress}) => {
  return (
    <ThemeProvider>
      <View style={Styles.chipStyle}>
        <Text style={Styles.textStyle} onPress={onPress}>
          {text}
        </Text>
        <Icon name={icon} size={Spacing.ICON_SIZE/2} color={Colors.CHIP_ICON_COLOR} onPress={iconOnPress}/>
      </View>
    </ThemeProvider>
  );
};

export default CustomChip;

const Styles = StyleSheet.create({
  textStyle: {
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    color: Colors.CHIP_TEXT_COLOR,
    fontSize: Typography.FONT_SIZE_14,
    margin:Spacing.CHIP_MARGIN
  },
  chipStyle: {
    backgroundColor: Colors.CHIP_BG_COLOR,
    borderRadius: Spacing.CHIP_MARGIN,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
