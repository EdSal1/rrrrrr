import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';



const Residentado = ({navigation}) => {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error('Error al abrir el enlace: ', err)
    );
  };

  
  const [buttons, setButtons] = useState([
   
    
    {
      image: require('../assets/images/qx.jpeg'),
      link: 'https://qxmedic.innovaqx.com/cursos/',
    },
    
  ]);

  // Función para barajar los botones de forma aleatoria
  useEffect(() => {
    setButtons((prevButtons) => {
      const shuffled = [...prevButtons].sort(() => Math.random() - 0.5);
      return shuffled;
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      

      {/* Mostrar los botones aleatorios */}
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => openLink(button.link)}
        >
          <Image source={button.image} style={styles.buttonImage} />
        </TouchableOpacity>
      ))}

      {/* Texto adicional al final */}
      <Text style={styles.infoText}>
      Los botones se muestran de forma aleatoria cada vez que ingresas. Si te preguntas por las demás entidades, debemos informarte que NO hemos recibido una respuesta confirmatoria de su parte o han decidido NO participar en esta ni en otras secciones de la aplicación/web.
      </Text>
    </ScrollView>
  );
};

export default Residentado;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#caacd7',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#5c185d',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 17,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonImage: {
    width: '100%',
    height: 50, // Aumenté la altura de la imagen
    resizeMode: 'contain',
  },
  infoText: {
    marginTop: 20,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
