import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';

export default function Sello() {
  const [scale, setScale] = useState(1);

  const onZoomEvent = (event) => {
    setScale(event.nativeEvent.scale);
  };

  const onZoomStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      setScale(Math.max(1, event.nativeEvent.scale)); // No permitir un zoom menor a 1
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.paragraph}>
        El tema del sello puede parecer algo simple, pero tiene sus detalles, te pasamos algunos tips sobre estos,{' '}
        <Text style={styles.bold}>
          averigua si este usara o tendra el nombre de tu red, microred, establecimiento o bastara simplemente con tu nombre, profesion y colegiatura
        </Text>
      </Text>

      <Text style={styles.paragraph}>
        Otro punto importante es tambien el tema del logo, por ejemplo para medicos en Peru pueden usar la vara de esculapio o el simbolo del cuchillo ceremonial que forma parte del simbolo del colegio medico, pero se recomienda evitar el uso de la vara de Hermes o caduceo, porque este es un simbolo con fines economicos, ademas{' '}
        <Text style={styles.bold}>algunos recomiendan EVITAR otros simbolos</Text> como es el caso animes o dibujos como el caso de pikachu, un micky mouse, Goku u otro.
      </Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Verifica siempre</Text> el numero de tu colegiatura antes de recoger tu sello, y los tips previos, para que evites hacer gastos innecesarios y sobreacumules sellos por algun error, se recomienda tener dos sellos, por si alguno presenta un problema en el transcurso de tu servicio
      </Text>

      <Text style={styles.paragraph}>
        Este es un ejemplo/recomendacion para profesionales medicos, para otras profesiones igualmente, consulta con tu serumista anterior que adjudico, que te de algunos tips a algo que parece sencillo, pero que tambien tiene sus detalles
      </Text>

      <PinchGestureHandler
        onGestureEvent={onZoomEvent}
        onHandlerStateChange={onZoomStateChange}
      >
        <Image
          source={require('../assets/images/sello.jpeg')}
          style={[styles.image, { transform: [{ scale }] }]}
          resizeMode="contain"
        />
      </PinchGestureHandler>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
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
  image: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
});
