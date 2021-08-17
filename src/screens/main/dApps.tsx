import React, {useState} from 'react';
import {
  View,
  Text,
  Platform,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import {Spacing, Colors, Typography} from '../../styles/index';
import Filter from '../../components/basecomponents/transactionContainer';
import MainHeader from '../../components/basecomponents/mainHeader';

interface Props {}

const DApps: React.FC<Props> = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: Colors.WALLET_BG_COLOR,
      }}>
      <View style={{flex:2,backgroundColor:'red'}}>
        <MainHeader />
      </View>
      <View style={Styles.transactionTitleStyle}>
        <Text style={Styles.termFontLogo}>Transactions</Text>
      </View>
      <View style={{backgroundColor: 'red', flex:5}}>
        <Filter />
      </View>
    </ScrollView>
  );
};

export default DApps;

const Styles = StyleSheet.create({
  transactionTitleStyle: {
    marginTop: Spacing.MARGIN_2,
    // height: '5%',
    flex:1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  termFontLogo: {
    fontFamily: Typography.FONT_SEMIBOLD.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.WALLET_TITLE_FONT_COLOR,
    marginBottom: Spacing.MARGIN_1,
  },
});
