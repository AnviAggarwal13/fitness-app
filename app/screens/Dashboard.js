// FitnessDashboard.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-ionicons'
import { Ionicons } from '@expo/vector-icons';

const Dashboard = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
        <SafeAreaView>
        <View style = {styles.header}>
            <TouchableOpacity onPress={navigation.navigate('Home')}>
            <Image  source={require('../../assets/Welcome.jpg')} style={styles.profileImage} />
            </TouchableOpacity>
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
        {/* Add charts or progress bars to visualize goals and progress */}
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.cardTitle}>Fitness Programs</Text>
        <Text>View and select fitness programs or plans.</Text>
        {/* List of available fitness programs with images and descriptions */}
      </Card>
      <Card containerStyle={styles.card}>
        <Text style={styles.cardTitle}>Water Consumption</Text>
        <Text>Today's water intake: 8 cups (64 oz).</Text>
        <Button
          title="Log Water Intake"
          onPress={() => {
            // Add logic to log water intake
          }}
        />
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
    });

export default Dashboard;
