import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Recomendaciones = () => {
  const [showSocials, setShowSocials] = useState(false);

  const handleIconPress = () => {
    setShowSocials(!showSocials);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recomendaciones</Text>

      {/* Icono del creador de contenido */}
      <TouchableOpacity onPress={handleIconPress}>
        <Image
          source={{ uri: 'https://example.com/creator-logo.png' }} // URL del icono del creador
          style={styles.creatorIcon}
        />
      </TouchableOpacity>

      {/* Opciones de redes sociales */}
      {showSocials && (
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={30} color="#3b5998" />
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="tiktok" size={30} color="#000000" />
            <Text style={styles.socialText}>TikTok</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="instagram" size={30} color="#C13584" />
            <Text style={styles.socialText}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="twitter" size={30} color="#1DA1F2" />
            <Text style={styles.socialText}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="youtube" size={30} color="#FF0000" />
            <Text style={styles.socialText}>YouTube</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Recomendaciones;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  creatorIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  socialButton: {
    alignItems: 'center',
  },
  socialText: {
    fontSize: 12,
    marginTop: 5,
  },
});
