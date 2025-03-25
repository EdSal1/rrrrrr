import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

const Excel = () => {
  const handlePress = () => {
    // Reemplaza la URL con el enlace de tu formulario
    const formsUrl = 'https://docs.google.com/spreadsheets/d/1O3RSSVelrkQBwCRzMNlaAK0Ym7w6z9EZ/edit?gid=1768858414#gid=1768858414';
    Linking.openURL(formsUrl);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        A continuacion el excel del video, para que puedas tomarlo de ejemplo
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>IR A EXCEL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Excel;

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
