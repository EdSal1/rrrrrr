import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

const Libro = () => {
  const handlePress = () => {
    // Reemplaza la URL con el enlace de tu formulario
    const formsUrl = 'https://forms.gle/uKqQgPbYdhbvvNjd7';
    Linking.openURL(formsUrl);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Si presentas alguna queja y/o reclamo por algun servicio brindado, puedes hacernos saber ello, te adjuntamos un link para el formulario respectivo:
          </Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>IR AL FORMULARIO DE LIBRO DE RECLAMACIONES</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Libro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'azure',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#03A866', 
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
