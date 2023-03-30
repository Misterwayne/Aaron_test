import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import QRcode from "./QRcode"
import Options from "./Options"
import HeadHome from "./HeadHome"
import NavBar from "./NavBar"

export default function TicketScreen({navigation}) {
    return (
      <View>
        <View>
          <HeadHome/>
          <QRcode/>
          <View  style={{alignItems: "center"}}>
            <Text style={{fontWeight: "bold", padding: "8%"}}>
              OU
            </Text>
          </View>
          <Options/>
          <View style={{padding : 20}}>
            </View>
          <NavBar/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
});