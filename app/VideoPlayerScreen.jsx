import React, { useState, useRef } from "react";
import { View, StyleSheet , Pressable, TouchableOpacity} from "react-native";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons"; // Import the icon library
import Horse from "../assets/Video/Cake.mp4";

const VideoPlayerScreen = ({ route, navigation }) => {
  const { video } = route.params;
  const [isPlaying, setIsPlaying] = useState(true); // State to track if the video is playing
  const videoRef = useRef(null); // Reference to the Video component

  const togglePlayback = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync(); // Pause the video
      } else {
        await videoRef.current.playAsync(); // Resume the video
      }
      setIsPlaying(!isPlaying); // Toggle the playing state
    }
  };

  return (
    <View style={styles.container}>
      {/* Cross icon */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="close" size={30} color="white" />
      </TouchableOpacity>

      <Pressable style={styles.videoContainer} onPress={togglePlayback}>
        <Video
          ref={videoRef} // Attach the ref to the Video component
          source={Horse} // The video source
          style={styles.video}
          // useNativeControls
          resizeMode="contain" // Resize mode for video
          shouldPlay={isPlaying} // Control playback with the isPlaying state
          fullscreen // Play the video in fullscreen
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black", // Optional: background color for better contrast
    position:'relative',
  },
  videoContainer: {
    width: "90%",
    height: "100%", // Adjust as needed
  },
  video: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1, // Ensure the button is above the video
    backgroundColor: "black",
    borderRadius: 50,
  },
});

export default VideoPlayerScreen;
