import { StyleSheet, Platform, Dimensions } from "react-native";
const height = Dimensions.get("window").height;
export const stylesGlobal = StyleSheet.create({
  highLightText: {
    fontFamily: "Exo2_400Regular",
    fontSize: 13,
    opacity: 0.5,
  },
  header: {
    fontSize: 20,
    color: "#434343",
    paddingHorizontal: 15,
    width: "100%",
    fontFamily: "Exo2_700Bold",
  },
  buttonText: {
    flexDirection: "row",
    fontSize: 16,
    color: "#545454",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Exo2_700Bold",
    textAlign: "center",
  },
  animatedButton: {
    backgroundColor: "#e5f5f2",
    top: 15,
    overflow: "hidden",
    flex: 1,
    width: "95%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 24,
    marginBottom: 10,
    height: 45,
  },
  container: {
    backgroundColor: "white",
    position: "relative",
  },
  logo: {
    flex: 1,
    marginTop: 35,
    marginBottom: 20,
    marginLeft: 20,
  },
  header2: {
    fontSize: 15,
    paddingHorizontal: 15,
    marginBottom: 25,
    color: "#434343",
    fontFamily: "Exo2_700Bold",
  },
  button: {
    flex: 1,
    marginTop: 5,
    overflow: "hidden",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#c0c0c0",
    color: "blue",
    borderRadius: 24,
    marginBottom: 10,
    height: 45,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
    width: "100%",
    alignSelf: "center",
  },
  checkbox: {
    marginTop: 10,
  },
  textArea: {
    fontFamily: "Exo2_700Bold",
    fontSize: 12,
    marginTop: 15,
    marginRight: 5,
    marginLeft: -15,
  },

  input: {
    marginTop: 15,
    paddingLeft: 10,
    height: Platform.OS === "ios" ? 56 : undefined,
    width: "100%",
    alignSelf: "center",
    fontFamily: "Exo2_700Bold",
  },
  textBold: {
    fontFamily: "Exo2_700Bold",
    color: "#434343",
    fontSize: 14,
  },
  textRegular: {
    fontFamily: "Exo2_400Regular",
    color: "#434343",
    fontSize: 12,
  },
});
