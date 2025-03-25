import { View, Text, StyleSheet, ScrollView } from 'react-native';  
import React from 'react';

const Privacidad = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>POLITICAS DE PRIVACIDAD</Text>
        <Text style={styles.paragraph}>
        La presente Política de Privacidad establece los términos sobre cómo RURAPP usa y protege la información proporcionada por sus usuarios al utilizar la aplicación. Estamos comprometidos con la seguridad de los datos de nuestros usuarios. Cuando solicitamos información personal que permita su identificación, lo hacemos garantizando que será utilizada únicamente conforme a los términos de este documento.

        Esta Política de Privacidad puede ser actualizada o modificada en el tiempo, por lo que recomendamos revisar periódicamente esta sección para asegurarse de estar de acuerdo con los cambios. {'\n\n'}
        </Text>
        <Text style={styles.paragraph}>
        Información que es recogida
        {'\n\n'}

        RURAPP podrá recopilar información personal, como nombre, datos de contacto, dirección de correo electrónico e información demográfica. Asimismo, en caso necesario, se podrá solicitar información específica para procesar solicitudes, brindar acceso a ciertos servicios o realizar verificacion de cobros, SOLO en aquellos que lo soliciten.
        </Text>
        <Text style={styles.paragraph}>

        Uso de la información recogida
        {'\n\n'}

        RURAPP emplea la información recopilada para brindar el mejor servicio posible de aquellos que soliciten algun servicio, mantener un registro de usuarios por el tiempo correspondiente. En algunos casos, se podrá comunicar sobre actualizaciones, mejoras en la plataforma o contenido de interés. Estos mensajes serán enviados a la dirección de correo electrónico proporcionada y podrán ser cancelados en cualquier momento.

        RURAPP está comprometida con la seguridad de su información. Implementamos sistemas de protección  para prevenir accesos no autorizados.
         {'\n\n'}
        </Text>
        <Text style={styles.paragraph}>

        Enlaces a Terceros 
        {'\n\n'}

        RURAPP puede contener enlaces a sitios externos que puedan ser de interés para el usuario. Sin embargo, una vez que haga clic en estos enlaces y salga de la aplicación/web, RURAPP no tiene control sobre el sitio al que es redirigido. Por lo tanto, no nos hacemos responsables de sus políticas de privacidad ni de la protección de sus datos en dichos sitios de terceros.  

        Cada plataforma externa tiene sus propias políticas de privacidad, por lo que recomendamos revisarlas para asegurarse de estar de acuerdo con sus términos.      
        
        </Text>
        <Text style={styles.paragraph}>
        Control de su información personal
        {'\n\n'}

        En cualquier momento, usted puede limitar la recopilación o el uso de la información personal proporcionada a RURAPP si en caso solicito algun servicio o lleno un formulario propio. 

        RURAPP no venderá, cederá ni distribuirá su información personal sin su consentimiento, salvo que sea requerido por una orden judicial.

        Nos reservamos el derecho de modificar los términos de esta Política de Privacidad en cualquier momento, por lo que recomendamos revisarla periódicamente.
        {'\n\n'}
        </Text>
       
        
       
      </View>
    </ScrollView>
  );
};

export default Privacidad;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    padding: 16,
    backgroundColor: 'azure',
    flex:1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center', // Centrado del encabezado
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 16,
    color: '#333',
  },
});
