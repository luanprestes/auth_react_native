import { AsyncStorage } from 'react-native';

interface UserLogin{
  email: string, 
  password: string
}

export const authUser = async (payload:UserLogin) => {
  await AsyncStorage.setItem('User', JSON.stringify(payload));

  return {
    type: "USER_AUTH",
    payload
  }
}
