import React from 'react';
import { StyleSheet, Text, ScrollView, Linking, TouchableOpacity, View } from 'react-native';

const enlaces = [
    { 
    id: 1, 
    text: 'GUIA PARA REGISTRAR EL INFORME SERUMS 2018', 
    url: 'https://cdn.www.gob.pe/uploads/document/file/521026/guia-desde-el-proceso-2018-2.pdf',
    },
    
  ];

const Odoo = () => {  
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Texto inicial antes de los botones */}
      <Text style={styles.initialText}>
        Para el 2024 la plataforma usada para el llenado de actividades correspondientes para la entrega del informe final correspondia a Odoo, puede que esto cambie, pero se te deja un ejemplo, consulta con tus colegas, microred y red acerca de como sera el llenado de este, si lo llenaras de forma mensual, o al final de tu servicio para tu informe final. <Text style={{ color: '#66c00b' }}>
        PUEDES BUSCAR VIDEOS EN YOUTUBE O TIKTOK BAJO LOS TERMINOS: INFORME FINAL SERUMS, REPORTE DE INFORME SERUMS Y ENCONTRARAS EJEMPLOS DE COMO SE LLENAN EN DICHA PLATAFORMA
  </Text>
      </Text>

      {enlaces.map((enlace) => (
        <View key={enlace.id} style={styles.buttonContainer}>
          {/* Botón principal */}
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => handlePress(enlace.url)}
          >
            <Text style={styles.buttonText}>{enlace.id}. {enlace.text}</Text>
          </TouchableOpacity>

          {/* Subitems (si existen) */}
          {enlace.subitems && enlace.subitems.map((subitem) => (
            <TouchableOpacity 
              key={subitem.id} 
              style={styles.subButton} 
              onPress={() => handlePress(subitem.url)}
            >
              <Text style={styles.subButtonText}>{subitem.id}. {subitem.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  initialText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subButton: {
    backgroundColor: '#6C757D',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 20,
  },
  subButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Odoo;
