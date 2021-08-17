import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ThemeProvider, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {Spacing, Colors, Typography} from '../../styles/index';

interface Props {
  leftIcon?: any;
  rightIcon?: any;
  leftTitle?: any;
  rightTitle?: any;
  leftTitleSize?: any;
  rightTitleSize?: any;
  leftOnPress?: any;
  rightOnPress?: any;
  leftIconSize?: any;
  rightIconSize?: any;
  leftIconColor?: any;
  rightIconColor?: any;
  leftTitleColor?: any;
  rightTitleColor?: any;
}

const theme = {
  Text: {},
};

const WalletCustomHeader: React.FC<Props> = ({
  leftIcon,
  rightIcon,
  leftTitle,
  rightTitle,
  leftTitleSize,
  rightTitleSize,
  leftOnPress,
  rightOnPress,
  leftIconSize,
  rightIconSize,
  leftIconColor,
  rightIconColor,
  leftTitleColor,
  rightTitleColor,
}) => {
  return (
    <ThemeProvider>
      <View style={Styles.viewContainer}>
        <View style={Styles.itemViewContainer}>
            <Icon
              name={leftIcon}
              size={leftIconSize}
              color={leftIconColor}
              onPress={leftOnPress}
            />
          <View style={{justifyContent: 'flex-start'}}>
            <Text
              style={{
                fontSize: leftTitleSize,
                color: leftTitleColor,
                fontFamily: Typography.FONT_MEDIUM.fontFamily,
              }}>
              {leftTitle}
            </Text>
          </View>
        </View>
        <View style={Styles.itemViewContainer}>
            <Text
              style={{
                fontSize: rightTitleSize,
                color: rightTitleColor,
                fontFamily: Typography.FONT_MEDIUM.fontFamily,
              }}>
              {rightTitle}
            </Text>
          <View style={{justifyContent: 'flex-end'}}>
            <Icon
              name={rightIcon}
              size={rightIconSize}
              color={rightIconColor}
              onPress={rightOnPress}
            />
          </View>
        </View>
      </View>
    </ThemeProvider>
  );
};

export default WalletCustomHeader;

const Styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: Spacing.HEADER_MAIN_PADDING,
    paddingRight: Spacing.HEADER_MAIN_PADDING,
    borderBottomLeftRadius: Spacing.BORDER_RADIUS_8 * 3,
    borderBottomRightRadius: Spacing.BORDER_RADIUS_8 * 3,
    backgroundColor: Colors.INTRO_BACKGROUND_COLOR,
  },
  itemViewContainer: {
    flexDirection: 'row',
  },
});
