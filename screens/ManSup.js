import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Linking } from 'react-native';

const ManSup = ({}) => {
    const [showOptionsChap1, setShowOptionsChap1] = useState(false);
    const [showOptionsChap2, setShowOptionsChap2] = useState(false);
    const [showOptionsMini, setShowOptionsMini] = useState(false);

  const openLink = (url) => {
        Linking.openURL(url).catch(err => console.error("Error al abrir el enlace: ", err));
  };

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>
        Los siguientes botones con enlaces redirigen a las publicaciones originales, dicha informacion son propiedad de las entidades o personas que realizaron la publicacion. El contenido en PDF de los capitulos fueron solicitados a su respectivo Autor. 
        *Esta aplicacion/web NO se encuentra afiliada a dichas entidades.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => setShowOptionsChap1(!showOptionsChap1)}>
          <Text style={styles.buttonText}>CAPITULO 1</Text>
        </TouchableOpacity>

        {showOptionsChap1 && (
          <View style={styles.optionsContainer}>
            
            <TouchableOpacity style={styles.optionButton} onPress={() => openLink('https://drive.google.com/file/d/1_8apUrGJLzTWIO3v1kLRNFa0VcS5smT-/view?usp=drive_link')}>
              <Text style={styles.optionText}>PDF CAPITULO 1</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={() => setShowOptionsChap2(!showOptionsChap2)}>
          <Text style={styles.buttonText}>CAPITULO 2 </Text>
        </TouchableOpacity>

        {showOptionsChap2 && (
          <View style={styles.optionsContainer}>
                        
            <TouchableOpacity style={styles.optionButton} onPress={() => openLink('https://drive.google.com/file/d/1GmARZK3_xcSvV4paPqOl3sIkfXI66oxs/view?usp=sharing')}>
              <Text style={styles.optionText}>PDF CAPITULO 2</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={() => setShowOptionsMini(!showOptionsMini)}>
          <Text style={styles.buttonText}>MINI-HISTORIA</Text>
        </TouchableOpacity>

        {showOptionsMini && (
          <View style={styles.optionsContainer}>
            
            <TouchableOpacity style={styles.optionButton} onPress={() => openLink('https://drive.google.com/file/d/1VBIEFDBZbZaPIouqYY6oqKSlZrh-MOhL/view?usp=sharing')}>
              <Text style={styles.optionText}>PDF MINI HISTORIA</Text>
            </TouchableOpacity>
          </View>
        )}

         <TouchableOpacity style={styles.button} onPress={() => openLink('http://bvs.minsa.gob.pe/local/MINSA/3467.pdf')}>
          <Text style={styles.buttonText}>“MANUAL DE AUTOCUIDADO PARA LOS PROFESIONALES DE LA SALUD DEL SERVICIO RURAL URBANO MARGINAL EN SALUD - SERUMS”</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => openLink('https://repositorio.continental.edu.pe/bitstream/20.500.12394/4624/6/IV_UC_LI_Serums_Recomendaciones_basadas_en_la_experiencia_2020.pdf')}>
          <Text style={styles.buttonText}>“SERUMS: RECOMENDACIONES BASADAS EN LA EXPERIENCIA-2018”</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => openLink('https://www.instagram.com/dra_panta?igsh=MThrN3FydDQwOWxoYg==')}>
          <Image source={require('../assets/images/panda.jpeg')} style={styles.buttonImage} />
        </TouchableOpacity>

       
        <TouchableOpacity style={styles.button} onPress={() => openLink('https://www.instagram.com/qxmedic/reel/C6FIlOrx778/')}>
          <Image source={require('../assets/images/qx.jpeg')} style={styles.buttonImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => openLink('https://www.cmp.org.pe/wp-content/uploads/2020/07/ManualSemiologiaQuechua-2020.pdf')}>
          <Text style={styles.buttonText}>MANUAL SEMIOLOGIA QUECHUA - CMP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => openLink('https://drive.google.com/file/d/1InoqejdGk_qkbC_lMelUS0YQgY-QGvZ3/view?usp=sharing')}>
          <Text style={styles.buttonText}>MANUAL SEMIOLOGIA QUECHUA - SOCIMEP</Text>
        </TouchableOpacity>
      </ScrollView>
    );
};

export default ManSup;

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
    textAlign: 'center'
  },
  optionsContainer: {
    marginVertical: 10,
  },
  optionButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
  },
  optionText: {
    color: 'black',
    fontSize: 16,
  },
  buttonImage: {
    width: '100%',
    height: 50,   // Aumenté la altura de la imagen
    resizeMode: 'contain',
  },
});
