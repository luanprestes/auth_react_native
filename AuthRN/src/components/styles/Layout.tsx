import styled from 'styled-components/native';
import { colorBase, colorText } from 'Config/assets';

export const ScreenStyle = styled.View`
  flex: 1;
  background-color: ${colorBase};
  justify-content: center;
  align-items: stretch;
  padding: 20px;
` 

export const TitleStyle = styled.Text`
  color: ${colorText};
  font-size: 32px;
  text-align: left;
  margin: 20px 0;
` 