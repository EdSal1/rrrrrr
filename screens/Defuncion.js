import React from 'react';
import { StyleSheet, Text, ScrollView, Linking, TouchableOpacity, View } from 'react-native';

const enlaces = [
    { 
    id: 1, 
    text: 'CORRECTO LLENADO CERTIFICADO DE DEFUNCION OPS', 
    url: 'https://campus.paho.org/es/curso/CorrectoLlenado-CertifDefuncion',
    },
  { id: 2, text: 'CMP Llenado correcto de Certificado de Defunción - SINADEF - SERUMS', url: 'https://www.youtube.com/watch?v=Un2JUF4sVbo' },
  { id: 4, text: 'Guía técnica para el correcto llenado del certificado de defunción', url: 'https://www.gob.pe/institucion/minsa/informes-publicaciones/279679-guia-tecnica-para-el-correcto-llenado-del-certificado-de-defuncion' },
  { id: 5, text: 'CONSTATACION FALLECIMIENTO Ejemplo', url: 'https://docs.google.com/document/d/1MG_4PjCfsZBbkIcKTPRdrJAXWK6yVuoO/edit?usp=sharing&ouid=110697281472563324598&rtpof=true&sd=true' },
];

const Defuncion = () => {  
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Texto inicial antes de los botones */}
      <Text style={styles.initialText}>
        A muchos les pasara que tengan que hacer los documentos respectivos cuando fallezca una persona en cercanias o dentro de la comunidad respectiva, a continuacion algunos documentos necesarios para su lectura y vista, asi como algun ejemplo:
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
    backgroundColor: '#007BFF',
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

export default Defuncion;
