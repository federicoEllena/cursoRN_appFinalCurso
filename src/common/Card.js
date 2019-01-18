import React from 'react';
import { View } from 'react-native';

/*el truco: al envolver la propiedad styles en un array , e incluir
en las props un style adicional de caracter opcional, la prop de
la derecha, de existir, hara override de la de la izquierda que seria
la default */
const Card = props => (
  <View style={[styles.containerStyle, props.style]}>
    { props.children }
  </View>
);

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRarius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

export { Card };
