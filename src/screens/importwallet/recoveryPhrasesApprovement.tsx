import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Modal, TextInput} from 'react-native';
import {Text, ThemeProvider} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles/index';
import CustomHeader from '../../components/basecomponents/customHeader';
import Button from '../../components/compeletedcomponents/customButton';
import WalletDoneModal from '../../components/compeletedcomponents/walletDoneModal';
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

const RecoveryPhrasesApprovement: React.FC<Props> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [errorStatus, setErrorStatus] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const checkError = () => {
    var phrasesArray: any = inputValue.split(/\s+/);

    if (phrasesArray.length !== 12) {
      setErrorStatus(true);
      setErrorMsg('Number of Phrases are less than 12');
    } else {
      setErrorStatus(false);
      setErrorMsg('');
      setModalVisible(!modalVisible);
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
            title="Import wallet"
            titleSize={Typography.FONT_SIZE_20}
            titleColor={Colors.LOGO_FONT_COLOR}
            fontFamily={Typography.FONT_MEDIUM.fontFamily}
          />
          <View style={Styles.termView}>
            <Text style={Styles.termFontLogo}>Enter your private phrases</Text>
          </View>
        </View>
        <View style={Styles.phrasesPosition}>
          <CustomInput
            multiLine={true}
            height={Spacing.HEIGHT_PHRASES_CONTAINER}
            backGroundColor={Colors.STANDARD_INPUT_PHRASES_COLOR}
            errorMessage={errorStatus ? errorMsg : null}
            value={inputValue}
            setValue={setInputValue}
            width={Spacing.WIDTH_SCALE_300}
          />
          <View style={Styles.termView}>
            <Text style={Styles.termFontLogo}>
              Typically 12 (sometimes 24) words separated by
            </Text>
            <Text style={Styles.termFontLogo}>single spaces</Text>
          </View>
        </View>

        <View style={[Styles.lowLevelPosition]}>
          <Button
            buttonBackgroundColor={Colors.STANDARD_FILL_BG_BUTTON_COLOR}
            textColor={Colors.STANDARD_FILL_TEXT_BUTTON_COLOR}
            title="Import"
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
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <WalletDoneModal
          onPress={() => {
            setModalVisible(!modalVisible);
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
});
