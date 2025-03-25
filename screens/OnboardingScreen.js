// OnboardingScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = ({ navigation }) => {
  const acceptTerms = async () => {
    await AsyncStorage.setItem('hasAcceptedTerms', 'true');
    navigation.replace('Home'); // Redirige a la pantalla principal
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Términos y Condiciones</Text>
        <Text style={styles.content}>
          {/* Agrega aquí tus términos y condiciones */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam...
        </Text>
      </ScrollView>
      <Button title="Aceptar" onPress={acceptTerms} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default OnboardingScreen;
