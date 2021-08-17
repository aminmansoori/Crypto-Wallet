import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeProvider, Text, Image} from 'react-native-elements';
import {Colors, Typography, Spacing} from '../../styles/index';
import Icon from 'react-native-vector-icons/Ionicons';
import {transactions} from '../../data/transaction_mock_data';

interface Props {
  onPress?: any;
  _id?: any;
}

const TransactionDetail: React.FC<Props> = ({onPress, _id}) => {
  const [transaction, setTransaction] = useState<any>({});

  const getDetial = (_id: any) => {
    const tran: any = transactions.find((item) => item.id === _id);
    setTransaction(tran);
  };
  useEffect(() => {
    getDetial(_id);
  }, []);

  return (
    <ThemeProvider>
      <View style={{flex: 1}}>
        <View
          style={Styles.headerContainer}>
          <View style={Styles.componentContainer}>
            <Text style={Styles.headerTitle}>Details</Text>
            <Icon
              name="close"
              color={Colors.WRONG_INPUT_BORDER_COLOR}
              size={Spacing.ICON_SIZE}  
              onPress={onPress}
            />
          </View>
        </View>
        <View style={Styles.itemsPositoion}>
          <View style={Styles.cardTitleStyle}>
            <Image
              source={require('../../assets/images/coins-01.png')}
              style={Styles.imageView}
            />
            <Text
              style={[
                Styles.cardValueFontStyle,
                {color: Colors.COIN_ITEM_COLOR, marginLeft: Spacing.MARGIN_1},
              ]}>
              {transaction.cryptoTitle}
            </Text>
          </View>
          <View style={Styles.cardRowStyle}>
            <Text style={Styles.cardTitleFontStyle}>Date:</Text>
            <Text style={Styles.cardValueFontStyle}>
              {transaction.dateOfTransaction}
            </Text>
          </View>
          <View style={Styles.cardRowStyle}>
            <Text style={Styles.cardTitleFontStyle}>Type:</Text>
            <Text style={Styles.cardValueFontStyle}>
              {transaction.typeOfTransaction}
            </Text>
          </View>
          <View style={Styles.cardRowStyle}>
            <Text style={Styles.cardTitleFontStyle}>Status:</Text>
            <Text style={Styles.cardValueFontStyle}>
              {transaction.statusOfTransaction}
            </Text>
          </View>
          <View style={Styles.cardRowStyle}>
            <Text style={Styles.cardTitleFontStyle}>Amount:</Text>
            <Text style={Styles.cardValueFontStyle}>{transaction.amount}</Text>
          </View>
          <View style={Styles.cardRowStyle}>
            <Text style={Styles.cardTitleFontStyle}>Fee:</Text>
            <Text style={Styles.cardValueFontStyle}>{transaction.fee}</Text>
          </View>
          <View style={Styles.cardRowStyle}>
            <Text style={Styles.cardTitleFontStyle}>TimeStamp:</Text>
            <Text style={Styles.cardValueFontStyle}>
              {transaction.timeStamp}
            </Text>
          </View>
          <View style={Styles.cardRowStyle}>
            <Text style={Styles.cardTitleFontStyle}>TX ID:</Text>
            <Text style={Styles.cardValueFontStyle}>
              {transaction.transactionId}
            </Text>
          </View>
          <View style={Styles.cardRowStyle}>
            <Text style={Styles.cardTitleFontStyle}>information:</Text>
            <Text style={Styles.cardValueFontStyle}>
              {transaction.information}
            </Text>
          </View>
        </View>
      </View>
    </ThemeProvider>
  );
};

export default TransactionDetail;

const Styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    paddingLeft: Spacing.HEADER_MAIN_PADDING,
    paddingRight: Spacing.HEADER_MAIN_PADDING,
    backgroundColor: Colors.CARD_CONTAINER_COLOR,
    borderRadius: Spacing.BORDER_RADIUS_8 * 3,
  },
  componentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemsPositoion: {
    flex: 6,
    justifyContent: 'center',
    paddingLeft: Spacing.HEADER_MAIN_PADDING,
    paddingRight: Spacing.HEADER_MAIN_PADDING,
  },
  lowLevelPosition: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: Typography.FONT_SEMIBOLD.fontFamily,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.ICON_CLOSE_OUTLINE_COLOR,
  },
  cardTitleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardRowStyle: {
    flexDirection: 'row',
    marginTop: Spacing.MARGIN_1,
    justifyContent: 'space-between',
  },
  cardTitleFontStyle: {
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    color: Colors.CARD_TITLE_FONT_COLOR,
  },
  cardValueFontStyle: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_MEDIUM.fontFamily,
    color: Colors.CARD_VALUE_FONT_COLOR,
  },
  imageView: {
    width: Spacing.ICON_SIZE,
    height: Spacing.ICON_SIZE,
  },
});
