// ResultScreen.js

import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";

const ResultScreen = () => {
  const mainImage = require("../../assets/img4.png"); // Your main image path

  const data = [
    {
      id: "1",
      title: "Image 1",
      link: "https://google.com",
      image: require("../../assets/img1.png"),
    },
    {
      id: "2",
      title: "Image 2",
      link: "https://google.com",
      image: require("../../assets/img2.png"),
    },
    {
      id: "3",
      title: "Image 3",
      link: "https://google.com",
      image: require("../../assets/img3.png"),
    },
    {
      id: "4",
      title: "Image 4",
      link: "https://google.com",
      image: require("../../assets/img4.png"),
    },
    {
      id: "5",
      title: "Image 5",
      link: "https://google.com",
      image: require("../../assets/img5.png"),
    },
    {
      id: "6",
      title: "Image 6",
      link: "https://google.com",
      image: require("../../assets/img6.png"),
    },
    {
      id: "7",
      title: "Image 7",
      link: "https://google.com",
      image: require("../../assets/img7.png"),
    },
    {
      id: "8",
      title: "Image 8",
      link: "https://google.com",
      image: require("../../assets/img8.png"),
    },
    {
      id: "9",
      title: "Image 9",
      link: "https://google.com",
      image: require("../../assets/img9.png"),
    },

    // Add more data as needed
  ];

  const handleNavigation = (link: any) => {
    Linking.openURL(link)
      .then((data) => {
        console.log("Link opened:", data);
      })
      .catch(() => {
        console.error("Error opening link");
      });
  };

  return (
    <View style={styles.container}>
      {/* Display the main image */}
      <Image source={mainImage} style={styles.mainImage} />

      {/* Display the horizontal list of small images */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.smallImageContainer}>
            {/* Display small image */}
            <Image source={item.image} style={styles.smallImage} />

            {/* Display title and link on the right */}
            <View style={styles.smallImageInfo}>
              <Text style={styles.smallImageTitle}>{item.title}</Text>
              <TouchableOpacity onPress={() => handleNavigation(item.link)}>
                <Text style={styles.smallImageLink}>{item.link}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainImage: {
    width: 320, // Adjust the size as needed
    height: 400, // Adjust the size as needed
    marginVertical: 20,
  },
  smallImageContainer: {
    marginRight: 10,
    marginTop: 20,
  },
  smallImage: {
    width: 80, // Adjust the size as needed
    height: 80, // Adjust the size as needed
    borderRadius: 5,
  },
  smallImageInfo: {
    marginTop: 5,
    alignItems: "center",
  },
  smallImageTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  smallImageLink: {
    color: "blue",
    fontSize: 10,
  },
});

export default ResultScreen;
