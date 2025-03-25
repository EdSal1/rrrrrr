import { StyleSheet, Text, View, Button, Linking, ScrollView } from 'react-native';
import React from 'react';

export default function AnosPrevios() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.paragraph}>
          A continuación se te muestra las plazas ofertadas en procesos pasados, para que te des una idea de qué plazas se encuentran por región, si aquella plaza que deseas se repite de forma anual o tiene algún cambio, así como algo que tú consideres conveniente, recuerda que puedes hacer la busqueda desde tu PC para mayor comodidad al momento de descargar los archivos.
        </Text>

        <View style={styles.row}>
          <View style={styles.buttonContainer}>
            <Button
              title="2024-1 Remunerada y equivalente"
              color="#572494"
              onPress={() => Linking.openURL('https://www.gob.pe/institucion/minsa/informes-publicaciones/5284567-oferta-de-plazas-serums-remuneradas-y-equivalentes')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="2024-2 Remunerada y equivalente"
              color="#572494"
              onPress={() => Linking.openURL('https://www.gob.pe/institucion/minsa/informes-publicaciones/5970113-oferta-de-plazas-serums-remuneradas-y-equivalentes')}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.buttonContainer}>
            <Button
              title="2023-1 Remunerada y equivalente"
              color="#572494"
              onPress={() => Linking.openURL('https://www.gob.pe/institucion/minsa/informes-publicaciones/4121301-oferta-de-plazas-remuneradas-y-equivalentes-serums-2023-i')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="2023-2 Remunerada y equivalente"
              color="#572494"
              onPress={() => Linking.openURL('https://www.gob.pe/institucion/minsa/informes-publicaciones/4487457-oferta-de-plazas-remuneradas-y-equivalentes-serums-2023-ii')}
            />
          </View>
        </View>
        
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
});
