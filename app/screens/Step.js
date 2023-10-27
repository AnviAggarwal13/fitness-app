// StepTracker.js
import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Image } from "react-native";
import { Accelerometer } from "expo-sensors";
// import FastImage from "react-native-fast-image";

const Step = () => {
  const [subscription, setSubscription] = useState(null);
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    let prevY = 0;
    let stepCounter = 0;

    const subscribe = Accelerometer.addListener((accelerometerData) => {
      const { y } = accelerometerData;
      const isStep = y > prevY && y > 1;

      if (isStep) {
        stepCounter++;
      }

      prevY = y;
      setSteps(stepCounter);
    });

    setSubscription(subscribe);

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* <FastImage
        source={{ uri: "https://www.pinterest.ch/pin/414823815659119598/?amp_client_id=CLIENT_ID%28_%29&mweb_unauth_id=%7B%7Bdefault.session%7D%7D&from_amp_pin_page=true" }}
        style={styles.gifImage}
      /> */}
      <Image source={require('../../assets/track.gif')}>

      </Image>
      <Text style={styles.stepsText}>Steps: {steps}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
  },
  stepsText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Step;
