import React from 'react';
import { StyleSheet, Text, ScrollView, Linking, TouchableOpacity, View } from 'react-native';

const enlaces = [
  { id: 1, text: 'AMAZONAS', color: '#673AB7', url: 'https://www.gob.pe/regionamazonas-diresa', subText: 'Mismo formato gop.pe' },
  { id: 2, text: 'ANCASH', color: '#4CAF50', url: 'https://diresancash.gob.pe/', subText: 'Aparece en forma de ventana emergente en página inicial' },
  { id: 3, text: 'APURIMAC', color: '#4CAF50', url: 'https://www.diresaapurimac.gob.pe/web/serums/', subText: 'Información de Apurímac' },
  { id: 4, text: 'AREQUIPA', color: '#2196F3', url: 'https://www.saludarequipa.gob.pe/serums/', subText: 'Puedes encontrar información en página inicial, no siempre se actualiza' },
  { id: 5, text: 'AYACUCHO', color: '#673AB7', url: 'https://www.saludayacucho.gob.pe/index.php/serum/', subText: 'Recursos en Ayacucho' },
  { id: 6, text: 'CAJAMARCA' , color: '#673AB7', url: 'https://www.diresacajamarca.gob.pe/portal/mn/2150' , subText: 'Existe información en página inicial, no siempre se actualiza' },
  { id: 7, text: 'CALLAO' , color: '#673AB7', url: 'https://www.gob.pe/regioncallao-diresa'  , subText: 'Mismo formato gop.pe' },
  { id: 8, text: 'CUSCO' , color: '#4CAF50', url: 'http://www.diresacusco.gob.pe/serums.php' , subText: 'Con informacion para el serumista' },
  { id: 9, text: 'HUANCAVELICA'  , color: '#673AB7', url: 'https://www.diresahuancavelica.gob.pe/index.php#'  , subText: 'Cuenta con boton, pero sin enlace al momento del desarrollo de la presente aplicacion/web' },
  { id: 10, text: 'HUANUCO'  , color: '#4CAF50', url: 'https://rrhh.diresahuanuco.gob.pe/serums'  , subText: 'Con informacion para el serumista' },
  { id: 11, text: 'ICA'  , color: '#673AB7', url: 'https://www.gob.pe/regionica-diresa'  , subText: 'Mismo formato gop.pe' },
  { id: 12, text: 'JUNIN'  , color: '#4CAF50', url: 'https://www.diresajunin.gob.pe/documentos/' , subText: 'Con informacion para el serumista' },
  { id: 13, text: 'LA LIBERTAD' , color: '#4CAF50', url: 'https://diresalalibertad.gob.pe/desarrollo-inovacion-e-investigacion/' , subText: 'Con informacion para el serumista' },
  { id: 14, text:'LAMBAYEQUE' , color: '#673AB7', url: 'https://www.gob.pe/regionlambayeque-geresa', subText: 'Mismo formato gop.pe' },
  { id: 15, text: 'LIMA CENTRO' , color: '#4CAF50', url: 'https://dirislimacentro.gob.pe/serums/' , subText: 'Con informacion para el serumista' },
  { id: 16, text: 'LIMA ESTE' , color: '#4CAF50', url: 'https://www.dirislimaeste.gob.pe/Serums.asp', subText: 'Con informacion para el serumista' },
  { id: 17, text: 'LIMA NORTE' , color: '#673AB7', url: 'https://www.gob.pe/dirislimanorte', subText: 'Mismo formato gop.pe' },
  { id: 18, text: 'LIMA SUR' , color: '#673AB7', url: 'https://www.gob.pe/dirislimasur', subText: 'Mismo formato gop.pe' },
  { id: 19, text: 'LORETO' , color: '#4CAF50', url: 'https://geresaloreto.gob.pe/Serums.php', subText: 'Con informacion para el serumista' },
  { id: 20, text: 'MADRE DE DIOS' , color: '#2196F3', url: 'http://sis.diresamdd.gob.pe:8000/convocatorias/serums', subText: 'Informacion sobre otras potulaciones?' },
  { id: 21, text: 'MOQUEGUA' , color: '#673AB7', url: 'https://www.gob.pe/regionmoquegua-diresa', subText: 'Mismo formato gop.pe' },
  { id: 22, text: 'PASCO' , color: '#4CAF50', url: 'https://diresapasco.gob.pe/' , subText: 'Si sube, pero se debe buscar la informacion' },
  { id: 23, text: 'PIURA' , color: '#673AB7', url: 'https://www.gob.pe/regionpiura-diresa', subText: 'Mismo formato gop.pe' },
  { id: 24, text: 'PUNO' , color: '#4CAF50', url: 'https://www.diresapuno.gob.pe/' , subText: 'Con informacion para el serumista' },
  { id: 25, text:  'SAN MARTIN'  , color: '#673AB7', url: 'https://www.gob.pe/regionsanmartin-diresa', subText: 'Mismo formato gop.pe' },
  { id: 26, text:  'TACNA'  , color: '#673AB7', url: 'https://www.gob.pe/regiontacna-diresa', subText: 'Mismo formato gop.pe' },
  { id: 27, text:  'TUMBES'  , color: '#4CAF50', url: 'https://mail.diresatumbes.gob.pe/index.php/institucional/proceso-serums' , subText: 'Con informacion para el serumista' },
  { id: 28, text:  'UCAYALI'  , color: '#673AB7', url: 'https://www.gob.pe/regionucayali-diresa', subText: 'Mismo formato gop.pe' },



  // Agrega el resto de las regiones aquí
];

const Region = () => {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Encabezado */}
      <Text style={styles.initialText}>
      Encuentra a continuación los enlaces a las diferentes DIRESAS, GORE y otros recursos útiles relacionados con el SERUMS, muchas regiones presentan informacion desactualizada, por lo que revisar su red social te AYUDARA, y tambien visitar de forma presencial dicha institucion, porque a veces suelen colocar informacion sobre los pagos, o papeles a presentar, segun la modalidad a la que te presentes, y la region, es probable que en algun momento los enlaces colocados sean dados de baja, o se hayan migrado a otra pagina web. No olvides revisar sus redes sociales de dichas instituciones, suelen subir su informacion ahi tambien.
      </Text>

      {/* Botones */}
      {enlaces.map((enlace) => (
        <TouchableOpacity
          key={enlace.id}
          style={[styles.button, { backgroundColor: enlace.color }]}
          onPress={() => handlePress(enlace.url)}
        >
          <Text style={styles.buttonText}>{enlace.text}</Text>
          <Text style={styles.subText}>{enlace.subText}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  initialText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subText: {
    color: '#d3d3d3',
    fontSize: 12,
    marginTop: 5,
  },
});

export default Region;
