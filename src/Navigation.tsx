import { ParamListBase } from '@react-navigation/core';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Appbar } from 'react-native-paper';

import { HomeScreen } from './HomeScreen';
import { SettingsScreen } from './SettingsScreen';

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

const switchPage = (navigation: NativeStackNavigationProp<ParamListBase>, name: keyof RootStackParamList) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{ name }],
    }),
  );
};

const Stack = createNativeStackNavigator();

function NavigationBar({ navigation }: NativeStackHeaderProps) {
  const { t } = useTranslation();

  const {
    routes: [{ name }],
  } = navigation.getState();

  return (
    <Appbar.Header>
      {name === 'Settings' ? <Appbar.BackAction onPress={() => switchPage(navigation, 'Home')} /> : null}
      <Appbar.Content title={t(name)} />
      {name !== 'Settings' ? <Appbar.Action icon="cog" onPress={() => switchPage(navigation, 'Settings')} /> : null}
    </Appbar.Header>
  );
}

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: props => <NavigationBar {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
