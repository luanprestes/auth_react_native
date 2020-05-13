import React from 'react';
import { TitleStyle } from 'Components/styles/Layout';
import Screen from 'Components/screen';
import ButtonDefault from 'Components/buttons/default'

export default function Welcome (props:any) {
  
  function onNavigate(screen:string){
    return props.navigation.navigate(screen)
  }

  return (
    <Screen>
      <TitleStyle>Bem vindo ao APP :)</TitleStyle>

      <ButtonDefault 
        text='Fazer login' 
        onPress={() => onNavigate('Login')}
      />

      <ButtonDefault text='Cadastre-se' />

    </Screen>
  )
};