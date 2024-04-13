import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/rootNavigator';
import Provider from './src/context/provider';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
export default function App() {
  return (
    <Provider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
}
