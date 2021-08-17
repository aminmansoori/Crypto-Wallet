import React from 'react';

import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import CreateWallet from '../../screens/createwallet/createWallet';
import RecoveryApprovement from '../../screens/createwallet/recoveryPhrasesApprovement';
import ShowRecovery from '../../screens/createwallet/showRecoveryPhrases';
import Register from '../../screens/createwallet/walletRegister';
import Terms from '../../screens/createwallet/walletTerms';
import ImportWalletFlow from '../importWalletFlow/index';
interface Props{

}
const Stack=createStackNavigator();

const Index:React.FC<Props>=()=>{
return(
<Stack.Navigator headerMode='none'>
    <Stack.Screen name="CreateWallet" component={CreateWallet}/>
    <Stack.Screen name="Terms" component={Terms}/>
    <Stack.Screen name="Register" component={Register}/>
    <Stack.Screen name="ShowRecoveryPhrases" component={ShowRecovery}/>
    <Stack.Screen name="RecoveryApprovement" component={RecoveryApprovement}/>
    <Stack.Screen name="ImportWallet" component={ImportWalletFlow}/>
</Stack.Navigator>
)
}

export default Index;

