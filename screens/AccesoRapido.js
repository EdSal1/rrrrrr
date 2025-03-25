import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';

const AccesoRapido = ({ navigation }) => { // Recibe 'navigation' como prop
  
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error('Error al abrir el enlace: ', err));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Botón para ir a la ventana Fuas */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Fuas')} 
      >
        <Text style={styles.buttonText}>FUAs</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('His')} 
      >
        <Text style={styles.buttonText}>HIS</Text>
      </TouchableOpacity>

      {/* Texto antes de IR1 */}
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => openLink('https://redsaludchiclayo.com/mvc/view/consultor_medinsumos')}
      >
        <Text style={styles.buttonText}>Código de medicamentos online/RED SALUD CHICLAYO</Text>
      </TouchableOpacity>



      <Text style={styles.sectionText}>Reglas de consistencia y validacion, CIE-10 (RC_53), Código de medicamentos</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => openLink('https://drive.google.com/drive/folders/18eUtRWCzQO0yCmnMTSmmcQVm-LERvlOF?usp=drive_link')}
      >
        <Text style={styles.buttonText}>PACK 1</Text>
      </TouchableOpacity>

      {/* Texto antes de IR2 */}
      <Text style={styles.sectionText}>CIE-10, Medicamentos basicos + dosis standar en adultos y niños, asi como uso en patologias, CALCULADORA DOSIS PEDIATRICA, Modelos HIS: DNT, SM, PROMSA, Gestantes, Anemia, Cancer, Salud Ocular, Metales Pesados, mordedura de perro [Material Dr Ricardo Carrillo]</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => openLink('https://docs.google.com/file/d/1IgWbP2u2C4t5dX_r-MmGABAIbfE0pwC2/edit?usp=docslist_api&filetype=msexcel')}
      >
        <Text style={styles.buttonText}>PACK 2</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AccesoRapido;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fad5a6',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#e25f70',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 17,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    marginBottom: 5,
  },
});


