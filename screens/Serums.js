import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity, Linking } from 'react-native';

const Serums = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState(''); // Estado para el buscador

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Error al abrir el enlace: ", err));
  };

  // Opciones de todas las ventanas enlazadas
  const todasLasOpciones = [
    { id: 1, text: 'Lecturas OBLIGATORIAS', screen: 'Lecturas' },
    { id: 2, text: 'Personalizando mi telefono', screen: 'Telefono' },
    { id: 3, text: 'Enfermedades Comunes', screen: 'Enfermedades' },
    { id: 4, text: 'Enfermedades Por Region', screen: 'EnfermedadesRegion' },
    { id: 5, text: 'Emergencias Rurales', screen: 'EmgRurales' },
    { id: 6, text: 'HIS', screen: 'His' },
    { id: 7, text: 'FUAS', screen: 'Fuas' },
    { id: 8, text: 'Anemia', screen: 'Anemia' },
    { id: 9, text: 'RP', url: 'https://drive.google.com/file/d/1RNJVNljov3qEo4cPF_4u2kD3lioQmhbi/view?usp=sharing' },
    { id: 10, text: 'Cursos en SERUMS', screen: 'CursosSerums' },
    { id: 11, text: 'Preparacion para el Residentado Medico', screen: 'Residentado' },
    { id: 12, text: 'Investigando en el SERUMS', screen: 'Investigando' },
    { id: 13, text: 'SERUMS odoo', screen: 'Odoo' },
    { id: 14, text: 'Defuncion', screen: 'Defuncion' },
    { id: 15, text: 'Constancia de Atención', url: 'https://docs.google.com/document/d/1qtuoK4avyDQ-RUrqw1sd9nxMKOk2ilKu/edit?usp=sharing&ouid=118322180150392856376&rtpof=true&sd=true' },
    { id: 16, text: 'Descanso Médico', url: 'https://docs.google.com/document/d/1G7MYA__nvDcnO2jVWQBn4wWTc1QduqMK/edit?usp=sharing&ouid=118322180150392856376&rtpof=true&sd=true' },
    { id: 17, text: 'Auditoría', screen: 'Auditoria' },
    { id: 18, text: 'Fichas Epidemiologicas', url: 'https://diredsaa.gob.pe/fichas-epidemiologicas/' },
    { id: 19, text: 'Canales recomendados', screen: 'Recomendados' },
    { id: 20, text: 'Que comer', screen: 'Comer' },
    { id: 21, text: 'Numero de Apoyo', screen: 'Apoyo' },
    { id: 22, text: 'Playlists', screen: 'Playlists' },
    { id: 23, text: 'Fin de SERUMS', screen: 'Fin' },
  ];

  // Filtrar opciones según el término de búsqueda
  const filteredOptions = todasLasOpciones.filter((opcion) =>
    opcion.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Buscador */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Mostrar opciones filtradas */}
        {filteredOptions.map((opcion) => (
          <TouchableOpacity
            key={opcion.id}
            style={styles.button}
            onPress={() =>
              opcion.url ? openLink(opcion.url) : navigation.navigate(opcion.screen)
            }
          >
            <Text style={styles.buttonText}>{opcion.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Serums;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#caacd7',
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 50,
    borderColor: '#351c4d',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    alignItems: 'center',
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
  },
});
