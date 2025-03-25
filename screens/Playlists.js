import React from 'react';
import { StyleSheet, Text, ScrollView, Linking, TouchableOpacity, View } from 'react-native';

const enlaces = [
  { id: 1, text: 'Mañanas de Guardia', url: 'https://open.spotify.com/playlist/6G54HTmb2omiWuXlLcTWRA' },
  { id: 2, text: 'Caminatas a la Comunidad', url: 'https://open.spotify.com/playlist/6oSdKfWBNN2vRBk0veKIM6' },
  { id: 3, text: 'Relajación Post-Guardia', url: 'https://open.spotify.com/playlist/2iB28njqkMIHpyLJGrUuiR' },
  { id: 4, text: 'Fuerza para el Traslado', url: 'https://open.spotify.com/playlist/4w0mdHzMvi5OSaOpSELXQm' },
  { id: 5, text: 'Motivación para el papeleo', url: 'https://open.spotify.com/playlist/1RxHIbhQvEP6wmLImcGhuA' },
  { id: 6, text: 'Cocinando en el SERUMS', url: 'https://open.spotify.com/playlist/4GR2r0sMFaW1QiBeSxRG4e?si=61AQF3p3TNmPURSKRlGJeQ&nd=1&dlsi=8264abd6a6f643cd' },
  { id: 7, text: 'Lavando en el SERUMS', url: 'https://open.spotify.com/playlist/2w6RgRAs4qaEgkEm04aOxH?si=BnboFKXXRHuoHL4UsnBkRA&nd=1&dlsi=7f407595711549ed' },
  { id: 8, text: 'Cierre de MES', url: 'https://open.spotify.com/playlist/3tsUx3RlB8Arp9GZwXdEqS' },
  { id: 9, text: 'Noches de Cepillado', url: 'https://open.spotify.com/playlist/2u9FZNCIUvbt4y6BPz68wG?si=IVmPWJ8vRLWuk1weNdzBIA&nd=1&dlsi=0a83a699f6b14847' },
  { id: 10, text: 'Dias de Feria', url: 'https://open.spotify.com/playlist/3425mb8MDYYxApwNefgNLj?si=gw0gHlQJQXOGSbhJBfhwNg&nd=1&dlsi=aab53fdc693d4d0d' },
  { id: 11, text: 'Cumbias en el serums', url: 'https://open.spotify.com/playlist/1p1ZHbirtFQxaPatT9mCrF' },
  { id: 12, text: 'Animacion infantil en el SERUMS', url: 'https://open.spotify.com/playlist/13WDU1jTrkSmIaBarIu78j?si=KQsm1_lQTaOQe411Y6m4cQ' },
  { id: 13, text: 'Animacion geriatrica en el SERUMS', url: 'https://open.spotify.com/playlist/1gFelESO67OxZ7R7DVjWTm?si=ZIYQE_KlQR-rBYPZVXQiEg' },
];

const Playlists = () => {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.scrollView}>
      <Text style={styles.initialText}>
        La música forma parte de nuestro quehacer diario. Hemos creado estas playlists para distintas situaciones.
      </Text>

      {enlaces.map((enlace) => (
        <View key={enlace.id} style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress(enlace.url)}>
            <Text style={styles.buttonText}>{enlace.id}. {enlace.text}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#191414', // Fondo oscuro en todo el ScrollView
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20, // Agrega padding en los lados
  },
  initialText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1db954',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Playlists;
