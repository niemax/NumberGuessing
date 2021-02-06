import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity, Touchable, } from 'react-native';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: '',
      numGuesses: 1,
      randomNumber: Math.floor(Math.random() * 100) + 1
    };
  }
  
makeAGuess = () => {
  const { guess, numGuesses, randomNumber } = this.state;

  this.setState({
    guess: Number(guess),
    numGuesses: numGuesses++,
  });

  if (guess > randomNumber) {
    Alert.alert('Too high')
  } else if (guess == randomNumber){
    Alert.alert(`You guessed the number in ${numGuesses} guesses.`)
  } else {
    Alert.alert('Too low')
  }
}
  
  render() {
    return (
      <View style={styles.container}>
      <Text style={{ fontSize: 36, color: '#fff'}}>Guess a number between 1-100</Text>

        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(guess) => this.setState({guess})}
        />

        <TouchableOpacity 
        style={styles.button}
        onPress={this.makeAGuess}
        >
        <Text style={{color: '#fff'}}>MAKE A GUESS</Text>      
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 100,
    margin: 25,
    borderWidth: 2,
    borderColor: '#fff',
    color: '#fff',
  }, 
  container: {
    marginBottom: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  },
  button: {
    backgroundColor: "#3F3FBF",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
  }
});

export default Game;