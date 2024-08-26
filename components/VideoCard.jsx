import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";

const VideoCard = ({ video, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150, // Adjusted width
    margin: 10,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 5,
  },
  thumbnail: {
    width: "100%",
    height: 200, // Adjusted height
    resizeMode: "cover", // Ensures the image covers the container
  },
});

export default VideoCard;
