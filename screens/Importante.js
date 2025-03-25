import { View, Text, StyleSheet, ScrollView } from 'react-native';  
import React from 'react';

const Importante = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>IMPORTANTE</Text>
        <Text style={styles.paragraph}>
          Esta aplicacion/web NO tiene ninguna afiliación con el Ministerio de Salud del Perú ni con sus dependencias. La información aquí proporcionada está destinada a complementar, no a sustituir, el asesoramiento que debe obtenerse directamente del Ministerio.
        </Text>
        <Text style={styles.paragraph}>
          Esta aplicacion/web NO tiene ninguna afiliación con las entidades que puedan aparecer en él o a las que se pueda redirigir desde la aplicación/web.
        </Text>
        <Text style={styles.paragraph}>
          El autor NO se hace responsable del contenido ni de las opiniones de terceros publicadas en esta aplicacion/web, ni de la información disponible en páginas web externas a las que se pueda acceder mediante enlaces o buscadores aquí ofrecidos. Estos enlaces tienen como propósito informar al usuario sobre la existencia de otras fuentes en Internet donde puede ampliar la información presentada en este sitio.
        </Text>
        <Text style={styles.paragraph}>
          El autor, entidades particulares, y las personas que compartieron su contenido con la App/web NO asumen responsabilidad por cualquier daño o perjuicio derivado de la falta de precisión, exhaustividad, actualidad, o por errores y omisiones en las informaciones y servicios de esta aplicacion/web, así como en otros contenidos accesibles a través del mismo.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Importante;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    padding: 16,
    backgroundColor: 'azure',
    flex:1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center', // Centrado del encabezado
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 16,
    color: '#333',
  },
});
