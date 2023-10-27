import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Pressable,
  } from "react-native";
  import React, { useState, useContext } from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { useDispatch, useSelector } from "react-redux";
import { addCalories, addCompleted, addMinutes, addWorkouts } from "../redux/workoutActions";

  const FitScreen = () => {
    const route = useRoute();
    // console.log(route.params);
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const excersise = route.params.excersises;
    const current = excersise[index];
    // console.log(current, "first excersise");
  
    
  const dispatch = useDispatch();
  const calories = useSelector((state) => state.workout.totalCalories);
  const minutes = useSelector((state) => state.workout.totalMinutes);
  const workouts = useSelector((state) => state.workout.totalWorkouts);
  const completed = useSelector((state) => state.workout.totalCompleted);
    console.log(completed, "completed excersise");
    return (
      <SafeAreaView>
        <Image
          style={{ width: "100%", height: 370 }}
          source={{ uri: current.image }}
        />
  
        <Text
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          {current.name}
        </Text>
  
        <Text
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            fontSize: 38,
            fontWeight: "bold",
          }}
        >
          x{current.sets}
        </Text>
        {index + 1 >= excersise.length ? (
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={{
              backgroundColor: "blue",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 30,
              borderRadius: 20,
              padding: 10,
              width: 150,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
                color: "white",
              }}
            >
              DONE
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate("Rest");
              dispatch(addCompleted([...completed, current.name]));
              dispatch(addWorkouts(workouts + 1));
              dispatch(addMinutes(minutes + 2.5));
              dispatch(addCalories(calories + 6.3));
              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={{
              backgroundColor: "blue",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 30,
              borderRadius: 20,
              padding: 10,
              width: 150,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
                color: "white",
              }}
            >
              DONE
            </Text>
          </Pressable>
        )}
  
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
          }}
        >
          <Pressable
            disabled={index === 0}
            onPress={() => {
              navigation.navigate("Rest");
  
              setTimeout(() => {
                setIndex(index - 1);
              }, 2000);
            }}
            style={{
              backgroundColor: "green",
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
              width: 100,
            }}
          >
            <Text
              style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
            >
              PREV
            </Text>
          </Pressable>
          {index + 1 >= excersise.length ? (
            <Pressable
              onPress={() => {
                navigation.navigate("Home");
              }}
              style={{
                backgroundColor: "green",
                padding: 10,
                borderRadius: 20,
                marginHorizontal: 20,
                width: 100,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                SKIP
              </Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                navigation.navigate("Rest");
  
                setTimeout(() => {
                  setIndex(index + 1);
                }, 2000);
              }}
              style={{
                backgroundColor: "green",
                padding: 10,
                borderRadius: 20,
                marginHorizontal: 20,
                width: 100,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                SKIP
              </Text>
            </Pressable>
          )}
        </Pressable>
      </SafeAreaView>
    );
  };
  
  export default FitScreen;
  
  const styles = StyleSheet.create({});
  