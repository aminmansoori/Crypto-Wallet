import React from 'react';
import {Text, ThemeProvider} from 'react-native-elements';
import {Colors, Spacing, Typography} from '../../styles/index';
import {StyleSheet, View} from 'react-native';
import ShadowButton from '../compeletedcomponents/shadowIconButton';

interface Props {
    sendOnPress?:any
    receiveOnPress?:any
}

const theme = {};

const ButtonViewMainHeader: React.FC<Props> = ({sendOnPress,receiveOnPress}) => {
  return (
    <ThemeProvider>
      <View
        style={Styles.viewContainer}>
        <ShadowButton
              title="Send"
              icon="share-outline"
              buttonBackgroundColor={Colors.STANDARD_BG_SHADOW_BUTTON_COLOR}
              borderColor={Colors.STANDARD_BG_SHADOW_BUTTON_COLOR}
              shadowColor={Colors.STANDARD_SHADOW_BUTTON_COLOR}
              width={Spacing.HEADER_MAIN_BUTTON_WIDTH}
              borderRadius={Spacing.BORDER_RADIUS_8}
              onPress={sendOnPress}
            />
            <ShadowButton
              title="Recieve"
              icon="md-download-outline"
              buttonBackgroundColor={Colors.STANDARD_BG_SHADOW_BUTTON_COLOR}
              borderColor={Colors.STANDARD_BG_SHADOW_BUTTON_COLOR}
              shadowColor={Colors.STANDARD_SHADOW_BUTTON_COLOR}
              width={Spacing.HEADER_MAIN_BUTTON_WIDTH}
              borderRadius={Spacing.BORDER_RADIUS_8}
              onPress={receiveOnPress}
            />
      </View>
    </ThemeProvider>
  );
};

export default ButtonViewMainHeader;

const Styles=StyleSheet.create({
    viewContainer:{
        width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingRight: Spacing.HEADER_MAIN_BUTTON_PADDING,
          paddingLeft: Spacing.HEADER_MAIN_BUTTON_PADDING,
          position: 'absolute',
          top: '85%',
    }
})