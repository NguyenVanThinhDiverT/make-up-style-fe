import React from "react";
import { View, Image, Text, Switch, StyleSheet } from "react-native";
import { stylesGlobal } from "./Style/style";

const CardGrid = ({ item, switchStates, toggleSwitch }) => (
  <View
    style={[
      styles.box,
      {
        backgroundColor: switchStates[item.id]
          ? "#CCE5FF"
          : "linear-gradient(0deg, rgba(7, 65, 78, 0.20) 0%, rgba(7, 65, 78, 0.20) 100%)",
      },
    ]}
  >
    <View style={{ flexDirection: "row" }}>
      <Image
        source={item.source}
        style={{
          height: 40,
          width: 40,
          tintColor: switchStates[item.id] ? "blue" : "gray",
          marginLeft: 7,
        }}
      />
      <Switch
        style={{ flex: 1 }}
        onValueChange={(value) => toggleSwitch(item.id, value)}
        value={switchStates[item.id] || false}
      />
    </View>
    <View style={styles.boxContent}>
      <Text style={stylesGlobal.header}>{item.type}</Text>
      <Text style={stylesGlobal.header2}>
        {switchStates[item.id] ? item.value : ""}
      </Text>
    </View>
    <Text style={[stylesGlobal.header2]}>
      {switchStates[item.id] ? item.timestamp : ""}
    </Text>
    <Text
      style={[
        stylesGlobal.header2,
        { color: switchStates[item.id] ? "green" : "red" },
      ]}
    >
      {switchStates[item.id] ? "ON" : "OFF"}
    </Text>
  </View>
);

export default CardGrid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  box: {
    width: "50%",
    height: 250,
    // backgroundColor: "#CCE5FF",
    marginRight: 8,
    marginBottom: 20,
    padding: 5,
    borderRadius: 8,
  },
  boxContent: {
    flex: 1,
  },
});
