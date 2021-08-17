import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Modal} from 'react-native';
import {Text, ThemeProvider} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles/index';
import CustomHeader from '../../components/basecomponents/customHeader';
import Button from '../../components/compeletedcomponents/customButton';
import CustomChip from '../../components/compeletedcomponents/CustomChip';
import ChipContainer from '../../components/basecomponents/chipContainner';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers/index';
import WalletDoneModal from '../../components/compeletedcomponents/walletDoneModal';

import {
  addToSentPhrases,
  removeFromShownPhrases,
} from '../../redux/actions/phrases.action';

interface Props {
  navigation?: any;
}

const theme = {
  Text: {
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
  },
};

const RecoveryPhrasesApprovement: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const {shownPhrases, sentPhrases, fixedPhrases} = useSelector(
    (state: RootState) => state.phrases,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonValidity, setButtonValidity] = useState(false);

  const checkValidity = () => {
    try {
      var welldone: Boolean = true;
      for (var phrase in sentPhrases) {
        if (sentPhrases[phrase].id !== fixedPhrases[phrase].id) {
          welldone = false;
          break;
        }
      }
      if (
        welldone &&
        fixedPhrases.length > 1 &&
        sentPhrases.length == fixedPhrases.length
      ) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log('err= ', err);
      return false;
    }
  };

  useEffect(() => {
    setButtonValidity(checkValidity());
  });

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
            title="verify recovery phrase"
            titleSize={Typography.FONT_SIZE_20}
            titleColor={Colors.LOGO_FONT_COLOR}
            fontFamily={Typography.FONT_MEDIUM.fontFamily}
          />
          <View style={Styles.termView}>
            <Text style={Styles.termFontLogo}>
              tap the words to put them next to each other
            </Text>
            <Text style={Styles.termFontLogo}>in the correct order.</Text>
          </View>
        </View>
        <View style={Styles.phrasesPosition}>
          <ChipContainer />
          <View style={Styles.flatListContainer}>
            <FlatList
              horizontal={false}
              numColumns={5}
              data={shownPhrases}
              renderItem={({item}) => {
                return (
                  <View style={{margin: 5}}>
                    <CustomChip
                      text={item.title}
                      onPress={() => {
                        dispatch(
                          addToSentPhrases({title: item.title, id: item.id}),
                        );
                        dispatch(
                          removeFromShownPhrases({
                            title: item.title,
                            id: item.id,
                          }),
                        );
                      }}
                    />
                  </View>
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>

        <View style={[Styles.lowLevelPosition]}>
          <Button
            isAvtive={!buttonValidity}
            buttonBackgroundColor={Colors.STANDARD_FILL_BG_BUTTON_COLOR}
            textColor={Colors.STANDARD_FILL_TEXT_BUTTON_COLOR}
            title="Continue"
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            buttonWidth={Spacing.WIDTH_SCALE_300}
            buttonHeight={Spacing.HEIGHT_BUTTON}
            borderRadius={Spacing.BORDER_RADIUS_8}
            fontSize={Typography.FONT_SIZE_14}
            fontFamily={Typography.FONT_MEDIUM.fontFamily}
          />
        </View>
      </View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <WalletDoneModal
          onPress={() => {
            setModalVisible(!modalVisible);
            navigation.replace('Pattern')
          }}
        />
      </Modal>
    </ThemeProvider>
  );
};

export default RecoveryPhrasesApprovement;

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
  phrasesPosition: {
    flex: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  lowLevelPosition: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
  flatListContainer: {
    height: Spacing.HEIGHT_PHRASES_CONTAINER,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: Spacing.MARGIN_2 / 2,
  },
});
