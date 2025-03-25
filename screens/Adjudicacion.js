import { StyleSheet, Text, View, Button, Linking, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Adjudicacion() {
  const buttons = [
    { title: 'Medicina 2024-1', url: 'https://www.youtube.com/live/2_bMPz4YJCc?si=SRubUR1aliiMdPGK&t=2207' },
    { title: 'Enfermería 2024-1', url: 'https://www.youtube.com/watch?v=DopL3gWixIE' },
    { title: 'Obstetricia 2024-1', url: 'https://www.youtube.com/watch?v=IhpkbUNBmlA' },
    { title: 'Odontología 🦷 2024-1', url: 'https://www.youtube.com/watch?v=IrHMJXSJvqA' },
    { title: 'Psicología 2023-2', url: 'https://www.youtube.com/watch?v=8Ew8oawkmxA' },
    { title: 'Nutrición 2024-1', url: 'https://www.youtube.com/watch?v=PDPYGKB-yCc' },
    { title: 'Biología 2024-1', url: 'https://www.youtube.com/watch?v=wTrLYHrqZ7E' },
    { title: 'Medicina Veterinaria 2024-1', url: 'https://www.youtube.com/watch?v=B32Cs96e210' },
    { title: 'Tecnología Médica: Radiología 2024-1', url: 'https://www.youtube.com/watch?v=Qb4AcfZWKic' },
    { title: 'Tecnología Médica: Terapia Lenguaje 2024-1', url: 'https://www.youtube.com/watch?v=6ibRGDc8rkE' },
    { title: 'Ingeniería Sanitaria 2024-1', url: 'https://www.youtube.com/watch?v=EKCdEB5tTSU' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.paragraph}>
        Para este dia ya debes tener impreso tu lista de plazas posibles que puedas adjudicar, <Text style={styles.bold}>se recomienda tener información de una cantidad (o número) de plazas, equivalente al número de orden alcanzado en la lista final</Text> , pero tambien hay casos de personas que tuvieron una lista menor y pudieron adjudicar a una plaza que querian, son muchos factores los que influyen, lee muy bien las indicaciones que son publicadas sobre el numero de plazas por establecimientos, asi como si existe alguna restriccion.

        </Text>
        <Text style={styles.paragraph}>
        Muchos postulantes quieren <Text style={styles.bold}>Plazas ESSALUD</Text> pero estas suelen ser las primeras en adjudicarse de sus grados de dificultad.
        </Text>

        <Text style={styles.paragraph}>
        Desde 2024-II se implemento el examen MINSA, tenlo en cuenta, porque esto juega un rol importante al final.
        </Text>

        <Text style={styles.paragraph}>
        Es altamente recomendable que <Text style={styles.bold}>sepas "controlar los nervios"</Text> hasta el momento en que te llamen.
        </Text>

        <Text style={styles.paragraph}>
         Y debes ver videos de adjudicaciones pasadas, para ver que cosas no debes hacer o que debes evitar, y te sientas mas en confianza para tu dia D.
        </Text>

        <Text style={styles.paragraph}>
          Se te deja ejemplos de diferentes profesiones, para que veas como es este proceso y te vayas preparando 🐯.
        </Text>

        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.buttonContainer}
            onPress={() => Linking.openURL(button.url)}
          >
            <Text style={styles.buttonText}>{button.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 15,
    lineHeight: 25,
  },
  buttonContainer: {
    backgroundColor: '#FF0000',
    paddingVertical: 14, // Asegura un alto de al menos 48dp
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    width: '90%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});
