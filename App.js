import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState ('Click the Button!')
  return (
    <View style={styles.screen} >
      <View style={styles.inputcontainer} >
        <TextInput  placeholder="To do" style={styles.textinput} />
        <Button title="Add" />
      </View>
    </View>
  );
  }



  
  const styles = StyleSheet.create({
    screen: {
      padding:55
    },
    inputcontainer:{
      flexDirection:'row', 
      justifyContent:'space-between', 
      alignItems:'center'
    },
    textinput:{
      width:"85%", 
        borderColor:'black', 
        borderWidth:1, 
        padding:5
    },
  });