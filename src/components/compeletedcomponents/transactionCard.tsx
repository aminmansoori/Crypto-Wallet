import React, {useState} from 'react';
import {ThemeProvider, Text, Card, Image, Overlay} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import {Spacing, Colors, Typography} from '../../styles';
import TranDetaile from '../compeletedcomponents/transactionDetail';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  IconName?: any;
  cryptoTitle?: any;
  dateOfTransaction?: any;
  typeOfTransaction?: any;
  statusOfTransaction?: any;
  _id?: any;
  onPress?: any;
}

const theme = {};

const TransactionCard: React.FC<Props> = ({
  IconName,
  _id,
  cryptoTitle,
  dateOfTransaction,
  typeOfTransaction,
  statusOfTransaction,
  onPress,
}) => {
  const [overLayVisible, setoverLayVisible] = useState(false);
  return (
    <View style={Styles.viewContainer}>
      <TouchableOpacity onPress={() => setoverLayVisible(!overLayVisible)}>
        <View style={Styles.cardTitleStyle}>
          <Image
            source={require('../../assets/images/coins-01.png')}
            style={Styles.imageView}
          />
          <Text
            style={[
              Styles.cardValueFontStyle,
              {color: Colors.CARD_TITLE_FONT_COLOR},
            ]}>
            {cryptoTitle}
          </Text>
        </View>
        <View style={Styles.cardRowStyle}>
          <Text style={Styles.cardTitleFontStyle}>Date:</Text>
          <Text style={Styles.cardValueFontStyle}>{dateOfTransaction}</Text>
        </View>
        <View style={Styles.cardRowStyle}>
          <Text style={Styles.cardTitleFontStyle}>Type:</Text>
          <Text style={Styles.cardValueFontStyle}>{typeOfTransaction}</Text>
        </View>
        <View style={Styles.cardRowStyle}>
          <Text style={Styles.cardTitleFontStyle}>Status:</Text>
          <Text style={Styles.cardValueFontStyle}>{statusOfTransaction}</Text>
        </View>
        <Overlay
          overlayStyle={Styles.overlayStyle}
          isVisible={overLayVisible}
          onBackdropPress={() => setoverLayVisible(!overLayVisible)}>
          <TranDetaile
            _id={_id}
            onPress={() => setoverLayVisible(!overLayVisible)}
          />
        </Overlay>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionCard;

const Styles = StyleSheet.create({
  viewContainer: {
    borderRadius: Spacing.BORDER_RADIUS_8,
    shadowRadius: Spacing.BORDER_RADIUS_8,
    width: '100%',
    backgroundColor: Colors.CARD_BG_COLOR,
    padding: Spacing.TRANSACTION_CARD_PADDING,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    elevation: 10,
    shadowColor: Colors.CARD_SHADOW_COLOR,
  },
  cardTitleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: Spacing.SWITCH_PADDING,
  },
  cardRowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: Spacing.SWITCH_PADDING,
    paddingRight: Spacing.SWITCH_PADDING,
  },
  cardTitleFontStyle: {
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.FONT_LIGHT.fontFamily,
    color: Colors.CARD_TITLE_FONT_COLOR,
  },
  cardValueFontStyle: {
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.FONT_MEDIUM.fontFamily,
    color: Colors.CARD_VALUE_FONT_COLOR,
  },
  imageView: {
    width: Spacing.ICON_SIZE,
    height: Spacing.ICON_SIZE,
  },
  overlayStyle: {
    height: '50%',
    padding:0, 
    borderRadius: Spacing.BORDER_RADIUS_8*3 ,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:Colors.CHIP_CONTAINER_BG_COLOR
  },
});
