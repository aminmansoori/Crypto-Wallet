import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Share} from 'react-native';
import {Text, ThemeProvider} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles/index';
import CustomHeader from '../../components/basecomponents/customHeader';
import Button from '../../components/compeletedcomponents/customButton';
import CustomChip from '../../components/compeletedcomponents/CustomChip';
import AlarmView from '../../components/compeletedcomponents/alarmView';
import {data} from '../../data/mock_data';
import Clipboard from '@react-native-clipboard/clipboard';
import {copiedPhrases} from '../../utils/helper';

interface Props {
  navigation?: any;
}

const theme = {
  Text: {
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
  },
};

const ShowRecoveryPhrases: React.FC<Props> = ({navigation}) => {
  const onShare = async () => {
    var phrases_string = copiedPhrases(data);
    try {
      const result = await Share.share({
        message: phrases_string,
      });
    } catch (error) {
      console.log('error= ', error);
    }
  };

  const writeToClipboard = async () => {
    var input_phrases = copiedPhrases(data);
    Clipboard.setString(input_phrases);
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
            title="Your recovery phrases"
            titleSize={Typography.FONT_SIZE_20}
            titleColor={Colors.LOGO_FONT_COLOR}
            fontFamily={Typography.FONT_MEDIUM.fontFamily}
          />
          <View style={Styles.termView}>
            <Text style={Styles.termFontLogo}>
              Copy,share or scan these words and
            </Text>
            <Text style={Styles.termFontLogo}>save theme somewhere safe.</Text>
          </View>
        </View>
        <View style={Styles.phrasesPosition}>
          <View style={Styles.flatListContainer}>
            <FlatList
              horizontal={false}
              numColumns={5}
              data={data}
              renderItem={({item}) => {
                return (
                  <View style={{margin: 5}}>
                    <CustomChip text={item.title} />
                  </View>
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
        <View style={Styles.guiedButtonView}>
          <View style={{margin: 3}}>
            <Button
              title="Copy"
              icon="copy"
              onPress={() => {
                writeToClipboard();
              }}
              textColor={Colors.STANDARD_OUTLINE_TEXT_BUTTON_COLOR}
              buttonBorderColor={Colors.STANDARD_OUTLINE_BORDER_BUTTON_COLOR}
              iconColor={Colors.STANDARD_OUTLINE_ICON_BUTTON_COLOR}
              buttonWidth={Spacing.ICON_BUTTON_WIDTH}
              buttonHeight={Spacing.HEIGHT_BUTTON}
              fontSize={Typography.FONT_SIZE_14}
              fontFamily={Typography.FONT_MEDIUM.fontFamily}
            />
          </View>
          <View style={{margin: 3}}>
            <Button
              title="Share"
              icon="share"
              onPress={onShare}
              textColor={Colors.STANDARD_OUTLINE_TEXT_BUTTON_COLOR}
              buttonBorderColor={Colors.STANDARD_OUTLINE_BORDER_BUTTON_COLOR}
              iconColor={Colors.STANDARD_OUTLINE_ICON_BUTTON_COLOR}
              buttonWidth={Spacing.ICON_BUTTON_WIDTH}
              buttonHeight={Spacing.HEIGHT_BUTTON}
              fontSize={Typography.FONT_SIZE_14}
              fontFamily={Typography.FONT_MEDIUM.fontFamily}
            />
          </View>
          <View style={{margin: 3}}>
            <Button
              title="QR code"
              icon="qr-code"
              textColor={Colors.STANDARD_OUTLINE_TEXT_BUTTON_COLOR}
              buttonBorderColor={Colors.STANDARD_OUTLINE_BORDER_BUTTON_COLOR}
              iconColor={Colors.STANDARD_OUTLINE_ICON_BUTTON_COLOR}
              buttonWidth={Spacing.ICON_BUTTON_WIDTH}
              buttonHeight={Spacing.HEIGHT_BUTTON}
              fontSize={Typography.FONT_SIZE_14}
              fontFamily={Typography.FONT_MEDIUM.fontFamily}
            />
          </View>
        </View>
        <View style={[Styles.lowLevelPosition]}>
          <AlarmView
            text="Never share recovery phrase with
         anyone!"
            icon="ios-alert-circle"
          />
          <Button
            buttonBackgroundColor={Colors.STANDARD_FILL_BG_BUTTON_COLOR}
            textColor={Colors.STANDARD_FILL_TEXT_BUTTON_COLOR}
            title="Continue"
            onPress={() => {
              navigation.navigate('RecoveryApprovement');
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

export default ShowRecoveryPhrases;

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
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowLevelPosition: {
    flex: 4,
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

  guiedButtonView: {
    flexDirection: 'row',
  },
  flatListContainer: {
    height: Spacing.HEIGHT_PHRASES_CONTAINER,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: Spacing.MARGIN_1,
  },
});
