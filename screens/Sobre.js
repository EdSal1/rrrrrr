import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Esta aplicación/web surge de la necesidad de contar con una guía digital, ya que muchas veces no sabemos dónde ni cómo buscar al enfrentarnos a un nuevo reto. Por ello, basándonos en la experiencia de algunos serumistas, se recopiló información útil que podrás emplear. Es posible que encuentres algunos errores, pero estos se corregirán en futuras actualizaciones.
      </Text>

    <Text style={styles.paragraph}>
      El logo de la app/web representa al Volcán Ticsani, ubicado a 5408 m.s.n.m., lugar donde se desarrolló esta aplicacion. En este entorno, se superaron diversas dificultades y retos. Allí habita una población amable y colaboradora que será recordada a lo largo de los años.
    </Text>

      <Image 
      source={require('../assets/images/ticsani.jpeg')} 
     style={styles.image} 
    />

    <Text style={styles.paragraph}>
    Esta aplicación/web se actualizará aproximadamente cada dos años, debido al tiempo que requiere y a los posibles cambios que puedan surgir. Sin embargo, algo es seguro: será de gran ayuda para ti.
    </Text>

    <Text style={[styles.paragraph, styles.highlight]}>
      Y recuerda, esforcémonos por ser mejores profesionales y <Text style={styles.redText}>¡CONSTRUYAMOS UN MEJOR PERÚ!</Text>
    </Text>
  
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'azure',
    padding: 20,
  },
  paragraph: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'justify',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  redText: {
    color: 'red',
    fontWeight: 'bold',
  },
  highlight: {
    textAlign: 'center',
    fontSize: 24,
  },
});
