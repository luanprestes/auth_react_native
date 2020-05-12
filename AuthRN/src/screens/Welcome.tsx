import React from 'react';
import { TitleStyle } from 'Components/styles/Layout';
import { ButtonStyle, TextButtonStyle } from 'Components/styles/Forms';
import Screen from 'Components/screen';

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