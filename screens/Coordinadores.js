import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

const Coordinadores = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          En cada proceso SERUMS existe un coordinador por cada región del país. En este caso, <Text style={styles.bold}>NO</Text> podemos brindarte el número y su nombre de cada uno de ellos, pero sí el TIP, el cual consiste en que en cada fase se forman grupos de WhatsApp por regiones que suelen ser compartidos en los grupos de Facebook. Ahí habrá un delegado o una persona que pudo obtener información de cada región, y consiguiendo aquellos datos puedes contactarte con ellos.
        </Text>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default Coordinadores;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'azure',
  },
  content: {
    padding: 16,
  },
  text: {
    fontSize: 18,
    lineHeight: 28,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
});
