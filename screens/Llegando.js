import { StyleSheet, Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';
import React from 'react';

export default function CursosSerums() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.paragraph}>
          Llegar al establecimiento escogido será un reto para muchos, a continuación algunos TIPS.
        </Text>

        <Text style={styles.paragraph}>1. Contacta con tu serumista previo, él te comentará cuál es la mejor opción para llegar.</Text>
        <Text style={styles.paragraph}>2. Puedes consultar a serumistas previos de otras profesiones que también adjudicaron a dicha plaza, por si no logras ubicar a tu colega anterior.</Text>
        <Text style={styles.paragraph}>3. Ubica a colegas que adjudicaron a tu misma microred, puede que ellos puedan obtener información de cómo llegar a tu establecimiento.</Text>
        <Text style={styles.paragraph}>4. Puedes contactar con alguien que labora en cabecera de MicroRed, ellos pueden tener tips de cómo llegar a los establecimientos.</Text>

        <Text style={styles.paragraph}>
          A continuación se te muestra un video ejemplo de cómo usar el GPS de tu teléfono cuando no hay línea 4G ni conexión a internet.
          <Text style={styles.bold}> ES SOLO UN EJEMPLO, DEBES BUSCAR LA FORMA DE CONTACTAR CON EL PERSONAL QUE ESTÁ TERMINANDO SU SERVICIO RURAL O LABORA </Text>
          en tu establecimiento adjudicado para obtener la información respectiva.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://vm.tiktok.com/ZMkS5M727/')}>
          <Text style={styles.buttonText}>VIDEO EJEMPLO</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 15,
    lineHeight: 25,
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#017FE5',
    paddingVertical: 15, // Asegura una altura mínima superior a 50dp
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50, // Garantiza un tamaño adecuado
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
