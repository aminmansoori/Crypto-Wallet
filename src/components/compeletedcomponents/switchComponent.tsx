import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {ThemeProvider, Text} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles';

interface Props {
  leftTitle?: any;
  rightTitle?: any;
}

const theme = {
  Text: {
    fontSize: Typography.FONT_SIZE_14,
    fontStyle: 'normal',
    textAlign: 'center',
    fontFamily: Typography.FONT_MEDIUM,
  },
};

const CustomSwitch: React.FC<Props> = ({leftTitle, rightTitle}) => {
  const EnglishTextStyle = () => {
    return {
      color:
        ButtonStatus === 'flex-end'
          ? Colors.SWITCH_ACTIVE_TEXT_COLOR
          : Colors.SWITCH_DEACTIVE_TEXT_COLOR,
    };
  };

  const PersionTextStyle = () => {
    return {
      color:
        ButtonStatus === 'flex-start'
          ? Colors.SWITCH_ACTIVE_TEXT_COLOR
          : Colors.SWITCH_DEACTIVE_TEXT_COLOR,
    };
  };

  const [ButtonStatus, SetButtonStatus] = useState<any>('flex-end');
  const touchableFiller: string = '         ';
  return (
    <ThemeProvider theme={theme}>
      <View style={Styles.viewContainer}>
        <Text style={PersionTextStyle()}>{leftTitle}</Text>
        <View
          style={[
            Styles.mainPartView,
            {
              alignItems:
                ButtonStatus === 'flex-end' ? 'flex-end' : 'flex-start',
            },
          ]}>
          <TouchableOpacity
            style={Styles.switchButton}
            onPress={() => {
              SetButtonStatus(
                ButtonStatus === 'flex-end' ? 'flex-start' : 'flex-end',
              );
            }}>
            <Text>{touchableFiller}</Text>
          </TouchableOpacity>
        </View>
        <Text style={EnglishTextStyle()}>{rightTitle}</Text>
      </View>
    </ThemeProvider>
  );
};

export default CustomSwitch;

const Styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainPartView: {
    backgroundColor: Colors.SWITCH_CONTAINER_BG_COLOR,
    borderRadius: Spacing.SWITCH_RADIUS,
    padding: Spacing.SWITCH_PADDING,
    width: Spacing.SWITCH_WIDTH,
    justifyContent: 'center',
    margin: Spacing.MARGIN_1,
    shadowColor: Colors.SWITCH_CONTAINER_SHADOW_COLOR,
    elevation:10
  },
  switchButton:{
    backgroundColor: Colors.SWITCH_BUTTON_BG_COLOR,
    borderRadius: Spacing.SWITCH_RADIUS,
  }
});
