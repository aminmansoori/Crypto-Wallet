import React from 'react';
import {Text} from 'react-native-elements';
import {Colors, Spacing, Typography} from '../../styles/index';
import {StyleSheet, View} from 'react-native';
import ButtonView from '../../components/basecomponents/buttonViewMainHeader';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  sendOnPress?: any;
  receiveOnPress?: any;
  BTCtoDollar?: any;
  growthRate?: any;
  rightTextTitle?: any;
  Balance?: any;
  BalancetoDollar?: any;
  height?: any;
}

const theme = {};

const blank = ' ';

const MainHeader: React.FC<Props> = ({
  sendOnPress,
  receiveOnPress,
  BTCtoDollar,
  growthRate,
  rightTextTitle,
  Balance,
  BalancetoDollar,
  height,
}) => {
  return (
    <View
      style={[
        Styles.viewContainer,
        {height:height}
      ]}>
      <ButtonView sendOnPress={sendOnPress} receiveOnPress={receiveOnPress} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: Spacing.HEADER_MAIN_PADDING,
        }}>
        <Text style={Styles.BTCHeaderText}>
          {BTCtoDollar}
          {blank}
          <Text
            style={[
              Styles.BTCHeaderText,
              {color: Colors.WALLET_AMOUNT_FONT_COLOR},
            ]}>
            {growthRate}%
          </Text>
        </Text>
        <Text style={Styles.rightTextStyle}>
          {rightTextTitle}
          {blank}
          <Icon
            name="chevron-forward"
            color={Colors.ICON_CHEVRON_COLOR}
            size={(Spacing.ICON_SIZE * 2) / 3}
          />
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={Styles.balanceStyle}>
          {Balance}
          {blank}BTC
        </Text>
        <Text style={Styles.ballanceToDollarStyle}>{BalancetoDollar}$</Text>
      </View>
    </View>
  );
};

export default MainHeader;

const Styles = StyleSheet.create({
  viewContainer: {
    // height: '28%',
    backgroundColor: Colors.INTRO_BACKGROUND_COLOR,
    borderBottomLeftRadius: Spacing.BORDER_RADIUS_8 * 3,
    borderBottomRightRadius: Spacing.BORDER_RADIUS_8 * 3,
  },
  BTCHeaderText: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    color: Colors.MAIN_HEADER_BALANCE_TO_DOLLAR_FONT_COLOR,
  },
  rightTextStyle: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    color: Colors.MAIN_HEADER_RIGHT_TITLE_FONT_COLOR,
  },
  balanceStyle: {
    fontSize: Typography.FONT_SIZE_24,
    fontFamily: Typography.FONT_SEMIBOLD.fontFamily,
    color: Colors.MAIN_HEADER_BALANCE_FONT_COLOR,
  },
  ballanceToDollarStyle: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    color: Colors.MAIN_HEADER_BALANCE_TO_DOLLAR_FONT_COLOR,
  },
});
