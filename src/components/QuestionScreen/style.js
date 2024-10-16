import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boxMain: {
    flex: 1,
    justifyContent: 'space-between'
  },
  boxHome: {
    flex: 9,
    width: "100%",
    backgroundColor: "#1952FC",
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textQuestion: {
    fontSize: 33,
    color: "#000",
    fontFamily: "AnnieUseYourTelescope_400Regular",
    marginTop: "2%",
    marginHorizontal: 9,
  },
  boxButtonRes: {
    width: "77%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 2.3,
    borderColor: "#000",
    marginBottom: "1%",
    alignItems: "center",
  },
  textButtonRes: {
    fontSize: 30,
    color: "#000",
    fontFamily: "AnnieUseYourTelescope_400Regular",
  },
  colorCorrect: {
    backgroundColor: "#30FF30",
  },
  colorError: {
    backgroundColor: "#e83427",
  },
  boxTime:{
    flex: 3,
    width: '100%',
    backgroundColor: '#1952FC',
    alignItems: 'center',
  },
  textTime:{
    fontSize: 70,
    color: "#000",
    fontFamily: "AnnieUseYourTelescope_400Regular"
  },
  boxQuestionExit:{
    flex: 1,
    width: '100%',
    backgroundColor: '#1952FC',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 8
    
  },
  boxAreaQuestion:{
    flex: 1,
  },
  boxNumQuestion:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 2
  },
  textNumQuestion:{
    fontSize: 13,
    color: "#000",
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  bulletWithArrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
      marginLeft:4
  },
  boxBase: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FED404',
    borderTopWidth: 2,
    alignItems: 'center',
  },
  textBase: {
    fontFamily: 'AnnieUseYourTelescope_400Regular',
    fontSize: 45,
    marginLeft: 10
  },
});

export default styles;
