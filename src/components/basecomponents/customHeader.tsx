import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ThemeProvider, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  leftIcon?: any;
  title?: any;
  titleSize?: any;
  rightIcon?: any;
  leftOnPress?: any;
  rightOnPress?: any;
  iconSize?: any;
  iconColor?: any;
  titleColor?: any;
  fontFamily?:any
}

const theme = {
  Text: {
  },
};

const CustomHeader: React.FC<Props> = ({
  leftIcon,
  title,
  rightIcon,
  iconSize,
  titleSize,
  leftOnPress,
  rightOnPress,
  iconColor,
  titleColor,
  fontFamily
}) => {
  return (
    <ThemeProvider>
      <View style={Styles.viewContainer}>
        <Icon
          name={leftIcon}
          size={iconSize}
          color={iconColor}
          onPress={leftOnPress}
        />
        <Text style={{fontSize: titleSize, color: titleColor,fontFamily:fontFamily}}>{title}</Text>
        <Icon
          name={rightIcon}
          size={iconSize}
          color={iconColor}
          onPress={rightOnPress}
        />
      </View>
    </ThemeProvider>
  );
};

export default CustomHeader;

const Styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
