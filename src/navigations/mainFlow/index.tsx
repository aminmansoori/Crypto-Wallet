import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WalletInfoFlow from '../walletInfoFlow/index';
import DApps from '../../screens/main/dApps';
import Setting from '../../screens/setting/setting';
import {Colors, Typography, Spacing} from '../../styles/index';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {tabBarOptions?:any}
const BottomTab = createBottomTabNavigator();

const Index: React.FC<Props> = ({}) => {
  return (
    <BottomTab.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName: string = '';
          color = focused
            ? Colors.ICON_ACTIVE_WALLET_COLOR
            : Colors.ICON_DEACTIVE_WALLET_COLOR;
          if (route.name === 'Wallet') {
            iconName = 'wallet';
          } else if (route.name === 'DApps') {
            iconName = 'apps';
          } else if (route.name === 'Setting') {
            iconName = 'settings-sharp';
          }
          return (
            <Icon
              name={iconName}
              color={color}
              size={Spacing.ICON_SIZE}
              style={{alignItems: 'center', justifyContent: 'center'}}
            />
          );
        },
      })}>
      <BottomTab.Screen name="Wallet" component={WalletInfoFlow} />
      <BottomTab.Screen name="DApps" component={DApps} />
      <BottomTab.Screen name="Setting" component={Setting} />
    </BottomTab.Navigator>
  );
};

export default Index;

const tabBarOptions = {
  style: {
    backgroundColor: Colors.TAB_BAR_BG_COLOR,
    borderWidth:0
  },
  labelStyle: {
    fontFamily: Typography.FONT_SEMIBOLD.fontFamily,
    fontSize: Typography.FONT_SIZE_14,
  },
  activeTintColor: Colors.ICON_ACTIVE_WALLET_COLOR,
  inactiveTintColor: Colors.ICON_DEACTIVE_WALLET_COLOR,
};
