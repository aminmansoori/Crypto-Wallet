import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeProvider, Image} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles/index';
import Button from './customButton';
import CustomHeader from '../basecomponents/customHeader';

interface Props {
  onPress?: any;
}

const WalletDone: React.FC<Props> = ({onPress}) => {
  return (
    <ThemeProvider>
      <View style={Styles.viewContainer}>
        <View style={{flex: 1}}></View>
        <View style={Styles.modalView}>
          <View style={Styles.topContainer}>
            <CustomHeader
              title="Your wallet was successfully"
              titleSize={Typography.FONT_SIZE_20}
              titleColor={Colors.LOGO_FONT_COLOR}
              fontFamily={Typography.FONT_MEDIUM.fontFamily}
            />
            <CustomHeader
              title="created."
              titleSize={Typography.FONT_SIZE_24}
              titleColor={Colors.LOGO_FONT_COLOR}
              fontFamily={Typography.FONT_MEDIUM.fontFamily}
            />
          </View>
          <View style={Styles.photoPosition}>
            <Image
              source={require('../../assets/images/wallet-01.png')}
              style={Styles.imageView}
            />
          </View>
          <View style={[Styles.lowLevelPosition]}>
            <Button
              buttonBackgroundColor={Colors.STANDARD_FILL_BG_BUTTON_COLOR}
              textColor={Colors.STANDARD_FILL_TEXT_BUTTON_COLOR}
              title="Done"
              onPress={onPress}
              buttonWidth={Spacing.WIDTH_SCALE_300}
              buttonHeight={Spacing.HEIGHT_BUTTON}
              borderRadius={Spacing.BORDER_RADIUS_8}
              fontSize={Typography.FONT_SIZE_14}
              fontFamily={Typography.FONT_MEDIUM.fontFamily}
            />
          </View>
        </View>
      </View>
    </ThemeProvider>
  );
};

export default WalletDone;

const Styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    flex: 3,
    backgroundColor: Colors.BASE_BACKGROUND_COLOR,
    alignItems: 'center',
    borderTopLeftRadius: Spacing.WALLET_DONE_RADIUS,
    borderTopRightRadius: Spacing.WALLET_DONE_RADIUS,
  },
  
  topContainer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoPosition: {
    flex: 4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowLevelPosition: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    width: Spacing.IMAGE_SIZE,
    height: Spacing.IMAGE_SIZE,
  },
});
