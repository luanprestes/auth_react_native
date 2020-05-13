import React from 'react';
import { ButtonStyle, TextButtonStyle } from 'Components/styles/Forms';

export default function ButtonDefault (props:any) {

  return (
    <ButtonStyle onPress={props.onPress}>  
      <TextButtonStyle>
        {props.text}
      </TextButtonStyle>
    </ButtonStyle>
  )
};