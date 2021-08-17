import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Wallet from '../../screens/main/wallet';
import SendCrypto from '../../screens/main/sendCrypto';
import ReceiveCrypto from '../../screens/main/receiveCrypto';
import ScanCode from '../../screens/main/scanCode';

interface Props {}
const Stack = createStackNavigator();

const Index: React.FC<Props> = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="SendCrypto" component={SendCrypto} />
      <Stack.Screen name="ReceiveCrypto" component={ReceiveCrypto} />
      <Stack.Screen name="ScanCode" component={ScanCode} />
    </Stack.Navigator>
  );
};

export default Index;
