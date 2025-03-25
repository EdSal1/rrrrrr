import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';



const Cursos = ({navigation}) => {
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
      <TouchableOpacity
        style={styles.button}
        onPress={()=> navigation.navigate('OPS')}
      >
        <Text style={styles.buttonText}>OPS</Text>
      </TouchableOpacity>
    

      <TouchableOpacity
        style={styles.button}
        onPress={() => openLink('https://www.instagram.com/p/C1-IJFyuyVD/?igsh=dHZjOGlvaHpsNTMx')}
      >
        <Text style={styles.buttonText}>“CG MEDICINA”</Text>
      </TouchableOpacity>

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
        Los botones salen de forma aleatoria cada vez que ingreses.
      </Text>
    </ScrollView>
  );
};

export default Cursos;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A1E0D3',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#2C6B47',
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
