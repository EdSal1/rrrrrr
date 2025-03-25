import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Modal } from 'react-native';
import { Linking } from 'react-native';

const Fuas = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');

  const filas = [
    { nombre: 'TIPS', screen: 'TipsFuas' },
    { nombre: 'FUAS CHICLAYO EJEMPLO, SE ENCUENTRAN EN BOTON CARTILLAS ', url: 'https://redsaludchiclayo.com/mvc/view/USPP#' },
    { nombre: 'FUAS JUNIN 2019 EJEMPLO', url: 'https://www.diresajunin.gob.pe/ver_documento/id/cvd142857b64709a82c298fd8d5543ae8548abdd1.pdf/' },
    { nombre: 'CODIGOS DIRESAS', url: 'https://drive.google.com/file/d/1fxPtppgXXQz8Jy6uCeURU_dEZDSTuLXY/view' },
    { nombre: 'CODIGOS ETNIAS', url: 'https://cdn.www.gob.pe/uploads/document/file/2799180/Actividades%20de%20Registro%20y%20codificaci%C3%B3n%20de%20Pueblos%20Indigenas.pdf?v=1643755444' },
    { nombre: '001 CRED', url: 'https://drive.google.com/file/d/1lhGP5TwuPnMqnBQ-nBULhaYlzZRgutw5/view' },
    { nombre: '118 CRED 5-9 años', url: 'https://drive.google.com/file/d/1HvSWGnPso6PHqcHLr7tIkIbU8bUoklOX/view' },
    { nombre: '119 CRED 10-11 años', url: 'https://drive.google.com/file/d/17PpHeaUAQWZ1LROIlKuEWYLN5VpyEmpj/view' },
    { nombre: '016 ESTIMULACION TEMPRANA', url: 'https://drive.google.com/file/d/1_nTicA9kG45THel4wTUvrKEhe2WT2-nX/view' },
    { nombre: '005 CONSEJERIA NUTRICIONAL-RIESGO', url: 'https://drive.google.com/file/d/13j7UXoL20ex4hk5IaWKw-lGv9P-O76It/view' },
    { nombre: '005 CONSEJERIA NUTRICIONAL-DEFICIENCIA', url: 'https://drive.google.com/file/d/16kR7gBwvkhCfrv6A09mrpNh72sHixvyd/view' },
    { nombre: '007 SUPLEMENTACION DE MICRONUTRIENTES', url: 'https://drive.google.com/file/d/1W77yicuMfIzyA6uMSClN3Kkjsz8TyyXv/view' },
    { nombre: '008 PROFILAXIS ANTIPARASITARIA', url: 'https://drive.google.com/file/d/1wWApFVUR1aaFj1PDdBUYTzm1iVA3tnVb/view' },
    { nombre: '017 CRED DEL ADOLESCENTE', url: 'https://drive.google.com/file/d/1B9Lgr-X-uElyYwdkmPKhWxEhEg4JcwaK/view' },
    { nombre: '019 DETECCION DE AGUDEZA VISUAL', url: 'https://drive.google.com/file/d/1DhW8uRuerqiZezjRdrHoxvAePpvoCXIM/view' },
    { nombre: '009 CPN CONTROL PRENATAL', url: 'https://drive.google.com/file/d/1wD35M_e4OTTv4dgzkfZqtKaVhkWmbadX/view' },
    { nombre: '009 CPN-ARO CONTROL PRENATAL-ARO', url: 'https://drive.google.com/file/d/1DOXqQfu3EZ9onXnx7cNQ6T6M15V0liFI/view' },
    { nombre: '010 CONTROL DE PUERPERIO', url: 'https://drive.google.com/file/d/1s6oO00hpThTgMQ1SvD9khAWUgbK1ME_7/view' },
    { nombre: '011 BATERIA DE GESTANTE', url: 'https://drive.google.com/file/d/1uPVcKko6we7WAOk_zRgoroZZJf5cv5PA/view' },
    { nombre: '011 BATERIA DE GESTANTE REFERENCIA', url: 'https://drive.google.com/file/d/1xVu2sWkRZwJeorLiFbicPyngNVl8POQI/view' },
    { nombre: '018 SALUD REPRODUCTIVA CONSEJERIA', url: 'https://drive.google.com/file/d/1ChkUICyZMAb9iZLx4zfxr-QvrM8Xlzur/view' },
    { nombre: '018 SALUD REPRODUCTIVA-DIU', url: 'https://drive.google.com/file/d/140hRSVNfZ_JbUoxSspoYPuaCrnO9L7qh/view' },
    { nombre: '018 SALUD REPRODUCTIVA-DIU CONTROL', url: 'https://drive.google.com/file/d/1w-1JMYYUDmZvZOkH5v4QbRPW2_wE2Jvb/view' },
    { nombre: '018 SALUD REPRODUCTIVA HORMONALES', url: 'https://drive.google.com/file/d/1cKS_WF5ogU61uRfzg57tpVjzJX3r0Euw/view' },
    { nombre: '018 SALUD REPRODUCTIVA BARRERA', url: 'https://drive.google.com/file/d/1v-Qg1ANZi3ah_iW4yDYoKXlVGsESlgBa/view' },
    { nombre: '018 SALUD REPRODUCTIVA IMPLANTES', url: 'https://drive.google.com/file/d/1rHLOem5QqkSy6bi5VdDSsvIMtgxkvpmi/view' },
    { nombre: '024 PAP PAPANICOLAU', url: 'https://drive.google.com/file/d/1T9sVEkvuQtc4cYsfcp2An4S8jj45E9l0/view' },
    { nombre: '015 PREGNOSTICON', url: 'https://drive.google.com/file/d/1MzdjRq7RFzIXP539BfVjSyKja486ewPD/view' },
    { nombre: '020 SALUD BUCAL', url: 'https://drive.google.com/file/d/1wE82GnMkSHvDIUHPjjF6oMAgt8nrZHGz/view' },
    { nombre: '021 PREVENCION DE CARIES', url: 'https://drive.google.com/file/d/11ndVAAgFGfM-DHDVlpxjR-75zUCPtBWa/view' },
    { nombre: '911', url: 'https://drive.google.com/file/d/1S8CFxB-B-P_3UjdfjToZPm0cNOHNdM2k/view' },
    { nombre: '022 SALUD MENTAL NORMAL', url: 'https://drive.google.com/file/d/1MzIi99phIbUZT9IjYdzvkJRY7A6GTRls/view' },
    { nombre: '022 SALUD MENTAL PESQUIZA POSITIVA', url: 'https://drive.google.com/file/d/1swf1tKOOwJzRYpsDPva_yt82WBAORu_2/view' },
    { nombre: '902 ATENCION PRECONCEPCIONAL DE 18-45 años', url: 'https://drive.google.com/file/d/1PgJnej8Hs2EdautTa9NkV_TyQS_1jCSK/view' },
    { nombre: '903 ATENCION INTEGRAL ADULTO MAYOR DE 60 años', url: 'https://drive.google.com/file/d/19aPfJ_J_3SthyE1DkZ6YT6Ek54Xj5ybU/view' },
    { nombre: '904 ATENCION INTEGRAL JOVEN Y ADULTO 18-59 años', url: 'https://drive.google.com/file/d/1E0DjphL5FxrdDEonTLdFh-CwkVd9Ixob/view' },
    { nombre: '071 APOYO DX (DIAGNOSTICO)', url: 'https://drive.google.com/file/d/1pIalLY80P8mfRkO3D4CoZsCMB1StiWhg/view' },
    { nombre: '906 CONSULTA EXTERNA PSICOLOGO', url: 'https://drive.google.com/file/d/1HIx8LUX7Dg0-FQK21vjJeE_MpE_Wrrk6/view' },
    { nombre: '906 CONSULTA EXTERNA NUTRICIONISTA', url: 'https://drive.google.com/file/d/1RWZ2o4e9m5fvH0bjX5n8uAUYU0vR8Gb3/view' },
    { nombre: '050 ATENCION INMEDIATA DEL RECIEN NACIDO DE 0-2 DIAS', url: 'https://drive.google.com/file/d/1cF2d-q79yxKggnaUvHGssl_G08oqeVeo/view' },
    { nombre: '054 ATENCION PARTO VAGINAL', url: 'https://drive.google.com/file/d/1ZzFzMJR-ujMtB3TBM5UY0_qpmMmD5rnL/view' },
    { nombre: '056 CONSULTA EXTERNA (TODAS LAS EDADES)', url: 'https://drive.google.com/file/d/1HLzR1_ndGJqtzqdGhQOj1_QEmE9oubh5/view' },
    { nombre: '056 CONSULTA EXTERNA NO TRANSMISIBLES', url: 'https://drive.google.com/file/d/1fnle3YP2i4iJbo_sn9FFU7g_OxfxYhNv/view' },
    { nombre: '056 CONSULTA EXTERNA PSIQUIATRICA CSMC', url: 'https://drive.google.com/file/d/11x5Ad_jUQVDH9vjeEj632O6KZCKWYcWy/view' },
    { nombre: '013 ECOGRAFIA', url: 'https://drive.google.com/file/d/1v_k604V09MFKvmBsHfKAxb7QTT0Kmm6b/view' },
    { nombre: '074 TRATAMIENTO DE ITS', url: 'https://drive.google.com/file/d/1CmFjVX-qU8sbl4y4seAlIaS2PmFHXdOi/view' },
    { nombre: '057 OBTURACION SIMPLE', url: 'https://drive.google.com/file/d/1xGyWl7m6zhR1vofg1t8qaIdOXBFIDdtV/view?usp=drive_open' },
    { nombre: '058 OBTURACION COMPUESTA', url: 'https://drive.google.com/file/d/10AoutT0F3j6pnSPOIQv3R_dBlghABFz9/view' },
    { nombre: '059 EXTRACCION DENTAL', url: 'https://drive.google.com/file/d/1_5Z6LpGwcEcZhFu8nUU-O0c0fViaWd0e/view' },
    { nombre: '060 VISITA DOMICILIARIA', url: 'https://drive.google.com/file/d/1eJF649i0N3UilSKS13gPxuVa1BkNyaVm/view' },
    { nombre: '075 VISITA DOMICILIARIA', url: 'https://drive.google.com/file/d/1eJF649i0N3UilSKS13gPxuVa1BkNyaVm/view' },
    { nombre: '001 CRED ANEMIA', url: 'https://drive.google.com/file/d/1UWnjSNrSBuT-GsIbC8uzOGWsO8bPI_ji/view' },
    { nombre: '118 CRED ANEMIA', url: 'https://drive.google.com/file/d/1kJ2fdNVRFJHlqkcCb1rle0btnbIwJtvb/view' },
    { nombre: '119 CRED ANEMIA', url: 'https://drive.google.com/file/d/1kJ2fdNVRFJHlqkcCb1rle0btnbIwJtvb/view' },
    { nombre: '300 TELEMEDICINA', url: 'https://drive.google.com/file/d/1yke_s9haBeHR0M8YmdgX8AfxzI8rT4fM/view' },
    { nombre: 'TODAS LAS FUAS', url: 'https://drive.google.com/drive/u/2/folders/1QYsiI8xSO6K9lIW1onx0FR6YYF2z9jZ2' },
    // Resto de filas
  ];

  // Función para manejar la acción cuando se presiona un elemento
  const handlePress = (item) => {
    if (item.nombre === 'CODIGOS ETNIAS') {
      setSelectedUrl(item.url);
      setModalVisible(true);
    } else if (item.url) {
      Linking.openURL(item.url).catch(err => console.error('Error al abrir el enlace:', err));
    } else if (item.screen) {
      navigation.navigate(item.screen);
    }
  };

  const openLink = () => {
    Linking.openURL(selectedUrl).catch(err => console.error('Error al abrir el enlace:', err));
    setModalVisible(false);
  };

  // Filtrar las filas basadas en el texto de búsqueda
  const filteredFilas = filas.filter(item =>
    item.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>
        Las siguientes FUAs corresponden a modelos adapatados para el año 2024  <Text style={{ fontWeight: 'bold' }}> [Leer TIPS si o si]</Text>. El enlace de ETNIAS te llevará al documento de codificación para atenciones en comunidades. Encuentra el ejemplo de FUA que estás buscando a continuación:
      </Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Buscar FUA"
        value={searchText}
        onChangeText={setSearchText}
      />

      <ScrollView>
        {filteredFilas.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.row}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.text}>{item.nombre}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Vista previa del enlace</Text>
            <Text style={styles.previewText}>{selectedUrl}</Text>
            <TouchableOpacity style={styles.browserButton} onPress={openLink}>
              <Text style={styles.browserButtonText}>Abrir enlace</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffecb3',
  },
  row: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 4,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  previewText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  browserButton: {
    backgroundColor: '#1C2C5C',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  browserButtonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#FC0001',
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  searchBar: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: 'white',
  },
});

export default Fuas;