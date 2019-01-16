// importar librerias
import React from 'react';
import { Text, View } from 'react-native';

// creacion del componente
const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;
  return ( // tambien podria hacerse style.viewStyle ademas de destructurar el objeto
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

export { Header };
