import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavIndex from './src/navigations/index';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/index';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavIndex />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
