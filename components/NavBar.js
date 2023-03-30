import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
        <View style={styles.navbar}>
              <TouchableOpacity
                onPress={() => alert("Empreinte")}
              >
              <Image style={styles.navbarImg}
              source={require("../assets/Empreint.png")}
              />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => alert("Tickets")}
              >
              <Image style={styles.navbarImg}
              source={require("../assets/Tickets.png")}
              />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => alert("Offres")}
              >
              <Image style={styles.navbarImg}
              source={require("../assets/Offres.png")}
              />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => alert("Profil")}
              >
              <Image style={styles.navbarImg}
              source={require("../assets/Profile.png")}
              />
              </TouchableOpacity>
          </View>
  )
}

const styles = StyleSheet.create({
  navbarImg: {
    width: 100,
    height: 100,
  },
  navbar : {
     flexDirection: "row",
     gap: 20,
     backgroundColor: "white",
     width: "100%",
     shadowColor: "#000000",
    shadowOpacity:  0.12,
    shadowRadius: 10.24,
    elevation: 13,
  },
})