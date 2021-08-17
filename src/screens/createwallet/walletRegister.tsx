import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, ThemeProvider, Image} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles/index';
import Button from '../../components/compeletedcomponents/customButton';
import CustomHeader from '../../components/basecomponents/customHeader';
import CustomInput from '../../components/compeletedcomponents/customInput';

interface Props {
  navigation?: any;
}

const theme = {
  Text: {
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
  },
};

const WalletRegister: React.FC<Props> = ({navigation}) => {
  const [errorMsg, setErrorMsg] = useState('');
  const [errorStatus, setErrorStatus] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const checkError = () => {
    var letters = /^[A-Za-z]+$/;
    if (!inputValue.match(letters)) {
      setErrorStatus(true);
      setErrorMsg('wallet name should be only alphabetis letter');
    } else {
      setErrorStatus(false);
      setErrorMsg('');
      navigation.navigate('ShowRecoveryPhrases');
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <View style={Styles.viewContainer}>
        <View style={Styles.topContainer}>
          <CustomHeader
            leftIcon="arrow-back-outline"
            leftOnPress={() => {
              navigation.goBack();
            }}
            iconColor={Colors.ICON_BACK_COLOR}
            iconSize={Spacing.ICON_SIZE}
            title="Wallet Name"
            titleSize={Typography.FONT_SIZE_20}
            titleColor={Colors.LOGO_FONT_COLOR}
            fontFamily={Typography.FONT_MEDIUM.fontFamily}
          />
          <View style={Styles.termView}>
            <Text style={Styles.termFontLogo}>
              You can choose a name for your wallet
            </Text>
            <Text style={Styles.termFontLogo}>
              and search for your different wallets by name
            </Text>
          </View>
        </View>
        <View style={Styles.photoPosition}>
          <Image
            source={require('../../assets/images/wallet-06.png')}
            style={Styles.imageView}
          />
        </View>
        <View style={[Styles.lowLevelPosition]}>
          <Text style={Styles.termFontLogo}>
            Please choose a name for your wallet
          </Text>
          <View style={Styles.inputContainer}>
            <CustomInput
              backGroundColor={Colors.STANDARD_INPUT_BG_COLOR}
              errorMessage={errorStatus ? errorMsg : null}
              value={inputValue}
              setValue={setInputValue}
              width={Spacing.WIDTH_SCALE_300}
            />
          </View>
          <Button
            isAvtive={false}
            buttonBackgroundColor={Colors.STANDARD_FILL_BG_BUTTON_COLOR}
            textColor={Colors.STANDARD_FILL_TEXT_BUTTON_COLOR}
            title="Continue"
            onPress={() => {
              checkError();
            }}
            buttonWidth={Spacing.WIDTH_SCALE_300}
            buttonHeight={Spacing.HEIGHT_BUTTON}
            borderRadius={Spacing.BORDER_RADIUS_8}
            fontSize={Typography.FONT_SIZE_14}
            fontFamily={Typography.FONT_MEDIUM.fontFamily}
          />
        </View>
      </View>
    </ThemeProvider>
  );
};

export default WalletRegister;

const Styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.BASE_BACKGROUND_COLOR,
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
  checkBoxView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkStyle: {
    color: Colors.LOGO_FONT_COLOR,
    marginLeft: Spacing.MARGIN_1,
    textDecorationLine: 'underline',
  },
  termView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing.MARGIN_1,
  },
  termFontLogo: {
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.FONT_LIGHT_COLOR,
  },
  inputContainer: {
    marginTop: Spacing.MARGIN_1,
  },
});
