import React from 'react';
import {StyleSheet, View, Linking} from 'react-native';
import {Text, ThemeProvider, Image} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles/index';
import Button from '../../components/compeletedcomponents/customButton';
import CustomHeader from '../../components/basecomponents/customHeader';

interface Props {
  navigation?: any;
}

const CreateWallet: React.FC<Props> = ({navigation}) => {
  return (
    <ThemeProvider>
      <View style={Styles.viewContainer}>
        <View style={Styles.topContainer}>
          <CustomHeader
            title="LOGO"
            titleSize={Typography.FONT_SIZE_50}
            titleColor={Colors.LOGO_FONT_COLOR}
            fontFamily={Typography.FONT_SEMIBOLD.fontFamily}
          />
          <View style={Styles.termView}>
            <Text style={Styles.termFontLogo}>
              Lorem ipsum is placeholder text commonly
            </Text>
            <Text style={Styles.termFontLogo}>
              used in the graphic for previewing layouts.
            </Text>
          </View>
        </View>
        <View style={Styles.photoPosition}>
          <Image
            source={require('../../assets/images/wallet-04.png')}
            style={Styles.imageView}
          />
        </View>
        <View style={[Styles.lowLevelPosition]}>
          <Button
            buttonBackgroundColor={Colors.STANDARD_FILL_BG_BUTTON_COLOR}
            textColor={Colors.STANDARD_FILL_TEXT_BUTTON_COLOR}
            title="Create Wallet"
            onPress={() => {
              navigation.navigate('Terms');
            }}
            buttonWidth={Spacing.WIDTH_SCALE_300}
            buttonHeight={Spacing.HEIGHT_BUTTON}
            borderRadius={Spacing.BORDER_RADIUS_8}
            fontSize={Typography.FONT_SIZE_14}
            fontFamily={Typography.FONT_MEDIUM.fontFamily}
          />
          <Text
            style={Styles.lowLevelText}
            onPress={() => {
              navigation.navigate('ImportWallet');
            }}>
            I already have a wallet
          </Text>
        </View>
      </View>
    </ThemeProvider>
  );
};

export default CreateWallet;

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
    fontSize: Typography.FONT_SIZE_12,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    width: Spacing.IMAGE_SIZE,
    height: Spacing.IMAGE_SIZE,
  },
});
