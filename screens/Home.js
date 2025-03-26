import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Linking } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenidos a RURAPP</Text>  

        <Text numberOfLines={30}>
          Una herramienta digital diseñada para profesionales que están por iniciar o ya están realizando el SERUMS, así como para aquellos que laboran en el primer nivel de atención. Esta plataforma facilita diversas actividades durante el servicio rural y en el primer nivel de atención, brindando acceso a información clave, enlaces a sitios web relevantes y recursos que optimizan el desempeño profesional.
          Aunque la información presentada está disponible desde cualquier navegador (Ejm: Google), aquí se encuentra organizada, adaptada y sistematizada para que puedas integrarla y utilizarla de manera más efectiva. DEBES COMPARAR LA INFORMACION PRESENTADA Y ACTUALIZARLA SEGUN LOS COMUNICADOS OTORGADOS POR TU RED
        </Text>

        <Image source={require("../assets/images/logof.png")} style={styles.imagin} />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Initial')}>
          <Text style={styles.buttonText}>EMPEZAR</Text>
        </TouchableOpacity>

        {/* Contenedor de íconos de TikTok y Linktree */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.tiktok.com/@rurapp2')} style={styles.iconButton}>
            <FontAwesome5 name="tiktok" size={40} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL('https://linktr.ee/rurapp')} style={styles.iconButton}>
            <FontAwesome5 name="asterisk" size={40} color="black" />
          </TouchableOpacity>
        </View>
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
  iconContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  iconButton: {
    marginHorizontal: 10,
  },
});
