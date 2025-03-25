import { StyleSheet, Text, View, Linking, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const EnfermedadesRegion = () => {
  const handleYouTubePress = () => {
    Linking.openURL('https://www.youtube.com/watch?v=ILrYspvEiss'); 
  };

  const handleEmailPress = () => {
    const email = 'doctortears1@gmail.com';
    const subject = 'Patologias frecuentes';
    const body = 'Hola, estoy interesado en el servicio de Excel para patologias frecuentes. Por favor, envíame más detalles. Entiendo que la respuesta a este correo puede demorar hasta 72h*, y este servicio puede ser solicitado en cualquier parte del año. De no responderse dentro de plazo mencionado previamente es probable que no haya respuesta debido a motivos laborales, academicos u otros'
    ;
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    Linking.openURL(mailtoURL);
  };

  const handleLinkPress = () => {
    Linking.openURL('https://www.minsa.gob.pe/reunis/data/morbilidad_HIS.asp');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>

    <View style={styles.container}>
      <Text style={styles.text}>
        El MINSA brinda una web netamente dirigida a morbilidad de nuestro país, donde puedes ver las morbilidades más comunes agrupadas por región, CIE-10, y si son de zona urbana y rural. A continuación se te muestra un video de cómo usarla para que, cuando vayas a tu establecimiento, puedas ver a qué patologías frecuentemente atenderás. Si aún después de ver el video se te hace difícil identificar por tu microred y/o distrito, se te brindará la opción para solicitar el servicio. 
        {'\n\n'}
        *En el video, al momento de filtrar la información, la imagen se congela por unos segundos debido a los componentes de dicha computadora. Se recomienda utilizar un equipo de gama media a alta, con un procesador de las ultimas generaciónes, una memoria RAM mayor a 32GB, y un SSD 1TB para un mejor rendimiento, con ello sera mas fluido en el analisis. Además, es preferible tener una ventana de peso ligero abierta para evitar sobrecalentamiento. CASO CONTRARIO, NO LO INTENTES en tu PC, mucho menos en tu celular, ya que esto puede hacer que tu equipo se "congele" o afectar lo que estés realizando en ese momento. Cualquier intento es bajo TU responsabilidad.{' '}
        {'\n\n'}
        <Text style={styles.link} onPress={handleLinkPress}>Haz clic aquí para acceder a la página de morbilidad del MINSA.</Text>
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleYouTubePress}>
        <Text style={styles.buttonText}>Ver Video en YouTube</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.emailButton]} onPress={handleEmailPress}>
        <Text style={styles.buttonText}>Solicitar Servicio por Correo</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default EnfermedadesRegion;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex:1,
    padding: 16,
    backgroundColor: 'azure',
  },
  text: {
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 24,
  },
  link: {
    color: '#0000EE',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#FF0033',
    paddingVertical: 15, // Aumentado para alcanzar al menos 48dp
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    minHeight: 50, // Asegura que el botón tenga al menos 48dp de altura
  },
  
  emailButton: {
    backgroundColor: 'purple',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
