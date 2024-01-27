import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import * as MediaLibrary from "expo-media-library";
import { Camera, CameraType } from "expo-camera";

const DashboardScreen = ({ navigation }: { navigation: any }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [hasCameraPermission, setHasCameraPermission]: any = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [isStudyPressed, setIsStudyPressed] = useState(true);
  const [isCaptureDisabled, setIsCaptureDisabled] = useState(false);

  const cameraRef = useRef(null);

  const studyImagePaths = [
    require("../../assets/img1.png"),
    require("../../assets/img2.png"),
    require("../../assets/img3.png"),
    require("../../assets/img4.png"),
  ];

  const playImagePaths = [
    require("../../assets/img5.png"),
    require("../../assets/img6.png"),
    require("../../assets/img7.png"),
    require("../../assets/img8.png"),
    require("../../assets/img9.png"),
  ];

  const currentImagePaths = isStudyPressed ? studyImagePaths : playImagePaths;

  useEffect(() => {
    setCurrentImageIndex(0);
    setIsStudyPressed(true);
    setCameraOpen(false);
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const handleNextImage = () => {
    if (currentImageIndex < currentImagePaths.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleOpenCamera = () => {
    setCameraOpen(true);
  };

  const handleCloseCamera = () => {
    setCameraOpen(false);
  };

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      try {
        setIsCaptureDisabled(true); // Disable the button
        const options = { quality: 0.5, base64: true };
        const data = await (cameraRef.current as Camera).takePictureAsync(
          options
        );
        setCameraOpen(false);
        console.log("msg - done");
        navigation.navigate("Result");
      } catch (error) {
        console.error("Error taking picture:", error);
      } finally {
        setIsCaptureDisabled(false); // Enable the button after execution
      }
    }
  };

  const handleStudy = () => {
    setCurrentImageIndex(0);
    setIsStudyPressed(true);
  };

  const handlePlay = () => {
    setCurrentImageIndex(0);
    setIsStudyPressed(false);
  };

  return (
    <View style={styles.container}>
      {/* Phase 1: Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome To Beauty MakeUp Style</Text>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          onPress={handleStudy}
          style={[
            styles.optionButton,
            {
              backgroundColor: isStudyPressed ? "green" : "#434343",
              flex: 1,
            },
          ]}
        >
          <Text style={styles.optionButtonText}>Study</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePlay}
          style={[
            styles.optionButton,
            {
              backgroundColor: isStudyPressed ? "#434343" : "green",
              flex: 1,
            },
          ]}
        >
          <Text style={styles.optionButtonText}>Play</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Image
          source={currentImagePaths[currentImageIndex]}
          style={styles.image}
        />

        <View style={styles.navigationButtons}>
          <TouchableOpacity
            onPress={handlePrevImage}
            style={{ flex: 2, alignItems: "center" }}
          >
            <Icon name="arrow-left" size={30} color="black" />
          </TouchableOpacity>

          <Text style={styles.navigationText}>
            {currentImageIndex + 1} / {currentImagePaths.length}
          </Text>

          <TouchableOpacity
            onPress={handleNextImage}
            style={{ flex: 2, alignItems: "center" }}
          >
            <Icon name="arrow-right" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {cameraOpen && (
          <Camera
            ref={cameraRef}
            style={styles.camera}
            type={type as CameraType}
            flashMode={flash}
          />
        )}
        {!cameraOpen && (
          <TouchableOpacity
            onPress={cameraOpen ? handleCloseCamera : handleOpenCamera}
            style={styles.openCameraButton}
          >
            <Text style={styles.openCameraButtonText}>
              {cameraOpen ? "Close Camera" : "Open Camera"}
            </Text>
          </TouchableOpacity>
        )}
        {cameraOpen && (
          <TouchableOpacity
            onPress={handleTakePicture}
            style={styles.cameraButton}
            disabled={isCaptureDisabled}
          >
            <Text style={styles.cameraButtonText}>Capture && Done</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    marginTop: 10,
  },
  header: {
    marginTop: 25,
    marginBottom: 5,
    padding: 20,
    backgroundColor: "blue",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
  },

  image: {
    width: 220,
    height: 220,
    margin: 5,
    borderRadius: 10,
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  navigationText: {
    fontSize: 18,
    alignItems: "center",
  },
  openCameraButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  openCameraButtonText: {
    color: "white",
    fontSize: 16,
  },
  camera: {
    width: 250,
    height: 250,
  },
  cameraButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  cameraButtonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  optionsContainer: {
    flexDirection: "row",
  },
  optionButton: {
    backgroundColor: "#434343",
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
  },
  optionButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default DashboardScreen;
