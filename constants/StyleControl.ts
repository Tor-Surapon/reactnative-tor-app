import { StyleSheet } from 'react-native';

export const StyleControl = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  myText: {
    color:"red", 
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  viewStyle: {
    backgroundColor: '#aefdda', 
    padding: 10,
    borderWidth: 5,
    borderColor: "#27ad00",
    textAlign: "center"
  }
});