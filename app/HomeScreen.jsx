import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import VideoCard from "../components/VideoCard";
import Horse from "../assets/Video/Horse.mp4";

const { width, height } = Dimensions.get("window");

const videos = [
  {
    id: "1",
    thumbnail:
      "https://images.pexels.com/photos/160590/girls-beauty-makeup-dark-160590.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: Horse,
  },
  {
    id: "2",
    thumbnail:
      "https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: Horse,
  },
  {
    id: "3",
    thumbnail:
      "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: Horse,
  },
  {
    id: "4",
    thumbnail:
      "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: Horse,
  },
  {
    id: "5",
    thumbnail:
      "https://images.pexels.com/photos/26691734/pexels-photo-26691734/free-photo-of-photo-of-jellyfish-swimming-underwater.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    video: Horse,
  },
  {
    id: "6",
    thumbnail:
      "https://images.pexels.com/photos/26691734/pexels-photo-26691734/free-photo-of-photo-of-jellyfish-swimming-underwater.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    video: Horse,
  },
  {
    id: "7",
    thumbnail:
      "https://images.pexels.com/photos/26691734/pexels-photo-26691734/free-photo-of-photo-of-jellyfish-swimming-underwater.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    video: Horse,
  },
  {
    id: "8",
    thumbnail:
      "https://images.pexels.com/photos/26691734/pexels-photo-26691734/free-photo-of-photo-of-jellyfish-swimming-underwater.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    video: Horse,
  },
  {
    id: "9",
    thumbnail:
      "https://images.pexels.com/photos/26691734/pexels-photo-26691734/free-photo-of-photo-of-jellyfish-swimming-underwater.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    video: Horse,
  },
  {
    id: "10",
    thumbnail:
      "https://images.pexels.com/photos/26691734/pexels-photo-26691734/free-photo-of-photo-of-jellyfish-swimming-underwater.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    video: Horse,
  },
  // Add more videos here...
];

const HomeScreen = ({ navigation }) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const handlePress = ({ video }) => {
    navigation.navigate("VideoPlayer", { video: video.video });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  const onGestureEvent = (event) => {
    translateX.value = withSpring(event.translationX);
    translateY.value = withSpring(event.translationY);
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          horizontal
          pagingEnabled
        >
          {Array(12)
            .fill(0)
            .map((_, columnIndex) => (
              <View key={columnIndex} style={styles.column}>
                {videos.map((video) => (
                  <View key={video.id} style={styles.row}>
                    <VideoCard
                      video={video}
                      onPress={() => handlePress(video)}
                    />
                  </View>
                ))}
              </View>
            ))}
        </ScrollView>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 2, // Increase size to allow diagonal scrolling
    height: height * 4,
    backgroundColor: "rgb(41, 33, 33)",
    flexDirection: "row",
    padding: 10,
  },
  scrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start", // Align items to the start of the row
  },
  column: {
    flex: 1, // Make each column take equal width
    marginBottom: 10,
  },
  row: {
    marginBottom: 15,
  },
});

export default HomeScreen;
