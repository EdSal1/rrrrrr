import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

const Cafe = () => {
  const [yapeUri, setYapeUri] = useState(null);
  const [plinUri, setPlinUri] = useState(null);

  useEffect(() => {
    // Cargar las imágenes locales y obtener sus URIs
    const loadAssets = async () => {
      const yapeAsset = Asset.fromModule(require('../assets/images/yape.jpeg'));
      const plinAsset = Asset.fromModule(require('../assets/images/plin.jpeg'));

      await yapeAsset.downloadAsync();
      await plinAsset.downloadAsync();

      setYapeUri(yapeAsset.localUri);
      setPlinUri(plinAsset.localUri);
    };

    loadAssets();
  }, []);

  const downloadImage = async (imageUri, fileName) => {
    // Copiar la imagen local al directorio de documentos
    const downloadDest = FileSystem.documentDirectory + fileName;  // Ruta donde guardar la imagen

    try {
      // Copiar la imagen local a la ubicación de destino
      await FileSystem.copyAsync({
        from: imageUri,
        to: downloadDest,
      });
      console.log('Imagen copiada a:', downloadDest);
    } catch (error) {
      console.error('Error al copiar la imagen:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Text>
        Esta es una aplicación/web gratuita para su uso y descarga, solo existen algunos servicios que son de paga y opcionales. SI en algún momento te ayudó o guió de forma excepcional, no dudes en apoyar con una pequeña donación que ayudará también para mantenimiento y actualizaciones futuras. Puedes invitarme un café de 1 lukita o lo que dicte tu corazon y bolsillo mediante Yape o Plin. Se te muestran ambos QRs para que tomes captura de pantalla y puedas subir la foto del QR en dichas Aplicaciones por si te animas a invitarme un Café :D [E. Salvador]
        
      </Text>
      
      {yapeUri && (
        <TouchableOpacity onPress={() => downloadImage(yapeUri, 'yape.jpeg')}>
          <Image
            source={{ uri: yapeUri }}
            style={styles.image}
          />
        </TouchableOpacity>
      )}

      {plinUri && (
        <TouchableOpacity onPress={() => downloadImage(plinUri, 'plin.jpeg')}>
          <Image
            source={{ uri: plinUri }}
            style={styles.image}
          />
        </TouchableOpacity>
      )}
    </View>
    </ScrollView>
  );
};

export default Cafe;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'azure',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 16,
  },
});
