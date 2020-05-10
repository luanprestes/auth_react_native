import React from 'react';
import { TitleStyle } from '../components/styles/Layout';
import { ButtonStyle, TextButtonStyle } from '../components/styles/Forms';
import Screen from '../components/Screen';

export default function Welcome (props:any) {
  
  function onNavigate(screen:string){
    return props.navigation.navigate(screen)
  }

  return (
    <Screen>
      <TitleStyle>Bem vindo ao APP :)</TitleStyle>

      <ButtonStyle onPress={() => onNavigate('Login')}> 
        <TextButtonStyle>
          Fazer login
        </TextButtonStyle>
      </ButtonStyle>

      <ButtonStyle> 
        <TextButtonStyle>
          Cadastre-se
        </TextButtonStyle>
      </ButtonStyle>

    </Screen>
  )
};