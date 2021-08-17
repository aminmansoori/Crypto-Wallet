import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Linking,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {Text, ThemeProvider, Image} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles/index';
import Button from '../../components/compeletedcomponents/customButton';
import CustomHeader from '../../components/basecomponents/customHeader';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

interface Props {
  navigation?: any;
}

const ScanCode: React.FC<Props> = ({navigation}) => {
  const [deposit, setDeposit] = useState<any>('');
  const onSuccess = (e: any) => {
    console.log('data= ', e.data);
    setDeposit(e.data)
    navigation.goBack({depoit:deposit})
    // Linking.openURL(e.data).catch((err: any) =>
    //   ToastAndroid.showWithGravityAndOffset(
    //     'wrong QR-Code is captured',
    //     ToastAndroid.SHORT,
    //     ToastAndroid.BOTTOM,
    //     25,
    //     50,
    //   ),
    // );
  };
  return (
    <ThemeProvider>
      <View style={Styles.viewContainer}>
        <View style={Styles.topContainer}>
          <View style={{flex: 2, justifyContent: 'center'}}>
            <CustomHeader
              leftIcon="arrow-back-outline"
              leftOnPress={() => {
                navigation.goBack();
              }}
              iconSize={Spacing.ICON_SIZE}
              iconColor={Colors.LAFT_ARROW_ICON_COLOR}
            />
          </View>
          <View style={Styles.termView}>
            <Text style={Styles.termFontLogo}>Scan code</Text>
            <Text style={Styles.descriptionFontStyle}>
              Please scan the recipient QR code.
            </Text>
          </View>
        </View>
        <View style={Styles.scannerPosition}>
          <QRCodeScanner
            cameraStyle={{flex: 1}}
            onRead={onSuccess}
            reactivate={true}
          />
        </View>
      </View>
    </ThemeProvider>
  );
};

export default ScanCode;

const Styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.BASE_BACKGROUND_COLOR,
  },
  logoRowPosition: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topContainer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scannerPosition: {
    flex: 6,
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowLevelPosition: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  termFontLogo: {
    fontFamily: Typography.FONT_MEDIUM.fontFamily,
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.INTRO_BACKGROUND_COLOR,
  },
  descriptionFontStyle: {
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.FONT_LIGHT_COLOR,
  },
  lowLevelText: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    color: Colors.LINK_COLOR,
    marginTop: Spacing.MARGIN_1,
    textDecorationLine: 'underline',
  },
  termView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageView: {
    width: Spacing.IMAGE_SIZE,
    height: Spacing.IMAGE_SIZE,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
