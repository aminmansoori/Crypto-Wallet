import React from 'react';
import {ThemeProvider, Text} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import {Colors, Spacing, Typography} from '../../styles/index';
import PINCode from '@haskkor/react-native-pincode';

interface Props {
  maxAttempts?: any;
  timeLocked?: any;
  titleChoose?: any;
  titleConfirm?: any;
  titleConfirmFailed?: any;
  PINCodeStatus?: any;
  FinishProcess?: any;
  passwordLength?: any;
  storePin?: any;
  lockedPage?: any;
  textDescriptionLockedPage?: any;
  textSubDescriptionLockedPage?: any;
  delayBetweenAttempts?: any;
  styleLockScreenButton?: any;
  styleLockScreenColorIcon?: any;
  styleLockScreenMainContainer?: any;
  handleResultEnterPin?:any
}

const PatternLock: React.FC<Props> = ({
  maxAttempts,
  timeLocked,
  titleChoose,
  titleConfirm,
  titleConfirmFailed,
  PINCodeStatus,
  FinishProcess,
  passwordLength,
  lockedPage,
  textDescriptionLockedPage,
  textSubDescriptionLockedPage,
  delayBetweenAttempts,
}) => {
  return (
    <ThemeProvider>
      <View style={{flex: 1}}>
        <PINCode
          buttonDeleteText=""
          textDescriptionLockedPage={textDescriptionLockedPage}
          textSubDescriptionLockedPage={textSubDescriptionLockedPage}
          delayBetweenAttempts={delayBetweenAttempts}
          styleLockScreenMainContainer={{
            backgroundColor: Colors.PINLOCK_BG_COLOR,
          }}
          styleLockScreenText={Styles.styleLockScreenText}
          titleComponentLockedPage={() => {
            return (
              <View style={Styles.lochtitleContainer}>
                <Text style={Styles.lochtitleStyle}>
                  You have enterend wrong
                </Text>
                <Text style={Styles.lochtitleStyle}>passcode.</Text>
              </View>
            );
          }}
          buttonComponentLockedPage={() => {}}
          styleLockScreenViewIcon={Styles.styleLockScreenViewIcon}
          styleLockScreenViewTextLock={{flex: 10}}
          styleLockScreenViewTimer={Styles.styleLockScreenViewTimer}
          styleLockScreenTextTimer={Styles.styleLockScreenTextTimer}
          maxAttempts={maxAttempts}
          timeLocked={timeLocked}
          lockedPage={lockedPage}
          titleChoose={titleChoose}
          titleConfirm={titleConfirm}
          titleConfirmFailed={titleConfirmFailed}
          // handleResultEnterPin={(pinStatus:PinResultStatus)=>{
          //   return pinStatus;
          // }}
          //   pinCodeKeychainName="Password"
          //   storePin={storePin}
          subtitleChoose=" "
          vibrationEnabled={true}
          colorPassword={Colors.LOCK_SCREEN_NUMBERS_COLOR}
          colorPasswordEmpty={Colors.LOCK_SCREEN_DOT_EMPTY_COLOR}
          colorPasswordError={Colors.LOCK_SCREEN_ERROR_COLOR}
          numbersButtonOverlayColor=" "
          styleMainContainer={Styles.mainContainer}
          colorCircleButtons=""
          stylePinCodeButtonCircle={Styles.pinCodeButtonCirccl}
          stylePinCodeButtonNumber={Colors.LOCK_SCREEN_LOCK_TITLE_COLOR}
          stylePinCodeButtonNumberPressed={Colors.LOCK_SCREEN_NUMBERS_COLOR}
          stylePinCodeColorSubtitleError={Colors.LOCK_SCREEN_ERROR_COLOR}
          stylePinCodeColorTitleError={Colors.LOCK_SCREEN_ERROR_COLOR}
          stylePinCodeTextButtonCircle={Styles.stylePinCodeTextButtonCircle}
          status={PINCodeStatus}
          touchIDDisabled={true}
          finishProcess={FinishProcess}
          passwordLength={passwordLength}
          stylePinCodeDeleteButtonSize={Typography.FONT_SIZE_20}
          stylePinCodeColumnDeleteButton={Styles.stylePinCodeColumnDeleteButton}
          stylePinCodeTextSubtitle={Styles.stylePinCodeTextSubtitle}
          stylePinCodeTextTitle={Styles.stylePinCodeTextTitle}
        />
      </View>
    </ThemeProvider>
  );
};

export default PatternLock;

const Styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinCodeButtonCirccl: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  stylePinCodeTextButtonCircle: {
    fontFamily: Typography.FONT_MEDIUM.fontFamily,
    fontSize: Typography.FONT_SIZE_20,
  },
  stylePinCodeTextSubtitle: {
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.LOCK_SCREEN_TITLE_COLOR,
  },
  stylePinCodeColumnDeleteButton: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  stylePinCodeTextTitle: {
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.LOCK_SCREEN_TITLE_COLOR,
  },
  styleLockScreenText: {
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.LOCK_SCREEN_LOCK_TITLE_COLOR,
  },
  lochtitleStyle: {
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.LOCK_SCREEN_LOCK_TITLE_COLOR,
  },
  lochtitleContainer: {
    flex: 2,
    width: '120%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  styleLockScreenTextTimer: {
    fontSize: Typography.FONT_SIZE_24,
    fontFamily: Typography.FONT_SEMIBOLD.fontFamily,
    color: Colors.LOCK_SCREEN_NUMBERS_COLOR,
  },
  styleLockScreenViewIcon: {
    backgroundColor: Colors.LOCK_SCREEN_ICON_BACKGROUND_COLOR,
    marginBottom: Spacing.MARGIN_2 * 4,
  },
  styleLockScreenViewTimer: {
    borderWidth: 0,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

