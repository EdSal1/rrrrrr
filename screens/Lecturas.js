import React from 'react';
import { StyleSheet, Text, ScrollView, Linking, TouchableOpacity, View } from 'react-native';

const enlaces = [
  { id: 1, text: 'Ley N° 27657 del MINSA', url: 'https://www.diresacallao.gob.pe/wdiresa/documentos/baselegal/Ley27657.pdf' },
  { id: 2, text: 'Ley N° 23330: ley del serumista:', url: 'https://cdn.www.gob.pe/uploads/document/file/520483/ley-del-servicio-rural-y-urbano-marginal-de-salud-ley-n-23330.pdf',
    subitems: [
      { id: '2.1', text: 'Modifican el Reglamento de la Ley N° 23330, Ley del Servicio Rural y Urbano Marginal de Salud - SERUMS: ', url: 'https://busquedas.elperuano.pe/dispositivo/NL/1611555-2' }
    ]
  },
  { id: 3, text: 'Ley N° 27444: ley del proceso administrativo: ', url: 'https://presidencia.gob.pe/integridad-institucional/docs/LEY-N-27444-d.pdf',
    subitems: [
      { id: '3.1', text: 'MANUAL SOBRE EL TEXTO ÚNICO ORDENADO DE LA LEY N° 27444 – LEY DEL PROCEDIMIENTO ADMINISTRATIVO GENERAL (2021)', url: 'https://www.minedu.gob.pe/transparencia/2021/pdf/TUO_27444-PROCED_ADMINISTRA-Final.pdf ' }
    ]
  },
  { id: 4, text: 'DL N° 1153: política de compensaciones del personal de salud:', url: 'https://www.leyes.congreso.gob.pe/Documentos/DecretosLegislativos/01153.pdf' },
  { id: 5, text: 'RM N° 546-2011/MINSA, sobre las categorías de los establecimientos del sector salud.', url: 'https://cdn.www.gob.pe/uploads/document/file/272294/243402_RM546-2011-MINSA.pdf20190110-18386-cimfnp.pdf?v=1547161089' },
  { id: 6, text: 'Ley de Trabajo Médico:', url: 'https://www.cmp.org.pe/wp-content/uploads/2020/02/ley_trabajo_medico.pdf' },
  { id: 7, text: 'Normatividad sobre guardias hospitalarias y comunitarias en los establecimientos asistenciales de salud (2004)', url: 'https://cdn.www.gob.pe/uploads/document/file/417298/102161074279996288720191106-32001-11duwvq.pdf?v=1573077118' },
];

const Lecturas = () => {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {enlaces.map((enlace) => (
        <View key={enlace.id}>
          <TouchableOpacity onPress={() => handlePress(enlace.url)}>
            <Text style={styles.linkText}>{enlace.id}. {enlace.text}</Text>
            <Text style={styles.urlText}>{enlace.url}</Text>
          </TouchableOpacity>
          {enlace.subitems && enlace.subitems.map((subitem) => (
            <TouchableOpacity key={subitem.id} onPress={() => handlePress(subitem.url)}>
              <Text style={styles.subItemText}>{subitem.id}. {subitem.text}</Text>
              <Text style={styles.urlText}>{subitem.url}</Text>
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
  linkText: {
    color: 'black', // Cambiar el color del texto a negro
    fontWeight: 'bold', // Negrita para resaltar el número y el texto
    marginBottom: 5,
  },
  subItemText: {
    color: 'black', // Color del texto negro para los subitems
    fontWeight: 'bold', // Negrita para el texto de los subitems
    marginLeft: 20, // Para dar una indentación a los subitems
    marginBottom: 5,
  },
  urlText: {
    color: 'blue', // Los enlaces siguen en color azul
    textDecorationLine: 'underline',
    marginLeft: 10,
    marginBottom: 15,
  },
});

export default Lecturas;