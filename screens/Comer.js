import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const Comer = () => {
  const platos = [
    "Sopa de verduras",
    "Arroz con lentejas",
    "Ensalada de quinua",
    "Guiso de papas",
    "Tortilla de espinacas",
    "Avena con frutas",
    "Sopa de quinua",
    "Arroz con pollo",
    "Ensalada de garbanzos",
    "Guiso de zapallo",
    "Tortilla de papas",
    "Avena con miel",
    "Sopa de fideos",
    "Arroz con atún",
    "Ensalada de lentejas",
    "Guiso de habas",
    "Tortilla de zanahoria",
    "Avena con plátano",
    "Sopa de arroz",
    "Arroz con verduras",
    "Ensalada de arroz",
    "Guiso de arvejas",
    "Tortilla de cebolla",
    "Avena con canela",
    "Sopa de maíz",
    "Arroz con huevo",
    "Ensalada de maíz",
    "Guiso de lentejas",
    "Tortilla de maíz",
    "Avena con pasas",
    "Sopa de trigo",
    "Arroz con frijoles",
    "Ensalada de trigo",
    "Guiso de quinua",
    "Tortilla de frijoles",
    "Avena con manzana",
    "Tortilla de arroz",
    "Avena con coco",
    "Sopa de lentejas",
    "Arroz con calabaza",
    "Estofado",
    "Lomo saltado",
    "Torrejas de atún",
  ];

  // Ordenar los platos alfabéticamente
  const platosOrdenados = platos.sort();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={styles.introText}>
        A continuación se te deja una lista de platos que puedes preparar por si te quedas sin ideas. NO se encontró un canal dirigido a la preparación de alimentos dentro del servicio rural. Tú puedes ser el próximo creador de contenido si te gusta compartir tus conocimientos culinarios, y deseas que perduren y no queden en el olvido. Nos puedes contactar para que tu contenido sea agregado en alguna futura actualización de la aplicación/web:
      </Text>
      
        {platosOrdenados.map((plato, index) => (
          <Text key={index} style={styles.platoText}>
            {index + 1}. {plato}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default Comer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'azure',
  },
  introText: {
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  scrollView: {
    marginTop: 8,
  },
  platoText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
});
