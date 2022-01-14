import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks';
import { increment, selectCount } from '../slices/counter';

export const SettingsScreen = () => {
  const dispatch = useAppDispatch();

  console.log('DADA', useAppSelector(selectCount));

  useEffect(() => {
    dispatch(increment());

    return () => {};
  });

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};
