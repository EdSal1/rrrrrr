import React from 'react';
import { StyleSheet, Text, ScrollView, Linking, TouchableOpacity } from 'react-native';

const enlaces = [
    { id: 1, url: 'https://www.facebook.com/groups/2251699105089118/' },
    { id: 2, url: 'https://www.facebook.com/groups/545026492195698/' },
    { id: 3, url: 'https://www.facebook.com/groups/559415830883675/' },
    { id: 4, url: 'https://www.facebook.com/groups/351591256288401/' },
    { id: 5, url: 'https://www.facebook.com/groups/242667132973506/' },
    { id: 6, url: 'https://www.facebook.com/groups/serumsrecomendable/' },
    { id: 7, url: 'https://www.facebook.com/groups/388547336356508/' },
    { id: 8, url: 'https://www.facebook.com/groups/serumsplazasrecomendadas/' },
    { id: 9, url: 'https://www.facebook.com/groups/289128792254286/' },
    { id: 10, url: 'https://www.facebook.com/groups/534076347298581/' },
    { id: 11, url: 'https://www.facebook.com/groups/401020803308481/' },
    { id: 12, url: 'https://www.facebook.com/groups/663023978532729/' },
    { id: 13, url: 'https://www.facebook.com/groups/1530385737735626/' },
    { id: 14, url: 'https://www.facebook.com/groups/267950930052883/' },
    { id: 15, url: 'https://www.facebook.com/groups/profesionalesserums/' },
    { id: 16, url: 'https://www.facebook.com/groups/1552525334971383/' },
    { id: 17, url: 'https://www.facebook.com/groups/262124730907018/' },
    { id: 18, url: 'https://www.facebook.com/groups/590420212237243/' },
    { id: 19, url: 'https://www.facebook.com/groups/602692351311934/' },
    { id: 20, url: 'https://www.facebook.com/groups/2257735287798650/' },
    { id: 21, url: 'https://www.facebook.com/groups/2044036099149846/' },
    { id: 22, url: 'https://www.facebook.com/groups/1600212753665814/' },
    { id: 23, url: 'https://www.facebook.com/groups/660366958461394/' },
    { id: 24, url: 'https://www.facebook.com/groups/3326750677610626/' },
    { id: 25, url: 'https://www.facebook.com/groups/569025033600407/' },
    { id: 26, url: 'https://www.facebook.com/groups/1691619757763011/' },
    { id: 27, url: 'https://www.facebook.com/groups/1098390690181582/' },
    { id: 28, url: 'https://www.facebook.com/groups/925970691697879/' },
    { id: 29, url: 'https://www.facebook.com/groups/746064130688273/' },
    { id: 30, url: 'https://www.facebook.com/groups/764853501730784/' },
    { id: 31, url: 'https://www.facebook.com/groups/742127770626987/' },
    { id: 32, url: 'https://www.facebook.com/groups/466334278594037/' }
];

const EnlacesScreen = () => {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>
        A continuacion algunos grupos de Facebook, algunos de acceso libre otros con opcion para solicitar unirte, donde tal vez publicaron alguna informacion sobre un establecimiento.Recuerda ver el video para que puedas guiarte. Estos grupos son manejados por terceros, ellos son los encargados de sus respectivos grupos. *Puede que no esten todos los grupos porque estos se van creando periodicamente,  y te apareceran segun te vayas uniendo a estos.       
      </Text>
      {enlaces.map((enlace, index) => (
        <TouchableOpacity key={enlace.id} onPress={() => handlePress(enlace.url)}>
          <Text style={styles.linkText}>{index + 1}. {enlace.url}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
});

export default EnlacesScreen;
