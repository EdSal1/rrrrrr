import { StyleSheet, Text, View, Button, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const Investigando = () => {
  const handlePress = () => {
    Linking.openURL('https://www.evisalud.com'); 
  };

  return (
     <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.text}>
      Hacer investigación en el SERUMS es posible. Si aún no llevaste cursos de investigación,<Text style={styles.bold}> ESTE ES TU MOMENTO. EVISALUD </Text> otorga una gran variedad de cursos que te ayudarán a interpretar estudios, así como adquirir las bases para realizarlos. 
      Puede que incluso en tu red te soliciten un proyecto de investigación, y si tuviste algún problema en la redacción previamente ahora lleves un curso para mejorar tus habilidades; para ello, puedes contactarlos directamente desde su página web y así iniciar la cohorte que consideres necesaria dentro de sus:  
      <Text style={styles.bold}> "Cursos de investigación y medicina basada en evidencias"</Text>
      </Text>

      
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Visita EVISALUD</Text>
      </TouchableOpacity>
      
      <Image 
        source={require('../assets/images/evito.jpg')} 
        style={styles.image}
      />
    </View>
    </ScrollView>
  );
};

export default Investigando;

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
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#00A9C3',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 150,
    marginEnd: 50,
    width: 400,
    height: 400,
    justifyContent: 'center'
  },
  bold: {
    fontWeight: 'bold',
  },
});
