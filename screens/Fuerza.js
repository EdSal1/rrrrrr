import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.paragraph}>
          La soledad puede ser un desafío, pero recuerda que este es el momento donde encuentras tu verdadera fortaleza. Cada día que pasa, estás más cerca de cumplir tus metas.
        </Text>
        <Text style={styles.paragraph}>
          La carga laboral puede parecer abrumadora, pero cada esfuerzo cuenta y transforma vidas. Eres parte de algo grande, y eso nunca será olvidado.
        </Text>
        <Text style={styles.paragraph}>
          Enfrentar retos en zonas alejadas no es fácil, pero aquí es donde los grandes profesionales se forjan. Estás marcando la diferencia, incluso cuando nadie más lo ve.
        </Text>
        <Text style={styles.paragraph}>
          La distancia de tus seres queridos es difícil, pero cada sacrificio que haces hoy está construyendo un futuro lleno de oportunidades y orgullo.
        </Text>
        <Text style={styles.paragraph}>
          Cada amanecer en esta etapa es un recordatorio de tu resiliencia. Sigue adelante, porque el final de este camino será una victoria que siempre recordarás.
        </Text>
        <Text style={styles.paragraph}>
          En los momentos más complicados, recuerda por qué empezaste este viaje. 
        </Text>
        <Text style={styles.paragraph}>
          Aunque el entorno pueda ser desafiante, estás sembrando esperanza y bienestar en tierras que nunca lo olvidarán. Sigue adelante.
        </Text>
        <Text style={styles.paragraph}>
          Cuando pienses en rendirte, recuerda que cada paso que das está construyendo un legado que nadie podrá quitarte. Mantente fuerte, estás haciendo historia.
        </Text>
        <Text style={styles.paragraph}>
          Y si en algún momento consideras que ya todo lo que pasas es insoportable, por distintos motivos, evalúa esa opción de renunciar, primero esta tu integridad.
        </Text>
        
        
        <Text style={[styles.paragraph, styles.highlight]}>
           <Text style={styles.redText}>¡NO TE RINDAS!
            
           </Text>

           <Text style={[styles.paragraph, styles.alignLeft]}>
       {'\n\n'}
       📢¡Querido Profesional , tu vida e integridad es invaluable! 🩺
       {'\n\n'}

       Si enfrentas acoso durante tu servicio, recuerda:
       {'\n\n'}

      🔹 Prioriza tu seguridad: Aléjate de la situación si es posible y busca un lugar seguro.
      {'\n\n'}
      🔹 Registra la situación: Anota fechas, lugares, personas involucradas y detalles del incidente.
      {'\n\n'}
      🔹 Informa a tu red de apoyo: Comunica lo sucedido a colegas de confianza, jefaturas que puedan ayudarte, o grupos de apoyo.
      {'\n\n'}
      🔹 Busca respaldo institucional: Reporta el caso a tu coordinador SERUMS, Dirección Regional de Salud (DIRESA) u otro.
      {'\n\n'}
      🔹 Denuncia formalmente:Acude a la comisaría, fiscalía o Defensoría del Pueblo. Puedes solicitar medidas de protección.
      {'\n\n'}
      🔹 No estás sola/o: Busca apoyo entre tus colegas y/o amigos de confianza, Existen redes de apoyo y profesionales de salud que pueden orientarte.
      {'\n\n'}

      Tu seguridad y bienestar son prioridad. ¡No dudes en pedir ayuda! 💪 {'\n\n'}
      {'\n\n'}

               </Text>


    <Text style={styles.redText}>   A TI QUERIDO PROFESIONAL, QUE BRINDAS ATENCION, TEN PRESENTE
            
        </Text>
      
       <Text style={[styles.paragraph, styles.alignLeft]}>
       

       {'\n\n'}

        Cada año, lamentablemente, vemos cómo colegas enfrentan accidentes durante el cumplimiento de su noble labor. No permitamos que esto se convierta en una estadística más. Tú eres indispensable para tu familia.
        {'\n\n'}
        Algunas recomendaciones clave para tu seguridad:
        {'\n\n'}
        ✅ Planifica tu ruta: Asegúrate de conocer los caminos más seguros para tus traslados. Evita zonas de alto riesgo, especialmente en horarios nocturnos.
        {'\n\n'}
        ✅ Mantén la comunicación: Infórmale a un compañero o familiar sobre tu ubicación y actividades diarias.
        {'\n\n'}
        ✅ Revisa tus herramientas de trabajo: Ten siempre tus equipo  en óptimas condiciones y evita improvisaciones.
        {'\n\n'}
        ✅ Evita situaciones de riesgo: Si sientes que tu seguridad está comprometida, prioriza tu bienestar y solicita apoyo.
        {'\n\n'}
        ✅ Descansa adecuadamente: La fatiga puede ser tan peligrosa como cualquier otro factor de riesgo.
        {'\n\n'}

        Recuerda, tu compromiso con la salud no debe comprometer tu vida. Cuida de ti mismo para que puedas seguir cuidando de los demás. 🌟
        {'\n\n'}

        ¡Sé responsable, sé precavido y protégete! 💙


        </Text>







       
       

        
        

        
       
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9ff', // Fondo cálido y relajante
    padding: 20,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'justify',
    lineHeight: 24,
    color: '#333', // Texto en color oscuro para mejor contraste
  },
  redText: {
    color: '#e63946', // Rojo vivo para énfasis
    fontWeight: 'bold',
  },
  highlight: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20,
    color: '#0077b6', // Azul motivador
    fontWeight: '600',
  },
});
