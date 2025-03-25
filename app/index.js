import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation para usar dentro de CustomHeaderLeft
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Initial from '../screens/Initial';
import PreSerums from '../screens/PreSerums';
import EnlacesScreen from '../screens/EnlacesScreen';
import ManSup from '../screens/ManSup';
import Excel from '../screens/Excel';

import Adjudicacion from '../screens/Adjudicacion';
import Cursos from '../screens/Cursos';
import OPS from '../screens/OPS'
import Sello from '../screens/Sello';
import Pagacho from '../screens/Pagacho';
import Region from '../screens/Region';
import EnfermedadesRegion from '../screens/EnfermedadesRegion';
import Coordinadores from '../screens/Coordinadores';
import Induccion from '../screens/Induccion';
import Serums from '../screens/Serums';
import Lecturas from '../screens/Lecturas';
import Telefono from '../screens/Telefono';
import Enfermedades from '../screens/Enfermedades';
import EmgRurales from '../screens/EmgRurales';
import His from '../screens/His';
import Fuas from '../screens/Fuas';
import Investigando from '../screens/Investigando';
import Comer from '../screens/Comer';
import Fin from '../screens/Fin';
import AnosPrevios from '../screens/AnosPrevios'
import TipsFuas from '../screens/TipsFuas'
import CursosSerums from '../screens/CursosSerums'
import Defuncion from '../screens/Defuncion'
import Recomendados from '../screens/Recomendados'
import Auditoria from '../screens/Auditoria'
import Odoo from '../screens/Odoo'
import Residentado from '../screens/Residentado'
import Apoyo from '../screens/Apoyo'
import Playlists from '../screens/Playlists'
import Llegando from '../screens/Llegando'
import Anemia from '../screens/Anemia'



import AccesoRapido from '../screens/AccesoRapido';
import Fuerza from '../screens/Fuerza';

import Colaboradores from '../screens/Colaboradores';
import Sobre from '../screens/Sobre';
import Agradecimientos from '../screens/Agradecimientos';
import Sugerencias from '../screens/Sugerencias';
import Importante from '../screens/Importante';
import Cafe from '../screens/Cafe';

