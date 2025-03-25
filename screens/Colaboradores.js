import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function Colaboradores() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Image 
          source={require('../assets/images/delegados.jpeg')} 
          style={styles.image} 
        />
        
        <Text style={styles.text}>
          Este proyecto tuvo el apoyo de la <Text style={styles.bold}>DELEGACION NACIONAL DE MEDICOS SERUMISTAS 2024</Text>
        </Text>

        <View style={styles.namesContainer}>
          <Text style={styles.name}>Dra. Laura Sofia Caceres Llampi </Text>
          <Text style={styles.name}>Dra. Lilibeth Yuleisi Quispe Rosales</Text>
          <Text style={styles.name}>Dra. Miriam Adela Quinto Murga</Text>
          <Text style={styles.name}>Dr.  Brayan Jhonatan Poccory Cruz</Text>
          <Text style={styles.name}>Dra. Ana Paula Sanchez Perez</Text>
          <Text style={styles.name}>Dr.  Renzo Paolo Espinoza Rojas</Text>
          <Text style={styles.name}>Dr.  Erick Jesus Tello Pinillos</Text>
        </View>

        <Text style={styles.footerText}>
          A quienes se agradece profundamente su apoyo en la recolección de información a nivel nacional y en el envío de formularios, los cuales fueron una parte indispensable para el desarrollo del contenido y las herramientas integradas en la aplicación/web. Su colaboración no solo beneficiará a los serumistas actuales, sino también a las futuras generaciones de serumistas en los años venideros.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1, 
    backgroundColor: '#f9f9f9', 
    padding: 16,
  },
  container: {
    paddingBottom: 20, 
  },
  image: {
    width: '100%',
    height: 200, 
    resizeMode: 'contain',
    marginBottom: 16, 
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  namesContainer: {
    marginVertical: 16, 
  },
  name: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 8, 
  },
  footerText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555', 
    marginTop: 20, 
    textAlign: 'center', 
  },
});
