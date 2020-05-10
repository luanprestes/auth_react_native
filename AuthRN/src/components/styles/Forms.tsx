import styled from 'styled-components/native';
import { colorBase, colorText } from '../../config/assets';

export const InputStyle = styled.TextInput.attrs({
  placeholderTextColor: colorText
})`
  background-color: ${colorBase};
  border: 1px solid ${colorText};
  margin: 10px 0;
  padding: 12px 20px;
  width: 100%;
  color: ${colorText};
  font-size: 18px;
  border-radius: 12px
`;


export const ButtonStyle = styled.TouchableOpacity`
  background-color: ${colorText};
  margin: 10px 0;
  padding: 12px 20px;
  width: 100%;
  border-radius: 12px
`;

export const TextButtonStyle = styled.Text`
  color: ${colorBase};
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center
`;