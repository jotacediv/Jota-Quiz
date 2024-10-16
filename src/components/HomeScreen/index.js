import React from "react"
import {SafeAreaView, Text, Image, TouchableOpacity, StatusBar} from "react-native"
import styles from './style'
import {useFonts, AnnieUseYourTelescope_400Regular} from '@expo-google-fonts/annie-use-your-telescope'
import {FontAwesome6} from '@expo/vector-icons'

export default function HomeScreen({navigation}){

    const [fontLoaded] = useFonts({
        AnnieUseYourTelescope_400Regular
    });

    if(!fontLoaded){
        return null
    }

    return(
        <SafeAreaView style={styles.boxMain}>
            <SafeAreaView style={styles.boxHome}>
                <StatusBar barStyle='light-content' backgroundColor='#1952FC'></StatusBar>
                <Image style={styles.imageHome} source={require('../../img/imagehome.png')}></Image>
            </SafeAreaView>

            <SafeAreaView style={styles.boxButtonHome}>
                <TouchableOpacity style={styles.boxButton} onPress={()=> navigation.navigate('Form')}>
                        <Text style={styles.textButton}>Começar</Text>
                </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.boxBase}>
                <FontAwesome6 name="list-check" size={38}/>
                <Text style={styles.textBase}>JotaQuiz</Text>
            </SafeAreaView>
        </SafeAreaView>
    )
}