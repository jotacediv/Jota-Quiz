import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    boxMain: {
        flex: 1,
        justifyContent: 'space-between'
    },
    boxForm: { 
        width: '100%',
        backgroundColor: '#1952FC',
        alignItems: 'center'
    },
    textNick: {
        fontFamily: 'AnnieUseYourTelescope_400Regular',
        color: '#000',
        fontSize: 39,
        marginTop: 10,
    },
    boxInputNick: {
        width: '80%',
        height: 48,
        backgroundColor: '#fff',
        borderRadius: 18,
        borderWidth: 2.3,
        borderColor: '#000',
        fontFamily: 'AnnieUseYourTelescope_400Regular',
        fontSize: 24
    },
    textCat:{
        fontFamily: 'AnnieUseYourTelescope_400Regular',
        color: '#000',
        fontSize: 36
    },
    boxCheckCat:{
        width: '100%',
        height: 48,
        backgroundColor: '#fff',
        borderRadius: 18,
        borderWidth: 2.3,
        borderColor: '#000',      
        marginBottom: '2%',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 150
    },
    colorCheck:{
        backgroundColor: '#30FF30'
    },
    textTitle:{
        fontFamily: 'AnnieUseYourTelescope_400Regular',
        color: '#000',
        fontSize: 39,
        marginTop: '1%',
    },
    boxAreaButton:{
        flexDirection: 'row'
    },
    boxButtonDif:{
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 3,
        paddingHorizontal: '7%',
        marginHorizontal: '1%'
    },
    textButtonDif: {
        fontSize: 30,
        color: '#000',
        fontFamily: 'AnnieUseYourTelescope_400Regular',
    },
    boxAreaButtonGo:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1952FC'
    },
    boxButtonGo:{
        backgroundColor: 'white',
        paddingHorizontal: 50,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 3
    },
    textButtonGo: {
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
        fontSize: 45,
        marginLeft: 10
    }
});

export default styles;
