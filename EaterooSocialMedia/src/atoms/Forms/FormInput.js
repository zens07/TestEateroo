import React from 'react';
import {TextInput} from 'react-native-paper';

export default function FormInput(props) {
  const {label, value, onChangeText, mode} = props;
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={e => onChangeText(label.toLowerCase(), e)}
      mode={mode}
    />
  );
}
