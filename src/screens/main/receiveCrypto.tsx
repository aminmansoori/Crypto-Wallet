import React from 'react';
import {StyleSheet, View, Share} from 'react-native';
import {Text} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles/index';
import WalletCustomHeader from '../../components/basecomponents/walletCustomHeader';
import Button from '../../components/compeletedcomponents/customButton';
import QRCode from 'react-native-qrcode-svg';
import Clipboard from '@react-native-clipboard/clipboard';

interface Props {
  navigation?: any;
}

const theme = {
  Text: {
    fontFamily: 'IRANYekanMobileBlack',
  },
};

const base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA';
const qrValue = '1QK3Wtuh6wNf8kzGUf4qB7Kjvyq4QroE4k';

const ReceiveCrypto: React.FC<Props> = ({navigation}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: qrValue,
      });
    } catch (error) {
      console.log('error= ', error);
    }
  };

  const writeToClipboard = async () => {
    Clipboard.setString(qrValue.toString());
  };

  return (
    <View style={Styles.viewContainer}>
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
      <View style={Styles.qrPosition}>
        <QRCode
          value={qrValue}
          logo={{uri: base64Logo}}
          size={Spacing.QRCODE_SIZE}
          logoBackgroundColor="transparent"
          backgroundColor="transparent"
        />
        <View style={Styles.depositView}>
          <Text style={Styles.depositStyle}>
            1QK3Wtuh6wNf8kzGUf4qB7Kjvyq4QroE4k
          </Text>
        </View>
      </View>
      <View style={Styles.noticeView}>
        <Text style={Styles.noticeStyle}>
          This address can only accept{' '}
          <Text style={{color: Colors.WARN_CAPS_FONT_COLOR}}> BTC.</Text>
        </Text>
      </View>
      <View style={[Styles.lowLevelPosition]}>
        <Button

          title="Copy"
          icon="copy"
          onPress={() => {writeToClipboard}}
          textColor={Colors.ICON_BUTTON_TEXT_COLOR}
          buttonBorderColor={Colors.ICON_BUTTON_TEXT_COLOR}
          iconColor={Colors.ICON_BUTTON_TEXT_COLOR}
          buttonWidth={(Spacing.ICON_BUTTON_WIDTH * 3) / 2}
          buttonHeight={Spacing.HEIGHT_BUTTON}
          fontSize={Typography.FONT_SIZE_14}
          fontFamily={Typography.FONT_MEDIUM.fontFamily}
        />
        <Button
          title="Share"
          icon="share"
          textColor={Colors.ICON_BUTTON_TEXT_COLOR}
          buttonBorderColor={Colors.ICON_BUTTON_TEXT_COLOR}
          iconColor={Colors.ICON_BUTTON_TEXT_COLOR}
          buttonWidth={(Spacing.ICON_BUTTON_WIDTH * 3) / 2}
          buttonHeight={Spacing.HEIGHT_BUTTON}
          fontSize={Typography.FONT_SIZE_14}
          fontFamily={Typography.FONT_MEDIUM.fontFamily}
          onPress={onShare}
        />
      </View>
    </View>
  );
};

export default ReceiveCrypto;

const Styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.WALLET_BG_COLOR,
  },
  topContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrPosition: {
    flex: 6,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  lowLevelPosition: {
    flex: 2,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: Spacing.HEADER_MAIN_PADDING,
  },
  depositStyle: {
    fontFamily: Typography.FONT_MEDIUM.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.FONT_LIGHT_COLOR,
  },

  depositView: {
    marginTop: Spacing.MARGIN_1 * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noticeView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  noticeStyle: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    color: Colors.WARN_CAPS_FONT_COLOR,
  },
});
