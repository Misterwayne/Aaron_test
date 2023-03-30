import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import {useState} from "react";
import { Linking } from 'react-native';
import Head from "./Head"


export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [trigger, setTrigger] = useState(true);

    return (
      <View style={styles.container}>
      <Head/>
        <View style={{flexDirection:'row',marginBottom: -8, paddingTop:20, paddingLeft: 10}}>
          <Text style={{fontWeight: 'bold'}}>
          Email
          </Text>
        </View>
        <View>
          <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  keyboardType="email-address"
                  style={styles.input}
          />
        </View>
        <View style={{flexDirection:'row', paddingLeft: 10}}>
          <Text style={{textAlign :'right',marginBottom: -8, paddingTop:20, fontWeight: 'bold'}}>
          Mot de passe
          </Text>
        </View>
          <SafeAreaView style={styles.container}>
            <View style={styles.parent}>
              <TextInput
                    placeholder="Mot de passe"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    keyboardType="visible-password"
                    secureTextEntry={trigger}
                    onSubmitEditing={() => alert("Mot de passe incorrect")}
              />
              <TouchableOpacity
                style={styles.closeButtonParent}
                onPress={() => setTrigger(!trigger)}
              >
              <Image
                style={styles.img}
                source={require("../assets/eye-icon.webp")}
              />
              </TouchableOpacity>
        </View>
      </SafeAreaView>
        <View style={{flexDirection:'row-reverse', paddingTop: 20}}>
          <Text onPress={() => Linking.openURL('https://aaron-tickets.fr/')}>
            Mot de passe oubliée ?
          </Text>
        </View>
        <View style={{alignItems: "center", paddingTop: 50}}>
          <View style={styles.button}>
            <TouchableOpacity style={{}} onPress={() => navigation.navigate('Ticket')}>
              <Text style={{paddingTop: 10, color: "white"}}>Connexion</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 30}}>
            <Text style={{fontWeight: 'bold'}}>
             Pas encore membre ?
            </Text>
            <Text style={{color: "blue", paddingLeft: 5}}
              onPress={() => Linking.openURL('https://aaron-tickets.fr/')}>
              S'incrire
            </Text>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 24,
  },
  input: {
        backgroundColor: "#fff",
        padding: 10,
        width: "100%",
        marginTop: 15,
        color: "#000",
        justifyContent: 'center',
        borderRadius: 100,
    },
    button: {
      backgroundColor: '#FF8000',
      borderRadius: 100,
      width: "60%",
      alignItems: "center",
      height : 40
    },
    img: {
      width: 20,
      height: 20,
    },
    parent: {
    backgroundColor: "#fff",
    padding: 10,
    width: "100%",
    marginTop: 15,
    color: "#000",
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  closeButtonParent: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
});
