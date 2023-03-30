import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function Options() {
  return(
      <View style={{flexDirection: "row", alignItems: "center", gap: 20}}>
          <View style={styles.blocks}>
          <TouchableOpacity
                onPress={() => alert("Photo")}
              >
            <Text style={{paddingTop: 10}}>Prendre</Text>
            <Text>en photo</Text>
            <Image style={styles.img}
            source={require("../assets/Picture.png")}
            />
            </TouchableOpacity>
          </View>
          <View style={{padding : 30}}>
          </View>
          <View style={styles.blocks}>
          <TouchableOpacity
                onPress={() => alert("Importer")}
              >
            <Text style={{paddingTop: 10}}>Importer</Text>
            <Image style={styles.img}
            source={require("../assets/import.png")}
            />
            </TouchableOpacity>
          </View>
      </View>
  )
}



const styles = StyleSheet.create({
  blocks: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 110,
    height: 110,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOpacity:  0.12,
    shadowRadius: 10.24,
    elevation: 13,
    padding : 10,
    left : 50
  },
  img: {
    width: 50,
    height: 50,
  }
})