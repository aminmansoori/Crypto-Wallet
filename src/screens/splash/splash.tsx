import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, ThemeProvider} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles/index';
import {BallIndicator} from 'react-native-indicators';
import {useDispatch} from 'react-redux';
import {updateShownPhrases} from '../../redux/actions/phrases.action';
import {data} from '../../data/mock_data';
import LinearGradient from 'react-native-linear-gradient';  
interface Props {
  navigation?: any;
}

const Splash: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(updateShownPhrases(data));
      navigation.replace('MainFlow');
      // navigation.replace('Language');
    }, 2000);
  });
  return (
    <LinearGradient
      colors={[Colors.FIRST_COLOR,Colors.SECOND_COLOR]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}>
      <ThemeProvider>
        <View style={Styles.viewContainer}>
          <View style={Styles.titlePosition}>
            <Text style={Styles.titleFont}>Lorem Ipsum title</Text>
          </View>
          <View style={Styles.logoPosition}>
            <BallIndicator color={Colors.ICON_INDICATOR_COLOR} size={Spacing.INDICATOR_ICON_SIZE} />
          </View>

          <View style={Styles.termPosition}>
            <Text style={Styles.termFont1}>Lorem Ipsum title</Text>
            <Text style={Styles.termFont2}>
              Lorem ipsum is placeholder text commonly
            </Text>
            <Text style={Styles.termFont2}>
              used in the graphic for previewing layouts.
            </Text>
          </View>
        </View>
      </ThemeProvider>
    </LinearGradient>
  );
};

export default Splash;

const Styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: Colors.INTRO_BACKGROUND_COLOR,
  },
  titlePosition: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoPosition: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  termPosition: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleFont: {
    fontFamily: Typography.FONT_MEDIUM.fontFamily,
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.SPLASH_TITLE_FONT_COLOR,
  },
  termFont1: {
    fontFamily: Typography.FONT_MEDIUM.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.SPLASH_TITLE_FONT_COLOR,
  },
  termFont2: {
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    fontSize: Typography.FONT_SIZE_12,
    color: Colors.SPLASH_TERM_FONT_COLOR,
  },
});
