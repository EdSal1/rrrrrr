import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

const Apoyo = () => {
  const handlePress = () => {
    // Reemplaza la URL con el enlace de tu formulario
    const CMP = 'https://www.cmp.org.pe/defensoria-del-medico/';
    Linking.openURL(CMP);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Para profesionales Medicos, a continuacion el enlace hacia la pagina de la DEFENSORIA DEL MEDICO
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>IR A WEB</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Apoyo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#b1cfeb',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5a85a9', 
    paddingVertical: 15, 
    paddingHorizontal: 30, 
    borderRadius: 10, 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
