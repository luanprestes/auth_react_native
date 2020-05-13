import React, { useState } from 'react';
import { Alert } from 'react-native';
import { isEmpty } from 'lodash'
import { useDispatch } from 'react-redux'
import { TitleStyle } from 'Components/styles/Layout';
import { InputStyle } from 'Components/styles/Forms';
import Screen from 'Components/screen';
import ButtonDefault from 'Components/buttons/default'
import { authUser } from 'Store/actions/users'

export default function Login () {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  
  function login () {
    
    if(!isEmpty(email) && !isEmpty(password)){
      dispatch(authUser({ email, password }));
      setEmail('');
      setPassword('');

      Alert.alert(
        "Login efetuado com sucesso",
      )

    } else {

      Alert.alert(
        "Erro ao efetuar login",
        "Por favor preencha todos os campos",
      )
    }
  }

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

      <ButtonDefault text='Enviar' onPress={() => login()} />

    </Screen>
  )
};