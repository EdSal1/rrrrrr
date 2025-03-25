import { StyleSheet, Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native';
import React from 'react';

export default function Adjudicacion() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.paragraph}>
          Las FUAS mostradas a continuación fueron una adaptación de los modelos entregados en determinada región. Es necesario consultar en tu red a la UNIDAD DE SEGUROS si ellos tienen un ejemplo estandarizado para el uso dentro de su región y si lo pueden enviar por el grupo de WhatsApp respectivo para el uso de los nuevos serumistas.
        </Text>

        <Text style={styles.paragraph}>
          La información presentada/adaptada en esta aplicacion/web puede presentar ligeros cambios en el transcurso del tiempo, así como nuevas implementaciones u otros. Para el uso de estas 
          <Text style={styles.bold}> se debe tener presente el uso de reglas y consistencias, al menos conceptos básicos</Text> sobre esto para disminuir los errores y correcciones de FUAS.
        </Text>

        <Text style={styles.paragraph}>
          Cada región presenta diferentes formas de impresión respecto a sus FUAs. Habrá algunas donde harás el llenado de más puntos comparado con otras regiones, como el código o nombre de tu establecimiento porque no está impreso en las FUAs que te otorgaron. Cuando arribes a tu establecimiento, dale una vista a los formatos que tienes para que veas qué llenarás en tu servicio.
        </Text>

        <Text style={styles.paragraph}>
          <Text style={styles.bold}> 
            Revisa las copias de las FUAs de atenciones recientes en las Historias Clínicas. Estas te servirán de guía mientras te familiarizas y te adaptas a su llenado. Con el tiempo, este proceso se volverá más intuitivo, y sabrás de memoria qué campos completar y cómo hacerlo.
          </Text>
        </Text>

        <Text style={styles.paragraph}>
          En algunos lugares empezaron con la digitalización de FUAs, pero esto será de forma progresiva. Recuerda que no todos los establecimientos cuentan con los mismos recursos y acceso a internet. ¡Pero es un comienzo!
        </Text>

        <Text style={styles.paragraph}>
          Se te deja el siguiente botón para acceder a las reglas y consistencias. Deberás dirigirte a la ventana de <Text style={styles.bold}>PROCESOS DE CONTROL</Text>, donde encontrarás la última versión.
        </Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => Linking.openURL('https://www.sis.gob.pe/ipresspublicas/miradorgrep.html')}
        >
          <Text style={styles.buttonText}>Reglas de consistencia y validación</Text>
        </TouchableOpacity>
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
    textAlign: 'left',
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FF0000',
    paddingVertical: 14, // Altura mínima de 48dp
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 200, // Botón más ancho para mejor accesibilidad
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
