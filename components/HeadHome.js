import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default function HeadHome() {
  return (
        <View>
          <View style={styles.ovalBgH}> 
            <View style={styles.ovalBg}>
            </View>
          </View>
          <View style={{alignItems: "center"}}>
            <Image style={{height : 80, width: "40%"}}
                source={require("../assets/logo2.png")}
              />
          </View>
        </View>
  )
}



const styles = StyleSheet.create({
ovalBgH:{
    overflow: 'hidden', 
    width : 60, 
    height: 90, 
    position : 'absolute', 
    borderBottomEndRadius: 260,
    borderBottomLeftRadius: 300,
    left: 145,
    backgroundColor:'transparent',
    transform: [
    {scaleX: 7}
    ]
  },
  ovalBg:{
    backgroundColor: '#0A9E85',
    width : 100, height: 100,
    transform: [
    {scaleX: 7}
    ]
  },
})