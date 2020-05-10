import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from 'react-native';
import { ScreenStyle } from '../styles/Layout';

export default function Screen (props: any) {
  return (
    <KeyboardAwareScrollView 
      contentContainerStyle={{flex: 1}} >
      <ScreenStyle>
        <StatusBar backgroundColor="white" />
        {props.children}
      </ScreenStyle>
    </KeyboardAwareScrollView>
  )
};