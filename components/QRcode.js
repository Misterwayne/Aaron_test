import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

export default function QRcode() {
  return (
  <View>
    <View style={{alignItems : "center", padding : "13%"}}>
        <Text style={{fontSize: "13px"}}>
          Presentez votre QR code a la caisee
        </Text>
        <Text style={{fontSize: "13px"}}>
          pour ajouter votre ticket.
          </Text>
      </View>
      <View style={{alignItems: "center"}}>
        <Image style={styles.qrcode}
        source={require("../assets/QRcode.png")}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  qrcode: {
    borderRadius: 20,
    height: 220,
    width: 220
  },
})