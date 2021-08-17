import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/splash/splash';
import Language from '../screens/selectLanguage/languageSelection';
import CreateWalletFlow from './createWalletFlow/index';
import ImportWalletFlow from './importWalletFlow/index';
import MainFlow from './mainFlow/index';
import PatternFlow from './pattern-lockFllow/index';
interface Props{

}
const Stack=createStackNavigator();

const Index:React.FC<Props>=()=>{
return(
<Stack.Navigator headerMode="none" initialRouteName="Splash">
    <Stack.Screen name="Splash" component={Splash}/>
    <Stack.Screen name="Language" component={Language}/>
    <Stack.Screen name="Pattern" component={PatternFlow}/>
    <Stack.Screen name="CreateWalletFlow" component={CreateWalletFlow}/>
    <Stack.Screen name="ImportWalletFlow" component={ImportWalletFlow}/>
    <Stack.Screen name="MainFlow" component={MainFlow}/>
</Stack.Navigator>
)
}

export default Index;

