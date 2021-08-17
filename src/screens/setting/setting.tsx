import React from 'react';
import { View} from 'react-native';
import {Text,ThemeProvider,Button,Input} from 'react-native-elements';

interface Props{}

const theme={
    Text:{
        fontFamily:'IRANYekanMobileBlack'
    }
}

const Setting:React.FC<Props>=()=>{
    return(
        <ThemeProvider theme={theme}>
<View style={{flex:1 }}>
    <Text>
        This Is Setting Screen
    </Text>
</View>
</ThemeProvider>
    )
}

export default Setting;