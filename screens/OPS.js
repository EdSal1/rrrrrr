import React from 'react';
import { StyleSheet, Text, ScrollView, Linking, TouchableOpacity, View } from 'react-native';

const enlaces = [
  { id: 1, text: 'DENGUE', url: 'https://campus.paho.org/es/curso/diagnostico-manejo-clinico-dengue' },
  { 
    id: 2, 
    text: 'CORRECTO LLENADO CERTIFICADO DE DEFUNCION', 
    url: 'https://campus.paho.org/es/curso/CorrectoLlenado-CertifDefuncion',
  },
  { id: 3, text: 'Gestión del Riesgo de Emergencias en Salud y Desastres. GERESD', url: 'https://campus.paho.org/es/curso/gestion-riesgo-emergencias' },
  { id: 4, text: 'Manejo Clínico de la Coinfección Tuberculosis/Virus de Inmunodeficiencia Humana (TB/VIH)', url: 'https://campus.paho.org/es/curso/Manejo_coinfeccion-TB-VIH' },
  { id: 5, text: 'CADENA DE FRIO', url: 'https://www.youtube.com/watch?v=jlvR6qMA0KQ' },
];

const Region = () => {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Texto inicial antes de los botones */}
      <Text style={styles.initialText}>
        Es necesario desarrollar algunos cursos como el de DENGUE de la OPS, porque los casos irán incrementando año tras año, además que son solicitados por tu red. Se dejan además otros cursos que pueden ser convenientes y los sentirás en carne propia en tu servicio.
      </Text>

      {enlaces.map((enlace) => (
        <View key={enlace.id} style={styles.buttonContainer}>
          {/* Botón principal */}
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => handlePress(enlace.url)}
          >
            <Text style={styles.buttonText}>{enlace.id}. {enlace.text}</Text>
          </TouchableOpacity>

          {/* Subitems (si existen) */}
          {enlace.subitems && enlace.subitems.map((subitem) => (
            <TouchableOpacity 
              key={subitem.id} 
              style={styles.subButton} 
              onPress={() => handlePress(subitem.url)}
            >
              <Text style={styles.subButtonText}>{subitem.id}. {subitem.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:'azure',
    flex:1,
  },
  initialText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#263256',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subButton: {
    backgroundColor: '#6C757D',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 20,
  },
  subButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Region;