// Modal Component for WithCTA
function WithCTAModal({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Términos y Condiciones</Text>
          <ScrollView style={styles.scrollViewContent}>
            <Text style={styles.scrollText}>
            1. Usted acepta los términos y condiciones descritos en este Acuerdo de términos de uso con respecto a esta aplicación/web. {'\n\n'}
              2. ACCESO Y DISPONIBILIDAD: Esta Aplicación/web puede ser descargada y/o utilizada de forma gratuita, pero algunos servicios solicitados por correo o contenidos de terceros específicos pueden requerir pagos adicionales. Nos reservamos el derecho de modificar los costos o características, comunicándose por redes sociales o correo a quien pudiera solicitarlo. {'\n\n'}
              3. DERECHOS DE AUTOR Y MARCAS COMERCIALES. Productos, nombres de empresas y contenido que se muestran en o a través de esta Aplicación/web pueden, en algunos casos, ser marcas comerciales o derechos de autor de terceros y la información de ellos se redirige mediante los enlaces a los mismos. La copia, distribución, modificación u otro uso por parte de Usted de esta Aplicación/web y todo el contenido que se muestra en o a través de esta Aplicación/web, excepto según lo permita este Acuerdo, está estrictamente prohibido. {'\n\n'}
              4. SIN TITULARIDAD. El uso de esta aplicación/web no le otorga derechos de propiedad sobre ningún contenido, documento u otros materiales visualizados a través de ella. Asimismo, el hecho de publicar o compartir información a través de esta aplicación/web no le confiere derechos de propiedad sobre dichos materiales. Todo el contenido es propiedad de sus respectivos titulares/entidades.
              {'\n\n'}
              5. DERECHO DE USO LIMITADO. Se permite visualizar, imprimir o descargar el contenido disponible en esta aplicación/web exclusivamente para fines personales o profesionales, con un propósito meramente informativo. Todos los derechos, títulos e intereses que aparecen en esta aplicación/web, así como el contenido vinculado a través de ella, incluyendo publicaciones de entidades, colaboradores, y del desarrollador son propiedad de sus respectivos autores o instituciones. Estos derechos permanecerán bajo la titularidad de sus propietarios originales en todo momento. {'\n\n'}
              6. ENLACES A OTRAS APLICACIONES Y SITIOS WEB. Esta Aplicación/web contiene enlaces a otras aplicaciones y sitios web. No somos responsables del contenido, la precisión ni las opiniones expresadas en dichas aplicaciones o sitios web. No garantizamos que dichos enlaces estén actualizados, integros y operativos en un futuro. Y dichas aplicaciones y sitios web no pueden ser investigados, monitoreados y verificados en cuanto a precisión o integridad por nosotros de manera continua. La inclusión de cualquier sitio web vinculado en nuestra Aplicación no implica la aprobación o respaldo del sitio web vinculado por nuestra parte. El desarrollador no se responsabiliza por el contenido, funcionamiento, precisión, integridad o disponibilidad de los sitios web, aplicaciones o servicios de terceros accesibles desde esta Aplicación.{'\n\n'}
              7. NO ES UN ASESORAMIENTO PROFESIONAL DIRIGIDO. El contenido proporcionado por esta aplicación/web no pretende sustituir el asesoramiento médico, legal u otro asesoramiento profesional. Su finalidad es únicamente ofrecer información y una orientacion a profesionales de la salud. Esta Aplicación/web debe utilizarse únicamente como guía, y los profesionales de la salud deben utilizar un criterio clínico y profesional sólido, individualizado para cada paciente específico o para cualquier otra situación.
              {'\n\n'}
              8. EXONERACION Cualquier decisión o acción basada en las recomendaciones proporcionadas por esta aplicación/web será responsabilidad exclusiva de quien las lleve a cabo, eximiendo de toda responsabilidad a los creadores de contenido, entidades, promotores y editor de la misma. Estos no se hacen responsables por las consecuencias derivadas de decisiones basadas en la información proporcionada por la aplicación/web, así como por posibles errores, omisiones o inexactitudes que pueda contener. Asimismo, no se asume responsabilidad por daños o perjuicios al software o hardware del usuario. {'\n\n'}

              9. DESCARGOS DE RESPONSABILIDAD Y LÍMITES. Aunque se han empleado medidas razonables para que esta Aplicación/web y su contenido sean en lo posible actuales, la información de esta Aplicación/web puede contener imprecisiones técnicas o errores tipográficos o de otro tipo. La información puede modificarse o actualizarse sin previo aviso. También podemos realizar mejoras y cambios en esta Aplicación/web y/o en el contenido que se muestra en o a través de esta Aplicación/web sin previo aviso. Sin embargo, no tenemos obligación de proporcionar mantenimiento, soporte, actualizaciones, mejoras o modificaciones. {'\n\n'}
              10. GARANTÍAS Y DESCARGOS DE RESPONSABILIDAD. ESTA APLICACIÓN/WEB Y LA INFORMACIÓN DISPONIBLE EN O A TRAVÉS DE ESTA APLICACIÓN/WEB SE PROPORCIONAN "TAL CUAL", "CON TODOS LOS DEFECTOS" Y "SEGÚN DISPONIBILIDAD". EL CREADOR Y LOS PROVEEDORES DE CONTENIDO NO OFRECEN NINGUNA GARANTÍA O REPRESENTACIÓN, EXPRESA O IMPLÍCITA, EN CUANTO A LA DISPONIBILIDAD, FUNCIONALIDAD U OPERATIVIDAD DE ESTA APLICACIÓN/WEB O LA PRECISIÓN, EXACTITUD O INTEGRIDAD DE LA INFORMACIÓN PROPORCIONADA POR O A TRAVÉS DE ESTA APLICACIÓN/WEB O LOS DATOS A PARTIR DE LOS CUALES SE COMPILA DICHA INFORMACIÓN. NINGÚN CONSEJO O INFORMACIÓN, YA SEA ORAL O ESCRITO, OBTENIDO POR USTED DE NOSOTROS A TRAVÉS DE ESTA APLICACIÓN/WEB O DE OTRO MODO CREARÁ NINGUNA GARANTÍA, REPRESENTACIÓN O GARANTÍA QUE NO SE ENCUENTRE EXPRESAMENTE ESTABLECIDA EN ESTE ACUERDO. {'\n\n'}
              11. USO DEL CONTENIDO. LOS USUARIOS SON RESPONSABLES DEL USO DEL CONTENIDO DE ESTA APLICACIÓN/WEB. AL USAR ESTA APLICACIÓN/WEB, USTED RECONOCE Y ACEPTA LA EXENCIÓN DE RESPONSABILIDAD DE GARANTÍA ANTERIOR Y QUE UTILIZA ESTA APLICACIÓN Y LA INFORMACIÓN PROPORCIONADA EN O A TRAVÉS DE ESTA APLICACIÓN/WEB BAJO SU PROPIA RESPONSABILIDAD. {'\n\n'}
              12. LIMITACIÓN DE RESPONSABILIDAD. BAJO NINGUNA CIRCUNSTANCIA EL CREADOR DE LA APLICACIÓN/WEB O CUALQUIERA DE LOS PROVEEDORES DE CONTENIDO SERÁN RESPONSABLES (i) POR CUALQUIER MONTO QUE EXCEDA LA CONTRAPRESTACIÓN QUE USTED PAGÓ POR ALGÚN SERVICIO DE LA  APLICACIÓN/WEB, SI LA HUBIERE, O (ii) POR DAÑOS INDIRECTOS, INCIDENTALES O CONSECUENTES (COMO, SIN LIMITACIÓN, PÉRDIDA DE NEGOCIOS, DAÑOS FISICOS, DAÑOS PSICOLOGICOS, DAÑO A LA REPUTACIÓN, PÉRDIDA DE BENEFICIOS O INGRESOS, DAÑO A DISPOSITIVOS TECNOLÓGICOS O DE OTRO TIPO, O LITIGIO U OTRO) O POR DAÑOS ESPECIALES, EJEMPLARES, PUNITIVOS O SIMILARES, INCLUSO SI SE ADVIERTE O SE ADVIERTE DE LA POSIBILIDAD O PROBABILIDAD DE DICHOS DAÑOS. LA NEGACIÓN DE DAÑOS ESTABLECIDA ANTERIORMENTE ES UN ELEMENTO FUNDAMENTAL DE LA BASE DEL ACUERDO ENTRE NOSOTROS Y USTED. USTED Y NOSOTROS (EN NOMBRE PROPIO Y EN NOMBRE DE LOS PROVEEDORES DE CONTENIDO) ACEPTAMOS QUE LA ANTERIOR LIMITACIÓN DE RESPONSABILIDAD ES UNA DISTRIBUCIÓN DE RIESGO RAZONABLE Y ACORDADA ENTRE USTED Y NOSOTROS (Y LOS PROVEEDORES DE CONTENIDO) Y QUE REFLEJA LAS TARIFAS, SI LAS HUBIERE, QUE SE PUEDE COBRAR POR SERVICIOS SOLICITADOS DENTRO DE LA APLICACIÓN/WEB Y EL CONTENIDO PROPORCIONADO EN O A TRAVÉS DE ESTA APLICACIÓN/WEB. USTED RECONOCE QUE, SIN SU ACUERDO CON ESTA LIMITACIÓN DE RESPONSABILIDAD, NO LE PROPORCIONAREMOS ESTA APLICACIÓN/WEB O CONTENIDO. {'\n\n'}
              13. USO ILEGAL O PROHIBIDO. Como condición para el uso de esta Aplicación/web, usted acepta no utilizar esta Aplicación/web para ningún otro propósito que no sea el permitido por este Acuerdo o para ningún propósito que sea ilegal o esté prohibido por este Acuerdo. No puede utilizar esta Aplicación/web de ninguna manera que pueda dañar, deshabilitar o perjudicar esta Aplicación/web, su disponibilidad y/o funcionalidad, o el uso o disfrute de esta Aplicación/web por parte de otros. No puede intentar obtener acceso no autorizado o cualquier acceso más allá de sus derechos otorgados en este documento a cualquier componente de esta Aplicación/web o cualquier contenido disponible en o a través de esta Aplicación/web mediante piratería, o cualquier otro medio. No puede obtener ni intentar obtener ningún contenido o información a través de ningún medio que no esté explícita e intencionalmente disponible a través de esta Aplicación/web. {'\n\n'}
              14. PROCESAMIENTO Y ALMACENAMIENTO DE DATOS Los usuarios que soliciten un servicio a través del correo proporcionado, a pesar de contar con videos que explican cómo obtener la información por su cuenta, aceptan que los datos compartidos serán tratados de forma confidencial. Estos datos serán almacenados únicamente durante un período de 6 meses, tras el cual serán eliminados de manera definitiva. La confidencialidad y seguridad de la información están garantizadas en todo momento durante este plazo. Aquellos que soliciten ser voluntarios o soliciten TELEMENTORIA, sus datos estaran guardados bajo confidencialidad, haciendo las comunicaciones respectivas mediante respectivo correo. {'\n\n'}
              15. INGENIERÍA INVERSA. Bajo ninguna circunstancia puede desarmar, descompilar o realizar ingeniería inversa o intentar descubrir el código fuente de esta Aplicación/web, ya que dicho código fuente es confidencial y propiedad exclusiva del desarrollador de la app. {'\n\n'}
              16. RENUNCIA. Nuestra falta de cumplimiento de alguna disposición de este Acuerdo no se interpretará como una renuncia o limitación de nuestros derechos posteriores a hacer cumplir y obligar al estricto cumplimiento de cada disposición de este Acuerdo. {'\n\n'}
              17. ACUERDO COMPLETO. Este Acuerdo contiene el Acuerdo y entendimiento completo entre usted y nosotros con respecto al tema del mismo, y no existen representaciones, incentivos, promesas o acuerdos, orales o de otro tipo, que no estén incorporados en el presente. Todas las discusiones, negociaciones, compromisos y entendimientos previos relacionados con el presente se fusionan en el presente


            </Text>
          </ScrollView>

          <TouchableOpacity onPress={onClose} style={styles.acceptButton}>
            <Text style={styles.buttonText}>Aceptar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

// Custom Header Left Function
function CustomHeaderLeft() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      // Optional: Handle case where no screens to go back to, like navigating to a specific screen
      console.log('No screen to go back to');
    }
  };

  return (
    <TouchableOpacity
      onPress={handleGoBack}
      style={{
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
      }}
    >
      <Ionicons name="arrow-back" size={50} color="black" />
    </TouchableOpacity>
  );
}

