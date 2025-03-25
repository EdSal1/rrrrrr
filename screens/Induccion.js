import { StyleSheet, Text, View, TouchableOpacity, Modal, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Linking } from 'react-native'

const Induccion = () => {
  const [selectedDept, setSelectedDept] = useState(null);

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Error al abrir el enlace: ", err));
  };

  const departments = [
    { name: 'Arequipa', excelHotel: 'https://docs.google.com/spreadsheets/d/1jno25S8iH-3cxlok7XZ0B1TpBq7agfGQ/edit?gid=1864870167#gid=1864870167', excelComida: 'https://docs.google.com/spreadsheets/d/1jno25S8iH-3cxlok7XZ0B1TpBq7agfGQ/edit?gid=1370819809#gid=1370819809', excelTransporte: 'https://docs.google.com/spreadsheets/d/1jno25S8iH-3cxlok7XZ0B1TpBq7agfGQ/edit?gid=1030203438#gid=1030203438' , excelEvitar: 'https://docs.google.com/spreadsheets/d/1jno25S8iH-3cxlok7XZ0B1TpBq7agfGQ/edit?gid=250965397#gid=250965397' },
    { name: 'Apurimac', excelHotel: 'https://docs.google.com/spreadsheets/d/13MR-UBeBCUK5BWO-pkKmvC43-icW2sq6/edit?gid=1864870167#gid=1864870167', excelComida: 'https://docs.google.com/spreadsheets/d/13MR-UBeBCUK5BWO-pkKmvC43-icW2sq6/edit?gid=1370819809#gid=1370819809', excelTransporte: 'https://docs.google.com/spreadsheets/d/13MR-UBeBCUK5BWO-pkKmvC43-icW2sq6/edit?gid=1030203438#gid=1030203438' , excelEvitar: 'https://docs.google.com/spreadsheets/d/13MR-UBeBCUK5BWO-pkKmvC43-icW2sq6/edit?gid=250965397#gid=250965397' },
    { name: 'Ancash', excelHotel: 'https://docs.google.com/spreadsheets/d/1rIFgVc-ttBy9gkczo2g0zsWJxuFhhB7s/edit?gid=1864870167#gid=1864870167', excelComida: 'https://docs.google.com/spreadsheets/d/1rIFgVc-ttBy9gkczo2g0zsWJxuFhhB7s/edit?gid=1370819809#gid=1370819809', excelTransporte: 'https://docs.google.com/spreadsheets/d/1rIFgVc-ttBy9gkczo2g0zsWJxuFhhB7s/edit?gid=1030203438#gid=1030203438' , excelEvitar: 'https://docs.google.com/spreadsheets/d/1rIFgVc-ttBy9gkczo2g0zsWJxuFhhB7s/edit?gid=250965397#gid=250965397' },
    { name: 'Moquegua', excelHotel: 'https://docs.google.com/spreadsheets/d/1cvAeVFWg0G5YqYERkvmRmxICEBuHoQKX/edit?gid=1864870167#gid=1864870167', excelComida: 'https://docs.google.com/spreadsheets/d/1cvAeVFWg0G5YqYERkvmRmxICEBuHoQKX/edit?gid=1370819809#gid=1370819809', excelTransporte: 'https://docs.google.com/spreadsheets/d/1cvAeVFWg0G5YqYERkvmRmxICEBuHoQKX/edit?gid=1030203438#gid=1030203438' , excelEvitar: 'https://docs.google.com/spreadsheets/d/1cvAeVFWg0G5YqYERkvmRmxICEBuHoQKX/edit?gid=250965397#gid=250965397' },
    { name: 'Puno', excelHotel: 'https://docs.google.com/spreadsheets/d/1JB5Kn6xYHJ4RLGRp8dkKuwoae343sfNa/edit?gid=1864870167#gid=1864870167', excelComida: 'https://docs.google.com/spreadsheets/d/1JB5Kn6xYHJ4RLGRp8dkKuwoae343sfNa/edit?gid=1370819809#gid=1370819809', excelTransporte: 'https://docs.google.com/spreadsheets/d/1JB5Kn6xYHJ4RLGRp8dkKuwoae343sfNa/edit?gid=1030203438#gid=1030203438' , excelEvitar: 'https://docs.google.com/spreadsheets/d/1JB5Kn6xYHJ4RLGRp8dkKuwoae343sfNa/edit?gid=250965397#gid=250965397' },
    { name: 'Piura', excelHotel: 'https://docs.google.com/spreadsheets/d/1dugLnJ1ybMqO4dPTslttRw5TiYuavY0w/edit?gid=1864870167#gid=1864870167', excelComida: 'https://docs.google.com/spreadsheets/d/1dugLnJ1ybMqO4dPTslttRw5TiYuavY0w/edit?gid=1370819809#gid=1370819809', excelTransporte: 'https://docs.google.com/spreadsheets/d/1dugLnJ1ybMqO4dPTslttRw5TiYuavY0w/edit?gid=1030203438#gid=1030203438' , excelEvitar: 'https://docs.google.com/spreadsheets/d/1dugLnJ1ybMqO4dPTslttRw5TiYuavY0w/edit?gid=250965397#gid=250965397' },
    { name: 'Tumbes', excelHotel: 'https://docs.google.com/spreadsheets/d/1l5wd8bWj0T3fgnEZmWp0Nj85i6czQTnM/edit?gid=1864870167#gid=1864870167', excelComida: 'https://docs.google.com/spreadsheets/d/1l5wd8bWj0T3fgnEZmWp0Nj85i6czQTnM/edit?gid=1370819809#gid=1370819809', excelTransporte: 'https://docs.google.com/spreadsheets/d/1l5wd8bWj0T3fgnEZmWp0Nj85i6czQTnM/edit?gid=1030203438#gid=1030203438' , excelEvitar: 'https://docs.google.com/spreadsheets/d/1l5wd8bWj0T3fgnEZmWp0Nj85i6czQTnM/edit?gid=250965397#gid=250965397' },



    
    
    // Agrega más departamentos aquí
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.description}>
        Para el año 2024 se presentaban las inducciones de forma virtual y presencial, tal vez esto cambie para cuando estes leyendo esto, pero cuando uno acudia a su induccion presencial surgian algunos incovenientes, como donde quedarse o donde comer. 
        Así que frente a esto se opta por crear un espacio donde podamos compartir aquellos hoteles y/o restaurantes que uno puede acudir durante su inducción/capacitacion o cuando vaya a su red a dejar papeles. [Varias regiones no pudieron llegar a completarse, por no tener conocidos en dichas regiones], ademas la informacion a continuacion es solo un referente debido a que cada ciudad tiene sus propias caracteristicas y es imposible conocerlo todo, pero al menos darte una idea, y recuerda evitar zonas que puedan ser peligrosas para la integridad de uno.
      </Text>

      {/* Mapa interactivo */}
      <View style={styles.mapContainer}>
        {departments.map((dept, index) => (
          <TouchableOpacity
            key={index}
            style={styles.departmentButton}
            onPress={() => setSelectedDept(dept)}
          >
            <Text style={styles.departmentText}>{dept.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal para mostrar opciones de hotel y comida */}
      {selectedDept && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={!!selectedDept}
          onRequestClose={() => setSelectedDept(null)}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Opciones en {selectedDept.name}</Text>
            <View style={styles.optionContainer}>
              <TouchableOpacity onPress={() => openLink(selectedDept.excelHotel)}>
                <Image source={require('../assets/images/hotel.png')} style={styles.icon} />
                <Text style={styles.optionText}>Hoteles</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openLink(selectedDept.excelComida)}>
                <Image source={require('../assets/images/comida.jpg')} style={styles.icon} />
                <Text style={styles.optionText}>Comida</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openLink(selectedDept.excelTransporte)}>
                <Image source={require('../assets/images/transporte.jpg')} style={styles.icon} />
                <Text style={styles.optionText}>Transporte</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openLink(selectedDept.excelEvitar)}>
                <Image source={require('../assets/images/evitar.jpg')} style={styles.icon} />
                <Text style={styles.optionText}>Zonas a evitar</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setSelectedDept(null)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
    </ScrollView>
  );
}

export default Induccion

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  description: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30,
    color: '#333',
  },
  mapContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  departmentButton: {
    backgroundColor: '#014ba0',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  departmentText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalTitle: {
    fontSize: 22,
    color: 'white',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  icon: {
    width: 50,
    height: 50,
  },
  optionText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ff4d4d',
    borderRadius: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
