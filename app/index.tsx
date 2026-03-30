import { Link, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { Button } from "react-native-paper";
import Animated, { SlideInDown, SlideInLeft, SlideInRight } from "react-native-reanimated";
import styles from "./appStyle";

export default function HomeScreen() {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  //set orientation on your device
  const [orientation, setOrientation] = useState("portrait");
  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get("window");
      if(width<height) {
        setOrientation("portrait");
      } else {
        setOrientation("landscape");
      }
    };
    Dimensions.addEventListener("change", updateOrientation);
  });

  return (
    <>
      <Stack.Screen options={{ title: "Home"}}/>
      <View style={styles.container}>
        <Animated.View style={styles.item} entering={SlideInLeft}>
          <Text>Screen width: {screenWidth}</Text>
        </Animated.View>
        <Animated.View style={styles.item} entering={SlideInRight}>
          <Text>Screen height: {screenHeight}</Text>
        </Animated.View>        
        <Animated.View style={styles.item} entering={SlideInDown}>
          <Text>Orientation: {orientation}</Text>
        </Animated.View>
        <Link href="/userList" asChild>
          <Button style={styles.button}>GO TO User List</Button>
        </Link>
      </View>
    </>
  );
}

