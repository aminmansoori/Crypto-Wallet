import React, {useState} from 'react';
import {StyleSheet, View, Linking} from 'react-native';
import {Text, ThemeProvider, Image} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles/index';
import Button from '../../components/compeletedcomponents/customButton';
import CustomHeader from '../../components/basecomponents/customHeader';
import CheckBox from 'react-native-customizable-checkbox';

interface Props {
  navigation?: any;
}

const theme = {};

const WalletTerms: React.FC<Props> = ({navigation}) => {
  const [checkTerm, setCheckTerm] = useState(false);

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
            title="Terms and Conditions"
            titleSize={Typography.FONT_SIZE_20}
            titleColor={Colors.LOGO_FONT_COLOR}
            fontFamily={Typography.FONT_MEDIUM.fontFamily}
          />
        </View>
        <View style={Styles.photoPosition}>
          <Image
            source={require('../../assets/images/wallet-08.png')}
            style={Styles.imageView}
          />
        </View>
        <View style={[Styles.lowLevelPosition]}>
          <View style={Styles.checkBoxView}>
            <CheckBox
              label="I Accept AgahPay"
              value={checkTerm}
              onChangeValue={() => setCheckTerm(!checkTerm)}
              isContainerClickable={true}
              colorActive={Colors.LOGO_FONT_COLOR}
              colorInactive={Colors.BASE_BACKGROUND_COLOR}
              boxStyle={Styles.checkView}
              textStyle={Styles.checkTextStyle}
              containerStyle={Styles.checkContainerStyle}
            />
            <Text
              style={Styles.linkStyle}
              onPress={() => {
                Linking.openURL('http://google.com');
              }}>
              terms and conditions
            </Text>
          </View>
          <View style={Styles.buttonContainer}>
            <Button
              isAvtive={!checkTerm}
              buttonBackgroundColor={Colors.STANDARD_FILL_BG_BUTTON_COLOR}
              textColor={Colors.STANDARD_FILL_TEXT_BUTTON_COLOR}
              title="Continue"
              onPress={() => {
                navigation.navigate('Register');
              }}
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

export default WalletTerms;

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
  buttonContainer: {
    marginTop: Spacing.MARGIN_1,
  },
  checkBoxView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkStyle: {
    color: Colors.LINK_COLOR,
    marginLeft: Spacing.MARGIN_1,
    textDecorationLine: 'underline',
  },
  checkView: {
    borderColor: Colors.LOGO_FONT_COLOR,
    height: Spacing.CHECKBOX_SIZE,
    width: Spacing.CHECKBOX_SIZE,
  },
  checkTextStyle: {
    color: Colors.FONT_LIGHT_COLOR,
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
  },
  checkContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
