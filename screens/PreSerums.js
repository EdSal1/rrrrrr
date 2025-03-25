import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import { useState } from 'react';

const PreSerums = ({ navigation }) => {
  const [showOptionsComo, setShowOptionsComo] = useState(false);

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Error al abrir el enlace: ", err));
  };

  // Función para enviar el correo
  const sendEmail = () => {
    const email = 'doctortears1@gmail.com'; // Cambia el dominio si es necesario
    const subject = 'Solicitud para personalización Excel';
    const body = 'Hola, estoy interesado en el servicio de personalización de Excel. Por favor, envíame más detalles. Entiendo que este servicio estará recién disponible antes de cada proceso SERUMS cuando hayan publicado la oferta de plazas y que la respuesta a este correo debería ser de un máximo de 48 h*. De no responderse dentro de plazo mencionado previamente es probable que no haya respuesta debido a motivos laborales, academicos u otros';
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    Linking.openURL(mailto).catch(err => console.error('Error al abrir el correo: ', err));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.button} onPress={() => setShowOptionsComo(!showOptionsComo)}>
          <Text style={styles.buttonText}>COMO BUSCAR UNA SEDE</Text>
        </TouchableOpacity>

        {showOptionsComo && (
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('EnlacesScreen')}>
              <Text style={styles.optionText}>Grupos de Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => openLink('https://www.youtube.com/watch?v=WT0e8h1c9i4&feature=youtu.be')}>
              <Text style={styles.optionText}>Video demostrativo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => openLink('https://www.youtube.com/watch?v=e2Gm97P8peI')}>
              <Text style={styles.optionText}>Informacion sobre establecimientos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('AnosPrevios')}>
              <Text style={styles.optionText}>Plazas ofertadas en años previos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Excel')}>
              <Text style={styles.optionText}>Excel ejemplo del Video</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionButton} onPress={sendEmail}>
              <Text style={styles.optionText}>Servicio para personalización de Excel</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ManSup')}>
          <Text style={styles.buttonText}>MANUALES DE SUPERVIVENCIA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Adjudicacion')}>
          <Text style={styles.buttonText}>EL DIA DE MI ADJUDICACION</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cursos')}>
          <Text style={styles.buttonText}>CURSOS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => openLink('https://docs.google.com/spreadsheets/d/11D8AW3z7be4c9y3uV_mvMUm4Ay_geZsQCfiMmF3kPvA/edit?gid=0#gid=0')}>
          <Text style={styles.buttonText}>QUE LLEVARME</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Llegando')}>
          <Text style={styles.buttonText}>LLEGANDO A MI ESTABLECIMIENTO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sello')}>
          <Text style={styles.buttonText}>MI SELLO?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pagacho')}>
          <Text style={styles.buttonText}>HACER PAGACHO?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Region')}>
          <Text style={styles.buttonText}>DOCUMENTOS A PRESENTAR EN MI REGION</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EnfermedadesRegion')}>
          <Text style={styles.buttonText}>A QUE PATOLOGIAS ME ENFRENTARE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Coordinadores')}>
          <Text style={styles.buttonText}>COORDINADORES 2024</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Induccion')}>
          <Text style={styles.buttonText}>INDUCCION</Text>
        </TouchableOpacity>

        {/* Resto del código permanece igual */}
        
      </ScrollView>
    </View>
  );
}

export default PreSerums;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A1E0D3',
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#2C6B47',
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
  optionButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
  },
  optionText: {
    color: 'black',
    fontSize: 16,
  },
});
