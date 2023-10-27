// FitnessDashboard.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, TouchableOpacity ,TextInput} from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-ionicons'
import { Ionicons } from '@expo/vector-icons';
import   { useState, useEffect } from 'react';
// import {
//   AsyncStorage,
// } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = ({ navigation }) => {
  const [fitnessGoals, setFitnessGoals] = useState('');
  const [waterGlasses, setWaterGlasses] = useState(0);


  const incrementWaterIntake = () => {
    setWaterGlasses(waterGlasses + 1);
    // Save water intake to AsyncStorage
    AsyncStorage.setItem('waterIntake', (waterGlasses + 1).toString());
  };
  
  const decrementWaterIntake = () => {
    if (waterGlasses > 0) {
      setWaterGlasses(waterGlasses - 1);
      // Save water intake to AsyncStorage
      AsyncStorage.setItem('waterIntake', (waterGlasses - 1).toString());
    }
  };
  return (
    <ScrollView style={styles.container}>
        <SafeAreaView>
        <View style = {styles.header}> 
            <Image  source={require('../../assets/Welcome.jpg')} style={styles.profileImage} /> 
            <View style = {styles.userInfo}>
                <Text style = {styles.userEmail}>Hello, Welcome</Text>
                <Text style = {styles.userName}>John Doe</Text>
                {/* <Icon name ='notifications'></Icon> */}
                {/* <Ionicons name='notifications' style={styles.bell}></Ionicons> */}
                <View style={styles.bellIconContainer}>
          <Ionicons name='notifications' style={styles.bell} />
        </View>
                {/* <ion-icon name="notifications-outline"></ion-icon> */}
            </View>

        </View>
      
      <Card containerStyle={styles.card}>
        <Text style={styles.cardTitle}>Your Progress</Text>
        <Text>Your weekly progress data goes here.</Text>
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardTitle}>Today's Workout</Text>
        <Text>Details of today's workout will be shown here.</Text>
        <Button
          title="Start Workout"
          onPress={() => {
            // Navigate to the workout screen when the button is pressed
            navigation.navigate('Home');
          }}
        />
      </Card>

      <Card containerStyle={styles.card}>
  <Text style={styles.cardTitle}>Your Goals</Text>
  <Text>Your fitness goals and progress towards them.</Text>
  <TextInput
    style={styles.inputBox}
    placeholder="Enter your fitness goals"
    value={fitnessGoals}
    onChangeText={(text) => setFitnessGoals(text)}
  />
  <Button
    title="Save Goals"
    onPress={() => { 
      AsyncStorage.setItem('fitnessGoals', fitnessGoals);
    }}
  />
</Card>


<Card containerStyle={styles.card}>
  <Text style={styles.cardTitle}>Water Consumption</Text>
  <Text>Today's water intake: {waterGlasses}/8 glasses (64 oz).</Text>
  <View style={styles.waterButtons}>
    <TouchableOpacity onPress={decrementWaterIntake}>
      <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
    <Text style={styles.glassesText}>{waterGlasses}/8</Text>
    <TouchableOpacity onPress={incrementWaterIntake}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  </View>
</Card>

      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
    marginTop:30,
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
      width:'100%'
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
    userInfo: {
      marginLeft: 20,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      userEmail: {
        fontSize: 14,
        color: '#777',
      },
      card: {
        marginBottom: 15,
      },
      cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      bell:{
        fontSize:20,
      },
      bellIconContainer: {
        position: 'absolute',
        right: 0,
        top: 15,
      }

      ,
      inputBox: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginTop: 10,
      },
      waterButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
      },
      buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      glassesText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    });

export default Dashboard;
