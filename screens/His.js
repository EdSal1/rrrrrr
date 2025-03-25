import React from 'react';
import { StyleSheet, Text, ScrollView, Linking, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Cambiado a Ionicons

const enlaces = [
  { id: 1, text: 'ENLACE REUNIS', url: 'https://bvs.minsa.gob.pe/manuales-del-sistema-de-informacion-his/', info: 'REUNIS en su seccion de Manuales de Registro y codificacion te re-dirige a la seccion de Manuales HIS por año, la cual se encuentra actualizada' },
  { id: 2, text: 'DIRESA ALTO AMAZONAS', url: 'https://diredsaa.gob.pe/manuales-his/', info: 'La DIRESA ALTO AMAZONAS es tal vez donde puedes encontrar de forma organizada la última versión de estos.' },
  { id: 3, text: 'DIRESA MOQUEGUA', url: 'https://drive.google.com/drive/folders/1fQ5jhbmqOrur5QXMed35pEZJQo0qoQMJ', info: 'La DIRESA Moquegua también tiene un enlace a manuales actualizados sobre cómo deben ser llenados los HIS.' },
  { id: 4, text: 'DIRESA LORETO', url: 'https://dite.geresaloreto.gob.pe/w_manuales.php', info: 'La DIRESA LORETO también tiene un enlace a manuales actualizados en su sitio web.' },
  { id: 5, text: 'HiS Dr Ricardo Carrillo', url: 'https://docs.google.com/file/d/1IgWbP2u2C4t5dX_r-MmGABAIbfE0pwC2/edit?usp=docslist_api&filetype=msexcel', info: 'El Dr. Ricardo Carrillo personalizó un Excel con los HIS que se llenan de forma común. Puedes acceder a través del siguiente enlace, además tienes el video demostrativo que puedes acceder por el botón de TikTok.' },
];

const His = () => {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  const openTikTok = () => {
    Linking.openURL('https://www.tiktok.com/@dr.ricardo_carrillo/video/7419747429886610693?is_from_webapp=1&sender_device=pc&web_id=7434211829855176247');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.introText}>
        Los Manuales HIS se actualizan cada cierto periodo de tiempo, los cuales deben ser aplicados después de su actualización. A continuación, algunos recursos sobre los HIS:
      </Text>

      {enlaces.map((enlace) => (
        <View key={enlace.id} style={styles.itemContainer}>
          <Text style={styles.linkText}>{enlace.id}. {enlace.text}</Text>
          <Text style={styles.infoText}>{enlace.info}</Text>
          <TouchableOpacity onPress={() => handlePress(enlace.url)}>
            <Text style={styles.urlText}>{enlace.url}</Text>
          </TouchableOpacity>
          {enlace.id === 5 && (
            <TouchableOpacity onPress={openTikTok} style={styles.tiktokButton}>
              <Ionicons name="logo-tiktok" size={32} color="black" />
              <Text style={styles.tiktokText}>TikTok</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: 'azure' },
  introText: { fontSize: 20, color: 'black', marginBottom: 20, fontWeight: 'bold' },
  itemContainer: { marginBottom: 20 },
  linkText: { color: 'black', fontWeight: 'bold', marginBottom: 5, fontSize: 30 },
  infoText: { fontSize: 20, color: '#555555 ', marginBottom: 5 },
  urlText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 10,
    paddingVertical: 12, // Mayor altura para facilitar la interacción
    fontSize: 28, // Aumentado para mejorar la visibilidad
  },
  tiktokButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingVertical: 15, // Mayor padding para que sea más fácil tocarlo
    minHeight: 70, 
  },
  tiktokText: {
    fontSize: 50, // Texto más grande
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default His;
