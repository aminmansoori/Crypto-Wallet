import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Text, ThemeProvider} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles/index';
import PINCode, {
  hasUserSetPinCode,
  resetPinCodeInternalStates,
  deleteUserPinCode,
} from '@haskkor/react-native-pincode';
import CustomPattern from '../../components/compeletedcomponents/patternLockComponent';

interface Props {
  navigation?: any;
}

const EnterPinLock: React.FC<Props> = ({navigation}) => {
  const [showLockPage, setShowLockPage] = useState(false);

  const FinishProcess = async () => {
    const hasPin = await hasUserSetPinCode();
    if (!hasPin) {
      Alert.alert('alert', 'wrong password intered');
    } else {
      navigation.navigate('MainFlow');
    }
  };
  return (
    <ThemeProvider>
      <View style={Styles.viewContainer}>
        <View style={{flex: 4}}>
          <CustomPattern
            PINCodeStatus="enter"
            passwordLength={6}
            titleChoose="Please confirm your passcode"
            FinishProcess={() => FinishProcess()}
            timeLocked={50000}
            textDescriptionLockedPage="The application will be unlocked after 20 Second"
            textSubDescriptionLockedPage=" "
            delayBetweenAttempts={1000}
            maxAttempts={3}
          />
        </View>
      </View>
    </ThemeProvider>
  );
};

export default EnterPinLock;

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
