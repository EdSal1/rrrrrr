import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';


const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      {/* Agregar el ícono del drawer */}
     


      <Text style={styles.text}>Bienvenidos a RURAPP</Text>  


      <Text numberOfLines={30}>
        Una herramienta digital diseñada para profesionales que están por iniciar o ya están realizando el SERUMS, así como para aquellos que laboran en el primer nivel de atención. Esta plataforma facilita diversas actividades durante el servicio rural y en el primer nivel de atención, brindando acceso a información clave, enlaces a sitios web relevantes y recursos que optimizan el desempeño profesional.
        Aunque la información presentada está disponible desde cualquier navegador (Ejm: Google), aquí se encuentra organizada, adaptada y sistematizada para que puedas integrarla y utilizarla de manera más efectiva. DEBES COMPARAR LA INFORMACION PRESENTADA Y ACTUALIZARLA SEGUN LOS COMUNICADOS OTORGADOS POR TU RED
      </Text>


      <Image source={require("../assets/images/logof.png")} style={styles.imagin} />


      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Initial')}>
        <Text style={styles.buttonText}>EMPEZAR</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};


export default HomeScreen;


const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    fontSize: 25,
  },
  
  text: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'bold',
    padding: 10,
  },
  imagin: {
    width: 200,
    height: 200,
    borderRadius: 40,
    padding: 10,
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



