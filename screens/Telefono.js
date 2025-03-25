import React from 'react';
import { View, Text, TouchableOpacity, Linking, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const topics = [
  'Herramientas de información basada en evidencia',
  'Apps de lectores de imágenes, traductores, así como de SCAN de documentos.',
  'App con función de Lector de Texto OCR',
  'Apps con codificación de CIE 10',
  'Calculadora para evaluar Riesgo Cardiovascular',
  'Apps sobre medicamentos, ya sea para dosificación en Adultos y en Pediatría',
  'Apps con tips sobre qué hacer en emergencias pediátricas y adultas, se te recomienda revisar según frecuencia',
  'Apps para valoración antropométrica pediátrica',
  'Apps para evaluación de anemia en el Perú, revisa las normas técnicas actualizadas para mejor manejo, para el 2024:',
  'Apps Obstétricas, evaluación de crecimiento fetal',
  'Apps sobre uso de anticonceptivos, así como sobre manejo de ITS',
  'Apps sobre toxicología, antídotos y manejo rápido de dichos casos',
  'Apps para calcular paso de volumen en gotas, tasas de filtración glomerular, valores referenciales de laboratorio, calculadoras para evaluaciones clínicas de pacientes',
  'Apps de IA usadas y recomendadas para áreas de la salud',
  'Apps que te permitan abrir documentos',
  'También puedes revisar las redes sociales del canal para encontrar otros tips',
  'Se te deja un ejemplo de cómo generar un acceso rápido en tu teléfono, al menos para que tengas los archivos de uso frecuente, por si un día te encuentras sin luz o internet',
];

const Telefono = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>
        Bienvenido a esta ventana, aquí encontrarás una lista sobre qué contenido deben tener aplicaciones y herramientas digitales que son útiles para el servicio rural.
      </Text>
      <Text style={styles.subHeaderText}>Las Apps que recomendamos deben ser sobre:</Text>
      {topics.map((topic, index) => (
        <View key={index} style={styles.topicContainer}>
          <Text style={styles.paragraph}>{`${index + 1}. ${topic}`}</Text>
          {topic.includes('anemia') && (
            <TouchableOpacity
              onPress={() => openLink('https://vm.tiktok.com/ZMkXppCLS/')}
              style={styles.tiktokIcon}
            >
              <Ionicons name="logo-tiktok" size={30} color="#000" />
            </TouchableOpacity>
          )}
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => openLink('https://vm.tiktok.com/ZMkmw7rQa/')}
          style={styles.tiktokButton}
        >
          <Ionicons name="logo-tiktok" size={40} color="white" />
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'azure',
  },
  headerText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
  subHeaderText: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'left',
    color: 'black',
  },
  topicContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tiktokIcon: {
    marginLeft: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  tiktokButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default Telefono;
