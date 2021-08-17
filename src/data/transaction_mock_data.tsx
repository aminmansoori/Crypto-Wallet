import React from 'react';
import {Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {Spacing,Colors} from '../styles/index';

export const transactions = [
  {
    id: '1',
    transactionId: 'amin',
    cryptoTitle: 'BTC',
    dateOfTransaction: '2021/08/15',
    typeOfTransaction: 'Sent',
    statusOfTransaction: 'Pending',
    amount:"0.01 BTC",
    fee:"% 0.077",
    timeStamp:'2021/08/15',
    information:"1F1tAaz5x1HUXrCNLbtMDqcw6o5"
  },
  {
    id: '2',
    transactionId: 'amin',
    cryptoTitle: 'ETH',
    dateOfTransaction: '2021/08/15',
    typeOfTransaction: 'Sent',
    statusOfTransaction: 'Pending',
    amount:"0.01 BTC",
    fee:"% 0.077",
    timeStamp:'2021/08/15',
    information:"1F1tAaz5x1HUXrCNLbtMDqcw6o5"
  },
  {
    id: '3',
    transactionId: '32e31669daa5137393573d0',
    cryptoTitle: 'BNB',
    dateOfTransaction: '2021/08/15',
    typeOfTransaction: 'Sent',
    statusOfTransaction: 'Pending',
    amount:"0.01 BTC",
    fee:"% 0.077",
    timeStamp:'2021/08/15',
    information:"1F1tAaz5x1HUXrCNLbtMDqcw6o5"
  },
  {
    id: '4',
    transactionId: '32e31669daa5137393573d0',
    cryptoTitle: 'BTC',
    dateOfTransaction: '2021/08/15',
    typeOfTransaction: 'Sent',
    statusOfTransaction: 'Pending',
    amount:"0.01 BTC",
    fee:"% 0.077",
    timeStamp:'2021/08/15',
    information:"1F1tAaz5x1HUXrCNLbtMDqcw6o5"
  },
  {
    id: '5',
    transactionId: '32e31669daa5137393573d0',
    cryptoTitle: 'BTC',
    dateOfTransaction: '2021/08/15',
    typeOfTransaction: 'Sent',
    statusOfTransaction: 'Pending',
    amount:"0.01 BTC",
    fee:"% 0.077",
    timeStamp:'2021/08/15',
    information:"1F1tAaz5x1HUXrCNLbtMDqcw6o5"
  },
];

export const Coins = [
  {
    label: 'BTC',
    value: 'btc',
    icon: () => (
      <Image
        source={require('../assets/images/coins-01.png')}
        style={{width: Spacing.ICON_SIZE, height: Spacing.ICON_SIZE}}
      />
    ),
  },
  {
    label: 'ETH',
    value: 'eth',
    icon: () => (
      <Image
        source={require('../assets/images/coins-01.png')}
        style={{width: Spacing.ICON_SIZE, height: Spacing.ICON_SIZE}}
      />
    ),
  },
  {
    label: 'BNB',
    value: 'bnb',
    icon: () => (
      <Image
        source={require('../assets/images/coins-01.png')}
        style={{width: Spacing.ICON_SIZE, height: Spacing.ICON_SIZE}}
      />
    ),
  },
];

export const Types = [
  {
    label: 'All',
    value: 'all',
  },
  { label: 'Sent',
  value: 'sent',
  icon: () => (
    <Icon name="share-outline" size={Spacing.ICON_SIZE} color={Colors.ICON_DROP_DOWN_COLOR}/>
  ),},
  { label: 'Receive',
  value: 'receive',
  icon: () => (
    <Icon name="md-download-outline" size={Spacing.ICON_SIZE} color={Colors.ICON_DROP_DOWN_COLOR}/>
  ),},
];

export const Status = [
  {
    label: 'All',
    value: 'all',
  },
  { label: 'Pending',
  value: 'pending',
  },
  { label: 'Receive',
  value: 'receive',
  },
];
