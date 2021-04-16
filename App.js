import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal ] = useState('');
  const [courseGoals, setCourseGoals] = useState ([]);

  const goalInputHandler=(enteredText) =>{
    setEnteredGoal(enteredText);

  };
  
  const addGoalHandler = () => {
    setCourseGoals (currentCourseGoals => [...currentCourseGoals, enteredGoal]);

  };
  
  const [outputText, setOutputText] = useState ('Click the Button!')
  return (
    <View style={styles.screen} >
      <View style={styles.inputcontainer} >
        <TextInput  placeholder="To do" style={styles.textinput} onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        <View style={styles.button} ><Button title="Add" onPress={addGoalHandler} /></View>
      </View>
    <View>
      {courseGoals.map ((goal) => <Text>{goal}</Text> )}
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
      alignItems:'center',
      borderRadius: 30
      
    },
    button: {
      backgroundColor: 'black',
      borderRadius: 20
    },

    textinput:{
      justifyContent: 'center',
      width:"85%", 
      borderColor:'black',
      borderWidth: 3,
      padding: 6,
      height:50,
      textAlign: 'left',
      borderRadius: 20,
      fontSize: 16
    },
  });