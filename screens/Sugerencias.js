import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

const Sugerencias = () => {
  const handlePress = () => {
    // Reemplaza la URL con el enlace de tu formulario
    const formsUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfrlSrF8DEyyyOU4nr4qBQqar6AvQKa3BXCgfLZIV6SFD_2Og/viewform';
    Linking.openURL(formsUrl);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Toda sugerencia para mejorar la presente aplicacion/web será tomada en cuenta. Si tienes alguna, déjala en el siguiente formulario:
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>IR AL FORMULARIO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sugerencias;

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
