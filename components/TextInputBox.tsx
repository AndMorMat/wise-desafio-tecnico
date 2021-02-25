import * as React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { InputBox, Label, InputText } from './styles'

export function TextInputBox(props) {
  return <InputBox>
            <Label>{props.label}</Label>
            <InputText
                {...props}
            />
        </InputBox>;
}
