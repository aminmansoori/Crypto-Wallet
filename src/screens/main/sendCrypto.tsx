import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles/index';
import WalletCustomHeader from '../../components/basecomponents/walletCustomHeader';
import Button from '../../components/compeletedcomponents/customButton';
import CustomInput from '../../components/compeletedcomponents/customInput';
import Clipboard from '@react-native-clipboard/clipboard';

interface Props {
  navigation?: any;
  route?: any;
}
const space = ' ';
const SendCrypto: React.FC<Props> = ({navigation, route}) => {
  const [depositAddress, setDepositAddress] = useState<any>('');
  const [amount, setAmount] = useState('');
  const writeToClipboard = async () => {
    let value = await Clipboard.getString();
    if (value.length > 0) setDepositAddress(value);
  };

  return (
    <ScrollView style={Styles.viewContainer}>
      <View style={Styles.topContainer}>
        <WalletCustomHeader
          leftIcon="arrow-back-outline"
          rightIcon="chevron-forward-outline"
          leftTitle="Lorem ipsum"
          rightTitle="BTC"
          leftTitleSize={Typography.FONT_SIZE_16}
          rightTitleSize={Typography.FONT_SIZE_12}
          leftOnPress={() => {
            navigation.goBack();
          }}
          leftIconSize={Spacing.ICON_SIZE}
          rightIconSize={Spacing.ICON_SIZE / 2}
          leftIconColor={Colors.LAFT_ARROW_ICON_COLOR}
          rightIconColor={Colors.ICON_CHEVRON_COLOR}
          leftTitleColor={Colors.WALLET_HEADER_TITLE_FONT_COLOR}
          rightTitleColor={Colors.ICON_CHEVRON_COLOR}
        />
      </View>
      <View style={Styles.itemPosition}>
        <View style={Styles.scanButtonViewContainer}>
          <Button
            buttonBackgroundColor={Colors.STANDARD_FILL_TEXT_BUTTON_COLOR}
            buttonBorderColor={Colors.STANDARD_FILL_TEXT_BUTTON_COLOR}
            textColor={Colors.WALLET_TITLE_FONT_COLOR}
            iconColor={Colors.WALLET_TITLE_FONT_COLOR}
            icon="scan"
            title="Scan address QR"
            onPress={() => {
              navigation.navigate('ScanCode');
            }}
            buttonWidth={Spacing.WIDTH_SCALE_300}
            buttonHeight={Spacing.HEIGHT_BUTTON}
            borderRadius={Spacing.BORDER_RADIUS_8 * 2}
            fontSize={Typography.FONT_SIZE_12}
            fontFamily={Typography.FONT_MEDIUM.fontFamily}
          />
        </View>
        <View style={Styles.itemsViewContainer}>
          <View style={Styles.rowContainer}>
            <CustomInput
              lable="To"
              lableStyle={Styles.titleStyles}
              inputStyle={Styles.placeholderStyle}
              backGroundColor={Colors.FILTER_ICON_COLOR}
              height={Spacing.FILTER_COMPONENT_HEIGHT}
              value={depositAddress}
              setValue={setDepositAddress}
              width={Spacing.WIDTH_SCALE_280}
              placeHolder="Paste address"
              placeholderTextColor={Colors.STANDARD_INPUT_PLACEHOLDER_COLOR}
              icon="clipboard"
              iconColor={Colors.ICON_ACTIVE_WALLET_COLOR}
              iconSize={(Spacing.ICON_SIZE * 2) / 3}
              iconOnPress={writeToClipboard}
            />
          </View>
          <View style={Styles.rowContainer}>
            <CustomInput
              lable="Amount"
              lableStyle={Styles.titleStyles}
              inputStyle={Styles.placeholderStyle}
              backGroundColor={Colors.FILTER_ICON_COLOR}
              height={Spacing.FILTER_COMPONENT_HEIGHT}
              value={amount}
              setValue={setAmount}
              width={Spacing.WIDTH_SCALE_280}
              placeHolder="0.00"
              icon="trending-up"
              iconColor={Colors.ICON_ACTIVE_WALLET_COLOR}
              iconSize={(Spacing.ICON_SIZE * 2) / 3}
              keyboardType="numeric"
              iconOnPress={() => {
                setAmount('0.6');
              }}
            />
          </View>
          <View style={Styles.valuesViewContainer}>
            <Text style={Styles.lastRowStyles}>
              Available balance:{space}
              <Text style={Styles.vlauesTextStyle}>0.6 BTC</Text>
            </Text>
            <Text style={Styles.lastRowStyles}>
              Total fee:{space}
              <Text style={Styles.vlauesTextStyle}>%0.07</Text>
            </Text>
          </View>
        </View>
        <View style={[Styles.lowLevelPosition]}>
          <Button
            buttonBackgroundColor={Colors.STANDARD_SHADOW_TEXT_BUTTON_COLOR}
            textColor={Colors.STANDARD_FILL_TEXT_BUTTON_COLOR}
            title="Continue"
            onPress={() => {}}
            buttonWidth={Spacing.WIDTH_SCALE_280}
            buttonHeight={Spacing.HEIGHT_BUTTON}
            borderRadius={Spacing.BORDER_RADIUS_8}
            fontSize={Typography.FONT_SIZE_14}
            fontFamily={Typography.FONT_MEDIUM.fontFamily}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SendCrypto;

const Styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: Colors.WALLET_BG_COLOR,
  },
  topContainer: {
    height: Spacing.CUSTOM_HEADER_HEIGHT,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemPosition: {
    marginTop: Spacing.MARGIN_1,
    padding: Spacing.SWITCH_PADDING,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  lowLevelPosition: {
    marginTop: Spacing.MARGIN_5,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: Spacing.MARGIN_2,
    padding: Spacing.HEADER_MAIN_PADDING,
  },
  titleStyles: {
    color: Colors.FILTER_ITEM_TITLE_COLOR,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_MEDIUM.fontFamily,
    marginBottom: Spacing.MARGIN_1,
  },
  lastRowStyles: {
    color: Colors.CARD_TITLE_FONT_COLOR,
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.FONT_LIGHT.fontFamily,
  },
  scanButtonViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.LOADING_OUTLINE_ICON_BUTTON_COLOR,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    elevation: 2,
  },
  itemsViewContainer: {
    backgroundColor: Colors.BASE_BACKGROUND_COLOR,
    paddingTop: Spacing.SWITCH_PADDING * 5,
    paddingBottom: Spacing.SWITCH_PADDING * 5,
    width: Spacing.WIDTH_SCALE_300,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: Spacing.BORDER_RADIUS_8,
    shadowColor: Colors.LOADING_OUTLINE_ICON_BUTTON_COLOR,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    elevation: 2,
    flex: 5,
    marginTop: Spacing.MARGIN_1,
    borderRadius: Spacing.BORDER_RADIUS_8 * 2,
  },
  rowContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  titleContainer: {
    paddingLeft: Spacing.FILTER_MODAL_PADDING / 2,
    marginBottom: Spacing.MARGIN_1 / 2,
  },
  valuesViewContainer: {
    alignItems: 'flex-start',
    width: '100%',
    justifyContent: 'center',
    paddingLeft: Spacing.TRANSACTION_CARD_PADDING * 2,
  },
  vlauesTextStyle: {
    fontFamily: Typography.FONT_MEDIUM.fontFamily,
    color: Colors.WALLET_TITLE_FONT_COLOR,
  },
  placeholderStyle: {
    fontFamily: Typography.FONT_MEDIUM.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.WALLET_TITLE_FONT_COLOR,
    marginLeft: Spacing.MARGIN_2 / 2,
  },
});
