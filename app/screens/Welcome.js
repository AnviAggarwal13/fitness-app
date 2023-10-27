// WelcomeScreen.js

import React from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';
// import { Button } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Welcome.jpg')}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Welcome to Fitness Edge
      </Text>
      <Button
        title="Get Started"
        buttonStyle={styles.button}
        onPress={() => {
          // Handle button press (navigate to the next screen, for example)

        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Set your desired background color
  },
  image: {
    width: 200, // Adjust the width and height as needed
    height: 200,
    marginBottom: 20,
    resizeMode:'cover',
    flex: 1,
    width: '100%',
    height: '100%',
    position:'absolute'
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  button: {
    backgroundColor: 'blue', // Customize the button color
  },
});

export default WelcomeScreen;
