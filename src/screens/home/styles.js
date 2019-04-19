const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  ButtonStyle: {
    justifyContent: 'center',
    alignItems:"center",
    marginLeft:'13%',
    marginRight:'13%',
    backgroundColor:"#35353c",
    borderRadius:15,
    borderWidth: 1,
    borderColor: '#fff',
    height : '80%'
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 40 : 50,
    top: Platform.OS === "android" ? 35 : 60,
    width: 280,
    height: 100
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  }
};
