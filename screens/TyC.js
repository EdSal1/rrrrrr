import { View, Text, StyleSheet, ScrollView } from 'react-native';  
import React from 'react';

const Terminos = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>TERMINOS Y CONDICIONES</Text>
        <Text style={styles.paragraph}>
        1. Usted acepta los términos y condiciones descritos en este Acuerdo de términos de uso con respecto a esta aplicación/web. {'\n\n'}
        </Text>
        <Text style={styles.paragraph}>
        2. ACCESO Y DISPONIBILIDAD: Esta Aplicación/web puede ser descargada y/o utilizada de forma gratuita, pero algunos servicios solicitados por correo o contenidos de terceros específicos pueden requerir pagos adicionales. Nos reservamos el derecho de modificar los costos o características, comunicándose por redes sociales o correo a quien pudiera solicitarlo. {'\n\n'}
        </Text>
        <Text style={styles.paragraph}>
        3. DERECHOS DE AUTOR Y MARCAS COMERCIALES. Productos, nombres de empresas y contenido que se muestran en o a través de esta Aplicación/web pueden, en algunos casos, ser marcas comerciales o derechos de autor de terceros y la información de ellos se redirige mediante los enlaces a los mismos. La copia, distribución, modificación u otro uso por parte de Usted de esta Aplicación/web y todo el contenido que se muestra en o a través de esta Aplicación/web, excepto según lo permita este Acuerdo, está estrictamente prohibido. {'\n\n'}
        </Text>
        <Text style={styles.paragraph}>
        4. SIN TITULARIDAD. El uso de esta aplicación/web no le otorga derechos de propiedad sobre ningún contenido, documento u otros materiales visualizados a través de ella. Asimismo, el hecho de publicar o compartir información a través de esta aplicación/web no le confiere derechos de propiedad sobre dichos materiales. Todo el contenido es propiedad de sus respectivos titulares/entidades.
        {'\n\n'}
        </Text>
        <Text style={styles.paragraph}>
        5. DERECHO DE USO LIMITADO. Se permite visualizar, imprimir o descargar el contenido disponible en esta aplicación/web exclusivamente para fines personales o profesionales, con un propósito meramente informativo. Todos los derechos, títulos e intereses que aparecen en esta aplicación/web, así como el contenido vinculado a través de ella, incluyendo publicaciones de entidades, colaboradores, y del desarrollador son propiedad de sus respectivos autores o instituciones. Estos derechos permanecerán bajo la titularidad de sus propietarios originales en todo momento. {'\n\n'}
        </Text>
        <Text style={styles.paragraph}>
        6. ENLACES A OTRAS APLICACIONES Y SITIOS WEB. Esta Aplicación/web contiene enlaces a otras aplicaciones y sitios web. No somos responsables del contenido, la precisión ni las opiniones expresadas en dichas aplicaciones o sitios web. No garantizamos que dichos enlaces estén actualizados, integros y operativos en un futuro. Y dichas aplicaciones y sitios web no pueden ser investigados, monitoreados y verificados en cuanto a precisión o integridad por nosotros de manera continua. La inclusión de cualquier sitio web vinculado en nuestra Aplicación no implica la aprobación o respaldo del sitio web vinculado por nuestra parte. El desarrollador no se responsabiliza por el contenido, funcionamiento, precisión, integridad o disponibilidad de los sitios web, aplicaciones o servicios de terceros accesibles desde esta Aplicación.{'\n\n'}
        </Text>
        <Text style={styles.paragraph}>
        7. NO ES UN ASESORAMIENTO PROFESIONAL DIRIGIDO. El contenido proporcionado por esta aplicación/web no pretende sustituir el asesoramiento médico, legal u otro asesoramiento profesional. Su finalidad es únicamente ofrecer información y una orientacion a profesionales de la salud. Esta Aplicación/web debe utilizarse únicamente como guía, y los profesionales de la salud deben utilizar un criterio clínico y profesional sólido, individualizado para cada paciente específico o para cualquier otra situación.
        {'\n\n'}
        </Text>
        <Text style={styles.paragraph}>
        8. EXONERACION Cualquier decisión o acción basada en las recomendaciones proporcionadas por esta aplicación/web será responsabilidad exclusiva de quien las lleve a cabo, eximiendo de toda responsabilidad a los creadores de contenido, entidades, promotores y editor de la misma. Estos no se hacen responsables por las consecuencias derivadas de decisiones basadas en la información proporcionada por la aplicación/web, así como por posibles errores, omisiones o inexactitudes que pueda contener. Asimismo, no se asume responsabilidad por daños o perjuicios al software o hardware del usuario. {'\n\n'}
        </Text>
        <Text style={styles.paragraph}>
        9. DESCARGOS DE RESPONSABILIDAD Y LÍMITES. Aunque se han empleado medidas razonables para que esta Aplicación/web y su contenido sean en lo posible actuales, la información de esta Aplicación/web puede contener imprecisiones técnicas o errores tipográficos o de otro tipo. La información puede modificarse o actualizarse sin previo aviso. También podemos realizar mejoras y cambios en esta Aplicación/web y/o en el contenido que se muestra en o a través de esta Aplicación/web sin previo aviso. Sin embargo, no tenemos obligación de proporcionar mantenimiento, soporte, actualizaciones, mejoras o modificaciones. {'\n\n'}
        </Text>
        <Text style={styles.paragraph}>
        10. GARANTÍAS Y DESCARGOS DE RESPONSABILIDAD. ESTA APLICACIÓN/WEB Y LA INFORMACIÓN DISPONIBLE EN O A TRAVÉS DE ESTA APLICACIÓN/WEB SE PROPORCIONAN "TAL CUAL", "CON TODOS LOS DEFECTOS" Y "SEGÚN DISPONIBILIDAD". EL CREADOR Y LOS PROVEEDORES DE CONTENIDO NO OFRECEN NINGUNA GARANTÍA O REPRESENTACIÓN, EXPRESA O IMPLÍCITA, EN CUANTO A LA DISPONIBILIDAD, FUNCIONALIDAD U OPERATIVIDAD DE ESTA APLICACIÓN/WEB O LA PRECISIÓN, EXACTITUD O INTEGRIDAD DE LA INFORMACIÓN PROPORCIONADA POR O A TRAVÉS DE ESTA APLICACIÓN/WEB O LOS DATOS A PARTIR DE LOS CUALES SE COMPILA DICHA INFORMACIÓN. NINGÚN CONSEJO O INFORMACIÓN, YA SEA ORAL O ESCRITO, OBTENIDO POR USTED DE NOSOTROS A TRAVÉS DE ESTA APLICACIÓN/WEB O DE OTRO MODO CREARÁ NINGUNA GARANTÍA, REPRESENTACIÓN O GARANTÍA QUE NO SE ENCUENTRE EXPRESAMENTE ESTABLECIDA EN ESTE ACUERDO. {'\n\n'}
        </Text>
        <Text style={styles.paragraph}>
        11. USO DEL CONTENIDO. LOS USUARIOS SON RESPONSABLES DEL USO DEL CONTENIDO DE ESTA APLICACIÓN/WEB. AL USAR ESTA APLICACIÓN/WEB, USTED RECONOCE Y ACEPTA LA EXENCIÓN DE RESPONSABILIDAD DE GARANTÍA ANTERIOR Y QUE UTILIZA ESTA APLICACIÓN Y LA INFORMACIÓN PROPORCIONADA EN O A TRAVÉS DE ESTA APLICACIÓN/WEB BAJO SU PROPIA RESPONSABILIDAD. {'\n\n'}
        </Text>
        <Text style={styles.paragraph}>
        12. LIMITACIÓN DE RESPONSABILIDAD. BAJO NINGUNA CIRCUNSTANCIA EL CREADOR DE LA APLICACIÓN/WEB O CUALQUIERA DE LOS PROVEEDORES DE CONTENIDO SERÁN RESPONSABLES (i) POR CUALQUIER MONTO QUE EXCEDA LA CONTRAPRESTACIÓN QUE USTED PAGÓ POR ALGÚN SERVICIO DE LA  APLICACIÓN/WEB, SI LA HUBIERE, O (ii) POR DAÑOS INDIRECTOS, INCIDENTALES O CONSECUENTES (COMO, SIN LIMITACIÓN, PÉRDIDA DE NEGOCIOS, DAÑOS FISICOS, DAÑOS PSICOLOGICOS, DAÑO A LA REPUTACIÓN, PÉRDIDA DE BENEFICIOS O INGRESOS, DAÑO A DISPOSITIVOS TECNOLÓGICOS O DE OTRO TIPO, O LITIGIO U OTRO) O POR DAÑOS ESPECIALES, EJEMPLARES, PUNITIVOS O SIMILARES, INCLUSO SI SE ADVIERTE O SE ADVIERTE DE LA POSIBILIDAD O PROBABILIDAD DE DICHOS DAÑOS. LA NEGACIÓN DE DAÑOS ESTABLECIDA ANTERIORMENTE ES UN ELEMENTO FUNDAMENTAL DE LA BASE DEL ACUERDO ENTRE NOSOTROS Y USTED. USTED Y NOSOTROS (EN NOMBRE PROPIO Y EN NOMBRE DE LOS PROVEEDORES DE CONTENIDO) ACEPTAMOS QUE LA ANTERIOR LIMITACIÓN DE RESPONSABILIDAD ES UNA DISTRIBUCIÓN DE RIESGO RAZONABLE Y ACORDADA ENTRE USTED Y NOSOTROS (Y LOS PROVEEDORES DE CONTENIDO) Y QUE REFLEJA LAS TARIFAS, SI LAS HUBIERE, QUE SE PUEDE COBRAR POR SERVICIOS SOLICITADOS DENTRO DE LA APLICACIÓN/WEB Y EL CONTENIDO PROPORCIONADO EN O A TRAVÉS DE ESTA APLICACIÓN/WEB. USTED RECONOCE QUE, SIN SU ACUERDO CON ESTA LIMITACIÓN DE RESPONSABILIDAD, NO LE PROPORCIONAREMOS ESTA APLICACIÓN/WEB O CONTENIDO. {'\n\n'}
        </Text>
        <Text style={styles.paragraph}>
        13. USO ILEGAL O PROHIBIDO. Como condición para el uso de esta Aplicación/web, usted acepta no utilizar esta Aplicación/web para ningún otro propósito que no sea el permitido por este Acuerdo o para ningún propósito que sea ilegal o esté prohibido por este Acuerdo. No puede utilizar esta Aplicación/web de ninguna manera que pueda dañar, deshabilitar o perjudicar esta Aplicación/web, su disponibilidad y/o funcionalidad, o el uso o disfrute de esta Aplicación/web por parte de otros. No puede intentar obtener acceso no autorizado o cualquier acceso más allá de sus derechos otorgados en este documento a cualquier componente de esta Aplicación/web o cualquier contenido disponible en o a través de esta Aplicación/web mediante piratería, o cualquier otro medio. No puede obtener ni intentar obtener ningún contenido o información a través de ningún medio que no esté explícita e intencionalmente disponible a través de esta Aplicación/web. {'\n\n'}
        </Text>
        <Text style={styles.paragraph}>
        14. PROCESAMIENTO Y ALMACENAMIENTO DE DATOS Los usuarios que soliciten un servicio con algunos "Plus" a través del correo proporcionado, a pesar de contar con videos que explican cómo obtener la información básica por su cuenta, aceptan que los datos compartidos serán tratados de forma confidencial. Estos datos serán almacenados únicamente durante un período de 6 meses, tras el cual serán eliminados de manera definitiva, excepto la constancia o codigo de operación de algún pago realizado. Correos y nombres de aquellos que pudieran haber solicitado algun servicio si seran eliminados. La confidencialidad y seguridad de la información están garantizadas en todo momento durante este plazo. Aquellos que soliciten ser voluntarios o soliciten TELEMENTORIA, sus datos estaran guardados bajo confidencialidad, haciendo las comunicaciones respectivas mediante respectivo correo. {'\n\n'}
        </Text>
        <Text style={styles.paragraph}>
        15. INGENIERÍA INVERSA. Bajo ninguna circunstancia puede desarmar, descompilar o realizar ingeniería inversa o intentar descubrir el código fuente de esta Aplicación/web, ya que dicho código fuente es confidencial y propiedad exclusiva del desarrollador. {'\n\n'}
        </Text>
        <Text style={styles.paragraph}>
        16. RENUNCIA. Nuestra falta de cumplimiento de alguna disposición de este Acuerdo no se interpretará como una renuncia o limitación de nuestros derechos posteriores a hacer cumplir y obligar al estricto cumplimiento de cada disposición de este Acuerdo. {'\n\n'}
        
        </Text>
        <Text style={styles.paragraph}>
        17. ACUERDO COMPLETO. Este Acuerdo contiene el Acuerdo y entendimiento completo entre usted y nosotros con respecto al tema del mismo, y no existen representaciones, incentivos, promesas o acuerdos, orales o de otro tipo, que no estén incorporados en el presente. Todas las discusiones, negociaciones, compromisos y entendimientos previos relacionados con el presente se fusionan en el presente
        </Text>
        
        <Text style={styles.paragraph}>
          
        </Text>
        <Text style={styles.paragraph}>
          
        </Text>
        <Text style={styles.paragraph}>
          
        </Text>
      </View>
    </ScrollView>
  );
};

export default Terminos;

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
