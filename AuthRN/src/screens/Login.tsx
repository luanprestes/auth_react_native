import React, { useState } from 'react';
import { TitleStyle } from 'Components/styles/Layout';
import { InputStyle, ButtonStyle, TextButtonStyle } from 'Components/styles/Forms';
import Screen from 'Components/Screen';

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