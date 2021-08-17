import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SetPinCode from '../../screens/pattern-lock/setPinCode';
import EnterPinLock from '../../screens/pattern-lock/enterPinLock';

interface Props {}
const Stack = createStackNavigator();

const Index: React.FC<Props> = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="SetPinCode">
      <Stack.Screen name="SetPinCode" component={SetPinCode} />
      <Stack.Screen name="EnterPinLock" component={EnterPinLock} />
    </Stack.Navigator>
  );
};

export default Index;
