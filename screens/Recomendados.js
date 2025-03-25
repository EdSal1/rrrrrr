import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Linking, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const apps = [
  { name: 'Vortex', icon: require('../assets/images/vortex.png'), youtube: 'https://www.youtube.com/channel/UCYER9fJJgpIPrq53gcOnWjA', tiktok: 'https://www.tiktok.com/@vortex.emergencia' },
  { name: 'CGMedicina', icon: require('../assets/images/cgmedicina.jpg'), instagram: 'https://www.instagram.com/cgmedicina/profilecard/?igsh=MWVzdzRleXdnN2RuMA==', youtube: 'https://www.youtube.com/channel/UC9uFCQl6-w_mTdftw4k2B2A' },
  { name: 'Dra_Panta', icon: require('../assets/images/drapanta.jpg'), instagram: 'https://www.instagram.com/dra_panta/profilecard/?igsh=MThrN3FydDQwOWxoYg==', tiktok: 'https://www.tiktok.com/@drapanta' },
  { name: 'Evisalud', icon: require('../assets/images/evito.jpg'), instagram: 'https://www.instagram.com/evisalud.oficial/profilecard/?igsh=MTVvcXNjaWs1NG04bg==', facebook: 'https://www.facebook.com/share/15aPnCP41q/' },
  { name: 'Dr Ricardo Carrillo', icon: require('../assets/images/ricardo.jpeg'), youtube: 'https://www.youtube.com/@ricardocarrillo1309/featured', tiktok: 'https://www.tiktok.com/@dr.ricardo_carrillo?lang=es' },
  { name: 'Leto.Med', icon: require('../assets/images/leto.png'), facebook: 'https://www.facebook.com/share/1B3B5Jpd4e/', instagram: 'https://www.instagram.com/leto.med/profilecard/?igsh=cmRrMGw1OXBrYWt0', telegram: 'https://t.me/s/Letomed' },
  { name: 'memesalmenara1', icon: require('../assets/images/almenara.jpg'), instagram: 'https://www.instagram.com/memesalmenara1/profilecard/?igsh=MWRnenR5cGpxejVwbg==', facebook: 'https://www.facebook.com/profile.php?id=100063632615732&mibextid=ZbWKwL' },
];

const Recomendados = () => {
  const [selectedApp, setSelectedApp] = useState(null);

  const handleAppPress = (app) => {
    setSelectedApp(app === selectedApp ? null : app);
  };

  const openLink = (url) => {
    if (url) {
      Linking.openURL(url);
    }
  };

  const renderSection = (title, appIndexes) => (
    <>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.grid}>
        {appIndexes.map((index) => {
          const app = apps[index];
          return (
            <View key={index} style={styles.appContainer}>
              <TouchableOpacity onPress={() => handleAppPress(app)}>
                <Image source={app.icon} style={styles.appIcon} />
                <Text style={styles.appName}>{app.name}</Text>
              </TouchableOpacity>
              {selectedApp === app && (
                <View style={styles.buttonContainer}>
                  {app.instagram && (
                    <TouchableOpacity onPress={() => openLink(app.instagram)} style={styles.iconButton}>
                      <Ionicons name="logo-instagram" size={24} color="black" />
                    </TouchableOpacity>
                  )}
                  {app.youtube && (
                    <TouchableOpacity onPress={() => openLink(app.youtube)} style={styles.iconButton}>
                      <Ionicons name="logo-youtube" size={24} color="black" />
                    </TouchableOpacity>
                  )}
                  {app.tiktok && (
                    <TouchableOpacity onPress={() => openLink(app.tiktok)} style={styles.iconButton}>
                      <Ionicons name="logo-tiktok" size={24} color="black" />
                    </TouchableOpacity>
                  )}
                  {app.facebook && (
                    <TouchableOpacity onPress={() => openLink(app.facebook)} style={styles.iconButton}>
                      <Ionicons name="logo-facebook" size={24} color="black" />
                    </TouchableOpacity>
                  )}
                  {app.telegram && app.name === 'Leto.Med' && (
                    <TouchableOpacity onPress={() => openLink(app.telegram)} style={styles.iconButton}>
                      <Ionicons name="paper-plane-outline" size={24} color="black" />
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </View>
          );
        })}
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {renderSection('Canales con contenido que puedes usar', [0, 1, 2, 3, 4])}
        {renderSection('Preparación académica y tips de estudio para el residentado médico', [5])}
        {renderSection('Ocio', [6])}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
  },
  scrollContainer: {
    padding: 10,
    paddingBottom: 50, // Evita que el último elemento quede pegado al borde
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  appContainer: {
    width: '25%',
    marginBottom: 25,
    alignItems: 'center',
  },
  appIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
    borderRadius: 10,
  },
  appName: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  iconButton: {
    marginHorizontal: 10,
  },
});

export default Recomendados;
