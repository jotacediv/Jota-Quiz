import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    boxMain: {
        flex: 1,
        justifyContent: 'space-between' 
    },
    boxHome:{
        flex: 3,
        width: '100%',
        backgroundColor: '#1952FC',
        alignItems: 'center',
    },
    boxFinish:{
        alignItems: 'center'
    },
    textFinish: {
        fontSize: 40,
        color: '#000',
        fontFamily: 'AnnieUseYourTelescope_400Regular',
        marginTop: '5%'
    },
    textFinish2: {
        fontSize: 40,
        color: '#000',
        fontFamily: 'AnnieUseYourTelescope_400Regular',
        marginTop: '2%'
    },
    boxConfetti:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    icon: {
        marginHorizontal: 20, 
      },
    iconMiddle: {
        marginHorizontal: 5,
        marginBottom: 30, 
    },
    textScore:{
        fontSize: 45,
        color: '#000',
        fontFamily: 'AnnieUseYourTelescope_400Regular'
    },
    boxAreaButton:{
        flex: 1,
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#1952FC' //#1952FC
    },
    boxButton: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 3,
    },
    textButton: {
        fontSize: 40,
        color: '#000',
        fontFamily: 'AnnieUseYourTelescope_400Regular'
    },
    boxBase:{       
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FED404',
        borderTopWidth: 2,
        alignItems: 'center',
    },
    textBase:{
        fontFamily: 'AnnieUseYourTelescope_400Regular',
        fontSize: 50,
        marginLeft: 15
    }
});

export default styles;
