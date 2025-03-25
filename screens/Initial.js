import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Alert, ScrollView } from 'react-native';

const handlePostSerumsPress = () => {
  Alert.alert("BIENVENIDO AL DESEMPLEO :D!");
};

const Initial = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.text}>Escoge en qué fase te encuentras ahora</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PreSerums')}>
          <Text style={styles.buttonText}>Pre-SERUMS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Serums')}>
          <Text style={styles.buttonText}>SERUMS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handlePostSerumsPress}>
          <Text style={styles.buttonText}>Post-SERUMS</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Initial;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,  
    backgroundColor: '#b0c2f2', // Fondo para toda la pantalla
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#b0c2f2', // Asegura que el fondo se mantenga en toda la vista
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: '#102601',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#014ba0',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 17,
    marginVertical: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
