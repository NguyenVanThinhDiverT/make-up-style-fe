import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

const ReloadButton = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      height: 40,
      width: 40,
      alignItems: "center",
    }}
  >
    <View>
      <Icon name="refresh" size={40} color="#000" />
    </View>
  </TouchableOpacity>
);

export default ReloadButton;
