import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView, TouchableOpacity, Modal, Linking } from 'react-native';

const altitudCorreccion = {
  1: 0, 500: 0.4, 1000: 0.8, 1500: 1.1, 2000: 1.4,
  2500: 1.8, 3000: 2.1, 3500: 2.5, 4000: 2.9, 4500: 3.3, 5000: 4.0
};

const obtenerCorreccion = (altitud) => {
  let keys = Object.keys(altitudCorreccion).map(Number).sort((a, b) => a - b);
  for (let i = keys.length - 1; i >= 0; i--) {
    if (altitud >= keys[i]) {
      return altitudCorreccion[keys[i]];
    }
  }
  return 0;
};

const Anemia = () => {
  const [hemoglobina, setHemoglobina] = useState('');
  const [altitud, setAltitud] = useState('');
  const [resultado, setResultado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');

  const calcular = () => {
    const valorHb = parseFloat(hemoglobina);
    const valorAlt = parseInt(altitud);
    if (isNaN(valorHb) || isNaN(valorAlt)) {
      Alert.alert('Error', 'Ingrese valores numéricos válidos.');
      return;
    }
    const correccion = obtenerCorreccion(valorAlt);
    setResultado(valorHb - correccion);
  };

  const mostrarModal = (url) => {
    setSelectedUrl(url);
    setModalVisible(true);
  };

  const abrirEnlace = () => {
    setModalVisible(false);
    Linking.openURL(selectedUrl);
  };

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Hemoglobina Observada (g/dl):</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          value={hemoglobina}
          onChangeText={setHemoglobina}
        />
        
        <Text style={styles.label}>Altitud de lugar de procedencia (msnm):</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          value={altitud}
          onChangeText={setAltitud}
        />
        
        <TouchableOpacity style={styles.button} onPress={calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        {resultado !== null && <Text style={styles.resultado}>Resultado: {resultado.toFixed(2)}</Text>}
        
        <Text style={styles.fuente}>Para valores de anemia, puntos de corte, grupo poblacional revisar la Tabla N13 de RM-251, para suplementación, tratamiento y mas leer los siguientes documentos:</Text>
        <TouchableOpacity style={styles.button} onPress={() => mostrarModal('https://www.gob.pe/institucion/minsa/normas-legales/5670414-429-2024-minsa')}>
          <Text style={styles.buttonText}>RM 429-2024-MINSA </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => mostrarModal('https://www.gob.pe/institucion/minsa/normas-legales/5440166-251-2024-minsa')}>
          <Text style={styles.buttonText}>RM 251-2024-MINSA</Text>
        </TouchableOpacity>

        <Text style={styles.fuente}>Recuerda revisar los documentos oficiales y actualizados, la presente ventana es solo una adaptacion y puede que la informacion quede desactualizada proximamente

{'\n\n'}
Fuentes: 
{'\n\n'}
Resolución Ministerial N.° 251-2024-MINSA - 10 de abril de 2024
{'\n\n'}
Resolución Ministerial N.° 429-2024-MINSA -19 de junio de 2024
</Text>
      </ScrollView>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>¿Desea abrir este enlace?</Text>
            <Text style={styles.modalUrl}>{selectedUrl}</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={abrirEnlace}>
                <Text style={styles.buttonText}>Aceptar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Anemia;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffcccc'
  },
  container: {
    padding: 20,
    alignItems: 'center'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    padding: 15,
    width: '80%',
    marginVertical: 5,
    borderRadius: 5
  },
  button: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: '#d9534f',
    borderRadius: 10,
    alignItems: 'center',
    width: '80%'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'blue'
  },
  fuente: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center'
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  modalUrl: {
    fontSize: 14,
    color: 'blue',
    marginVertical: 10
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  modalButton: {
    padding: 10,
    backgroundColor: '#d9534f',
    borderRadius: 5,
    marginHorizontal: 10
  }
});
