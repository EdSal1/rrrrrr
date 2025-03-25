import { StyleSheet, Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';
import React from 'react';

export default function CursosSerums() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.paragraph}>
          Durante tu Servicio Rural se te brindará la oportunidad de llevar distintos cursos y/o capacitaciones, uno de ellos corresponde a la 
          <Text style={styles.bold}> Escuela Nacional de Salud Pública - ENSAP. </Text> 
          Una vez finalizado el curso al que te matriculaste, el certificado obtenido puedes incluirlo en tu reporte final de SERUMS, además que estos cuentan con creditaje.
        </Text>

        <Text style={styles.paragraph}>
          Puedes acceder a su plataforma desde el siguiente botón, se te recomienda seguirlos en TikTok donde brindan información de próximas matrículas y otros.
        </Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => Linking.openURL('https://www.minsa.gob.pe/ensap/')}
        >
          <Text style={styles.buttonText}>ENSAP</Text>
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
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    marginTop: 40,
    backgroundColor: '#017FE5',
    paddingVertical: 15, // Ajuste para altura mínima de 48dp
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 150, // Ancho mínimo para mejor accesibilidad
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
