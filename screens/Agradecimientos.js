import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function Agradecimientos() {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Imagen antes de los agradecimientos */}
        <Image 
          source={require('../assets/images/agradecimientos.jpg')} 
          style={styles.image} 
        />
        
        <Text style={styles.text}>
          Agradecimientos al grupo más CHAD 🗿 <Text style={styles.bold}>SERUMS VIVENCIAS</Text>, donde la experiencia vivida de cada uno permitió conocer diferentes realidades a las que uno se enfrenta, y esto permitió mejorar el panorama para el desarrollo de la aplicación/web, ¡ya falta poco para acabar, sobreviviremos!, y recordaremos esta etapa en nuestras vidas.
        </Text>

        <Text style={styles.paragraph}>
          A "Avicena" 🕌, por su apoyo en comentarios/sugerencias en busca de mejoras de la App, y ser una gran persona
        </Text>
        
        <Text style={styles.paragraph}>
          Al Apurimeño, por volverse más 🧀🧀🧀🧀🧀, y que sus experiencias ayudaran al contenido de la App
        </Text>

        <Text style={styles.paragraph}>
          A mis amigos y docentes de investigación, cuyo apoyo y las oportunidades brindadas han abierto muchas puertas, ampliando mi perspectiva y motivándome a buscar mejoras constantes recordándome que lo que hagamos debe estar orientado a generar un impacto positivo en el lugar donde nos encontremos.         
        </Text>

        <Text style={styles.paragraph}>
          A ti, que estás leyendo esto y que en algún momento apoyaste este proyecto, ya sea completando formularios durante la etapa de recolección de información, participando desde el grupo de Dudas Clínicas, compartiendo alguna historia en Instagram o contribuyendo de cualquier otra forma: tus sugerencias/apoyos fueron fundamentales para ampliar nuestra perspectiva. Gracias a ti, este proyecto es ahora una realidad, y ya puedes disfrutarlo en tu dispositivo. ¡Mil gracias por ser parte de esto!
        </Text>

        
        <Text style={styles.paragraph}>
          A la DELEGACIÓN NACIONAL DE MÉDICOS SERUMISTAS 2024
        </Text>

        <Text style={styles.paragraph}>
          A Vortex-Emergencias
        </Text>

        <Text style={styles.paragraph}>
          A CGMedicina
        </Text>

        <Text style={styles.paragraph}>
          A la Dra_Panta
        </Text>

        <Text style={styles.paragraph}>
          A EviSalud
        </Text>

        <Text style={styles.paragraph}>
          Al Dr Ricardo Carrillo
        </Text>

        <Text style={styles.paragraph}>
          A Leto.Med
        </Text>

        <Text style={styles.paragraph}>
          A memesalmenara1
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Fondo claro para mejorar la estética
  },
  container: {
    paddingHorizontal: 10, // Aproximadamente 0.4mm
    paddingBottom: 16, // Espacio extra para evitar que el contenido quede pegado al borde inferior
  },
  image: {
    width: '100%',
    height: 200, // Ajusta el tamaño según la imagen
    resizeMode: 'contain',
    marginBottom: 16, // Espacio entre la imagen y el texto
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333', // Color del texto
    textAlign: 'justify', // Justificación del texto
  },
  bold: {
    fontWeight: 'bold',
  },
  paragraph: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    textAlign: 'justify', // Justificación del texto
  },
});
