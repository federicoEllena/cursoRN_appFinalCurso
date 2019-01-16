import React from 'react';
import { View } from 'react-native';

/* Este componente va a mostrar cosas unicamente, no es necesario que sea de clase, basta con que sea funcional */

const CardSection = props => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

export { CardSection };
