import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RecoveryApprovement from '../../screens/importwallet/recoveryPhrasesApprovement';

interface Props {}
const Stack = createStackNavigator();

const Index: React.FC<Props> = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="RecoveryApprovement"
        component={RecoveryApprovement}
      />
    </Stack.Navigator>
  );
};

export default Index;
