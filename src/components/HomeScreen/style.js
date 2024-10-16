import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    boxMain: {
        flex: 1,
        justifyContent: 'space-between' 
    },
    boxHome:{
        flex: 3,
        width: '100%',
        backgroundColor: '#1952FC'
    },
    imageHome: {
        width: '100%',  
        height: '125%'   
    },
    boxButtonHome:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1952FC'
    },
    boxButton: {
        width: '50%',
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 3,
        alignItems: 'center'
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
        alignItems: 'center'
    },
    textBase:{
        fontFamily: 'AnnieUseYourTelescope_400Regular',
        fontSize: 45,
        marginLeft: 10
    }
});

export default styles;
