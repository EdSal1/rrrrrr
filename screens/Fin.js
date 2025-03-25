import React from 'react';
import { StyleSheet, Text, ScrollView, Linking, TouchableOpacity, View } from 'react-native';


const enlaces = [
  { id: 1, text: 'EJEMPLO LA LIBERTAD' , url: 'https://diresalalibertad.gob.pe/desarrollo-inovacion-e-investigacion/' },
  { id: 2, text: 'EJEMPLO AMAZONAS' , url: 'http://www.regionamazonas.gob.pe/docs/portal/imgfckeditor/14/termino%20SERUMS-FORMATOS.pdf' },
   
];

const Fin = () => {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Texto inicial antes de los IDs */}
      <Text style={styles.initialText}>
        Esto variara segun en los diferentes departamentos, se te mostraran algunos ejemplos, pero puedes consultar con tus colegas, asi como tu serumista previo.
        <Text style={{ color: '#A9E159' }}>
          Y PARA TU INFORME FINAL QUE ES LLENADO EN PLATAFORMA, PUEDES BUSCAR VIDEOS EN YOUTUBE O TIKTOK  BAJO LOS TERMINOS: INFORME FINAL SERUMS, REPORTE DE INFORME SERUMS Y ENCONTRARAS EJEMPLOS DE COMO SE LLENAN EN DICHA PLATAFORMA
        </Text>
      </Text>

      {enlaces.map((enlace) => (
        <View key={enlace.id}>
          {/* Nombre de la DIRESA */}
          <Text style={[
            styles.linkText, 
             (enlace.text === 'APURIMAC') && styles.greenText
             ]}>
            {enlace.id}. {enlace.text}
          </Text>

          {/* Texto adicional entre nombre de la DIRESA y el enlace */}
          {enlace.id === 1 && (
            <Text style={styles.infoText}>
             
            </Text>
          )}
          {enlace.id === 2 && (
            <Text style={styles.infoText}>
             
            </Text>
          )}
         


          {/* URL de la DIRESA */}
          <TouchableOpacity 
            onPress={() => handlePress(enlace.url)}
          >
            <Text style={styles.urlText}>{enlace.url}</Text>
          </TouchableOpacity>

          {/* Botón de Instagram para DIRESA ANCASH */}
          

          {/* Subitems (si existen) */}
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
  initialText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  linkText: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  greenText: {
    color: 'green', // Estilo para DIRESA APURIMAC
  },
  subItemText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 5,
  },
  urlText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginLeft: 10,
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
 
 
});

export default Fin;
