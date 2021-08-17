import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Text, ThemeProvider} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles/index';
import PINCode, {hasUserSetPinCode} from '@haskkor/react-native-pincode';
import CustomPattern from '../../components/compeletedcomponents/patternLockComponent';
interface Props {
  navigation?: any;
}

const SetPattern: React.FC<Props> = ({navigation}) => {
  const FinishProcess = async () => {
    try {
      const hasPin = await hasUserSetPinCode();
      if (hasPin) {
        navigation.replace('EnterPinLock');
      } else {
        Alert.alert('alert', 'the retyped password is wrong.');
      }
    } catch (err) {
      console.log('err= ', err);
    }
  };

  return (
    <ThemeProvider>
      <View style={Styles.viewContainer}>
        <View>
          <View style={{flex: 4}}>
            <CustomPattern
              FinishProcess={() => FinishProcess()}
              PINCodeStatus="choose"
              passwordLength={6}
              titleChoose="Please confirm your passcode"
              titleConfirm="Please confirm your passcode again"
              titleConfirmFailed="Incorrect Password"
            />
          </View>
          <View style={Styles.lowLevelPosition}>
            <Text style={Styles.termFontLogo}>
              You can change your security password
            </Text>
            <Text style={Styles.termFontLogo}>in security setting.</Text>
          </View>
        </View>
      </View>
    </ThemeProvider>
  );
};

export default SetPattern;

const Styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.INTRO_BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },

  lowLevelPosition: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  termFontLogo: {
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.LOCK_SCREEN_TITLE_COLOR,
  },
});
