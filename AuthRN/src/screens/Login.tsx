import React, { useState } from 'react';
import { TitleStyle } from '../components/styles/Layout';
import { InputStyle, ButtonStyle, TextButtonStyle } from '../components/styles/Forms';
import Screen from '../components/Screen';

export default function Login () {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Screen>
      <TitleStyle>Realize login para continuar :)</TitleStyle>

      <InputStyle 
        onChangeText={text => setEmail(text)} 
        placeholder='E-mail'
        textContentType='emailAddress'
        keyboardType='email-address'
        autoCompleteType='email'
        value={email} />

      <InputStyle
        onChangeText={text => setPassword(text)} 
        placeholder='Senha'
        textContentType='password'
        secureTextEntry={true}
        autoCompleteType='password'
        value={password} />

      <ButtonStyle> 
        <TextButtonStyle>
          Enviar
        </TextButtonStyle>
      </ButtonStyle>

    </Screen>
  )
};