// Define Stack Navigator
const Stack = createStackNavigator();

function MainStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Inicio',
          headerLeft: () => (
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.toggleDrawer()}>
              <MaterialCommunityIcons name="menu" size={40} color="#333" />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Initial"
        component={Initial}
        options={{
          headerShown: true,
          title: 'Fase Inicial',
          headerTitleAlign: 'center',
          headerLeft: () => <CustomHeaderLeft />, // Use CustomHeaderLeft here
        }}
      />
      <Stack.Screen
        name="PreSerums"
        component={PreSerums}
        options={{ headerShown: true, title: 'Pre-SERUMS', headerTitleAlign: 'center',headerLeft: () => <CustomHeaderLeft />, }}
      />
      <Stack.Screen 
                name="EnlacesScreen" 
                component={EnlacesScreen} 
                options={{
                    title: 'Grupos de Facebook',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="ManSup" 
                component={ManSup} 
                options={{
                    title: 'Manuales de Supervivencia',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Adjudicacion" 
                component={Adjudicacion} 
                options={{
                    title: 'Adjudicacion',                    
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Cursos" 
                component={Cursos} 
                options={{
                    title: 'Cursos',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="OPS" 
                component={OPS} 
                options={{
                    title: 'OPS',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />

            <Stack.Screen 
                name="Sello" 
                component={Sello} 
                options={{
                    title: 'Sello',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Pagacho" 
                component={Pagacho} 
                options={{
                    title: 'Pagacho',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Region" 
                component={Region} 
                options={{
                    title: 'Region',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="EnfermedadesRegion" 
                component={EnfermedadesRegion} 
                options={{
                    title: 'Enfermedades Por Region',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Coordinadores" 
                component={Coordinadores} 
                options={{
                    title: 'Coordinadores',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Induccion" 
                component={Induccion} 
                options={{
                    title: 'Induccion y Capacitacion',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
             <Stack.Screen 
                name="Serums" 
                component={Serums} 
                options={{
                    title: 'Serums',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Lecturas" 
                component={Lecturas} 
                options={{
                    title: 'Lecturas',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Telefono" 
                component={Telefono} 
                options={{
                    title: 'Telefono',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Enfermedades" 
                component={Enfermedades} 
                options={{
                    title: 'Enfermedades',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="EmgRurales" 
                component={EmgRurales} 
                options={{
                    title: 'Emergencias Rurales',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="His" 
                component={His} 
                options={{
                    title: 'His',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Fuas" 
                component={Fuas} 
                options={{
                    title: 'Fuas',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Investigando" 
                component={Investigando} 
                options={{
                    title: 'Investigando',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Comer" 
                component={Comer} 
                options={{
                    title: 'Comer',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Fin" 
                component={Fin} 
                options={{
                    title: 'Fin',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="AnosPrevios" 
                component={AnosPrevios} 
                options={{
                    title: 'Plazas ofertadas previamente',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="TipsFuas" 
                component={TipsFuas} 
                options={{
                    title: 'TipsFuas',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="CursosSerums" 
                component={CursosSerums} 
                options={{
                    title: 'Cursos en el SERUMS',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Defuncion" 
                component={Defuncion} 
                options={{
                    title: 'Defuncion',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Recomendados" 
                component={Recomendados} 
                options={{
                    title: 'Canales Recomendados',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Auditoria" 
                component={Auditoria} 
                options={{
                    title: 'Auditoria',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Odoo" 
                component={Odoo} 
                options={{
                    title: 'Plataforma Odoo',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Residentado" 
                component={Residentado} 
                options={{
                    title: 'Residentado',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Excel" 
                component={Excel} 
                options={{
                    title: 'Excel',                    
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Apoyo" 
                component={Apoyo} 
                options={{
                    title: 'Apoyo',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Playlists" 
                component={Playlists} 
                options={{
                    title: 'Playlists',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Llegando" 
                component={Llegando} 
                options={{
                    title: 'Llegando a mi establecimiento',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
            <Stack.Screen 
                name="Anemia" 
                component={Anemia} 
                options={{
                    title: 'Calculadora Anemia',
                    headerTitleAlign: 'center',
                    headerLeft: () => <CustomHeaderLeft />,
                }} 
            />
    </Stack.Navigator>
  );
}

// Define Tab Navigator
function AccesoStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccesoRapido"
        component={AccesoRapido}
        options={{
          title: 'Acceso Rápido',
          headerTitleAlign: 'center',
          // Use CustomHeaderLeft here
        }}
      />
      <Stack.Screen
        name="Fuas"
        component={Fuas}
        options={{
          title: 'Fuas',
          headerTitleAlign: 'center',
          headerLeft: () => <CustomHeaderLeft />, // Use CustomHeaderLeft here
        }}
      />
       <Stack.Screen 
              name="His" 
              component={His} 
              options={{
                  title: 'His',
                  headerTitleAlign: 'center',
                  headerLeft: () => <CustomHeaderLeft />,
              }} 
          />
          <Stack.Screen 
              name="TipsFuas" 
              component={TipsFuas} 
              options={{
                  title: 'TipsFuas',
                  headerTitleAlign: 'center',
                  headerLeft: () => <CustomHeaderLeft />,
              }} 
          />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          },  
          tabBarActiveTintColor: '#005BB5', // Azul oscuro cuando el tab está seleccionado
         tabBarInactiveTintColor: '#000000',        
      }}
    >
      <Tab.Screen
        name="MainStack"
        component={MainStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarLabelStyle: { fontWeight: 'bold' }, // Negrita cuando está seleccionado
        }}
      />
      <Tab.Screen
        name="AccesoRapido"
        component={AccesoStack}
        options={{
          tabBarLabel: 'Acceso Rápido',
          
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="arrow-up-bold-hexagon-outline"
              color={color}
              size={26}
            />
          ),
          tabBarLabelStyle: { fontWeight: 'bold' }, // Negrita cuando está seleccionado
        }}
      />
      <Tab.Screen
        name="Fuerza"
        component={Fuerza}
        options={{
          tabBarLabel: 'Fuerza',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={26} />
          ),
          tabBarLabelStyle: { fontWeight: 'bold' }, // Negrita cuando está seleccionado
        }}
      />
    </Tab.Navigator>

  
  
  );
}

// Define Drawer Navigator
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,

        headerStyle: { backgroundColor: 'white' },
        headerTintColor: 'black',
        headerTitleStyle: { fontWeight: 'bold' },
        drawerActiveTintColor: '#005BB5', 
        drawerInactiveTintColor: '#000000',        
      }}
    >
      <Drawer.Screen
        name="Tabs"
        component={TabNavigator}
        options={{
          title: 'Inicio',
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={26} />
          ),
        }}
      />
       <Drawer.Screen
        name="Colaboradores"
        component={Colaboradores}
        options={{
          drawerLabel: 'Colaboradores',
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-multiple" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
                name="Agradecimientos"
                component={Agradecimientos}
                options={{
                    drawerLabel: 'Agradecimientos',
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="arm-flex" color={color} size={26} />
                    ),
                }}
            />
      <Drawer.Screen
                name="Sugerencias"
                component={Sugerencias}
                options={{
                    drawerLabel: 'Sugerencias',
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="card-text" color={color} size={26} />
                    ),
                }}
            />
      <Drawer.Screen
                name="Importante"
                component={Importante}
                options={{
                    drawerLabel: 'Importante',
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="sign-caution" color={color} size={26} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Sobre"
                component={Sobre}
                options={{
                    drawerLabel: 'Sobre',
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="information" color={color} size={26} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Cafe"
                component={Cafe}
                options={{
                    drawerLabel: 'Invítame un Café',
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="coffee" color={color} size={26} />
                    ),
                }}
            />
    </Drawer.Navigator>
  );
}

// Main App Component
export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      if (!hasLaunched) {
        setModalVisible(true);
        await AsyncStorage.setItem('hasLaunched', 'true');
      }
    };
    checkFirstLaunch();
  }, []);

  return (
    <View style={styles.container}>
      <WithCTAModal visible={isModalVisible} onClose={() => setModalVisible(false)} />
      {!isModalVisible && <DrawerNavigator />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    height: '70%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollViewContent: {
    flex: 1,
    marginBottom: 10,
  },
  scrollText: {
    fontSize: 14,
    lineHeight: 20,
  },
  acceptButton: {
    height: 50, // Aumentado según la recomendación
    backgroundColor: '#1C2C5C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconButton: {
    width: 48, // Aumentado para área táctil
    height: 48, // Aumentado para área táctil
    justifyContent: 'center',
    alignItems: 'center',
  },
});
