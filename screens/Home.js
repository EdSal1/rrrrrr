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
      Una herramiento digital dirigida a profesionales que realizarán o se encuentran realizando el SERUMS, 
        también para aquellos profesionales que ya se encuentran laborando en el primer nivel de atención. 
        Esta herramienta ha sido diseñada para facilitar diversas actividades durante tu servicio rural y marginal, así como primer nivel de atención. Proporcionando informacion y enlaces de sitios web donde podrias encontrar la informacion que necesites, acceso a recursos y herramientas que optimicen tu desempeño . 
        Aunque la información presentada está disponible en Google, aquí se encuentra organizada, adaptada y sistematizada 
        para que puedas integrarla y utilizarla de manera más efectiva.
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



