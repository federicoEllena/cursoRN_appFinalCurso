import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({
  label, value, onChangeText, placeHolder, enableSecureTextEntry,
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={enableSecureTextEntry}
        placeholder={placeHolder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2, // 2/3 del espacio disponible en el contenedor
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1, // 1/3 del espacio disponible en el contenedor
  },
  containerStyle: {
    height: 40,
    flex: 1, // llena todo el espacio disponible
    flexDirection: 'row',
    alignItems: 'center',
  },
};

/* nota styles: text y text input son labels hijas del parent view que las contiene.
La propiedad flex 2 y 1 respectivamente se suman y representan la
proporcion de espacio ocupado por cada elemento en el contenedor
Es decir, input tomara 2/3 del espacio del contenedor padre, y label 1/3 del espacio */
export { Input };
