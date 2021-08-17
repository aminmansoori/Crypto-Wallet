import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, ThemeProvider, Image} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles/index';
import Button from '../../components/compeletedcomponents/customButton';
import CustomHeader from '../../components/basecomponents/customHeader';
import SwitchComponent from '../../components/compeletedcomponents/switchComponent';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  navigation?: any;
}

const LanguageSelection: React.FC<Props> = ({navigation}) => {
  return (
    <LinearGradient
      colors={[Colors.FIRST_COLOR, Colors.SECOND_COLOR]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}>
      <ThemeProvider>
        <View style={Styles.viewContainer}>
          <View style={Styles.topContainer}>
            <CustomHeader
              title="Get started"
              titleSize={Typography.FONT_SIZE_24}
              titleColor={Colors.LANGUAGE_LOGO_FONT_COLOR}
              fontFamily={Typography.FONT_SEMIBOLD.fontFamily}
            />
            <View style={Styles.termView}>
              <Text style={Styles.termFontLogo}>
                To get started with Payagah,please select
              </Text>
              <Text style={Styles.termFontLogo}>your language.</Text>
            </View>
          </View>
          <View style={Styles.photoPosition}>
            <Image
              source={require('../../assets/images/wallet-04.png')}
              style={Styles.imageView}
            />
          </View>

          <View style={[Styles.lowLevelPosition]}>
            <View
              style={{
                marginBottom: 10,
              }}>
              <SwitchComponent leftTitle="فارسی" rightTitle="English" />
            </View>
            <Button
              buttonBackgroundColor={Colors.BASE_BACKGROUND_COLOR}
              textColor={Colors.LOGO_FONT_COLOR}
              title="Continue"
              onPress={() => {
                navigation.replace('CreateWalletFlow');
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
    </LinearGradient>
  );
};

export default LanguageSelection;

const Styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: Colors.INTRO_BACKGROUND_COLOR,
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
  termFontLogo: {
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.LANGUAGE_TITLE_FONT_COLOR,
  },
  lowLevelText: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    color: Colors.INTRO_BACKGROUND_COLOR,
    marginTop: Spacing.MARGIN_1,
    textDecorationLine: 'underline',
  },
  termView: {
    marginTop: Spacing.MARGIN_1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    width: Spacing.IMAGE_SIZE,
    height: Spacing.IMAGE_SIZE,
  },
});
