import { StyleSheet, Text, View, Button, Linking, ScrollView } from 'react-native'
import React from 'react'

export default function Pagacho() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Esta ventana <Text style={styles.bold}>PUEDE PARECER RARA</Text> por distintos motivos, pero tal vez te pase a ti o escuches de algún colega que haga comentarios que pasaron ciertos eventos cuando <Text style={styles.bold}>NO</Text> hizo un 'Pagacho' cuando subió a su establecimiento.
      </Text>

      <Text style={styles.paragraph}>
        Dentro de algunas comunidades o zonas de nuestro querido <Text style={styles.bold}>PERU</Text>, existen cosas o fenómenos a los que no podemos darle alguna explicación lógica, pero sabemos que pasan y/o existen.
      </Text>

      <Text style={styles.paragraph}>
        Es por ello que la opción de realizar un pagacho debe ser al menos tenida en cuenta, si te diriges a zonas donde sea necesaria esta actividad.
      </Text>

      <Text style={styles.paragraph}>
        Al final la decisión de realizar esta actividad será bajo tu criterio, tipo de cosmovisión que tengas presente u otro factor. Asimismo, la actividad puede variar de región en región si es que deseas aplicarlo. Sería bueno tal vez consultar con algún poblador de la zona de tu confianza.
      </Text>

      <Text style={styles.paragraph}>
        Se te deja un ejemplo, por si alguna vez lo realizas o te animas a hacerlo:
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Ver en YouTube"
          color="#FF0000"
          onPress={() => Linking.openURL('https://youtu.be/Gxlvb4BNJwY?si=2yt0n_wCBAyPQ_eB')}
        />
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'azure',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 15,
    lineHeight: 25,
  },
  bold: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  }
})
