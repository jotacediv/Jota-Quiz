import React from "react"
import {SafeAreaView, Text, TouchableOpacity, StatusBar} from "react-native"
import styles from './style'
import {useFonts, AnnieUseYourTelescope_400Regular} from '@expo-google-fonts/annie-use-your-telescope'
import {FontAwesome6} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function ScoreScreen({navigation, route}){
    const {scoreNum} = route.params
    const {textNick} = route.params
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
                <SafeAreaView style={styles.boxFinish}>
                    <Text style={styles.textFinish}>Parabéns</Text>
                    <Text style={styles.textFinish2}>{textNick}</Text>
                    <Text style={styles.textFinish2}>Você chegou ao final</Text>
                    <SafeAreaView style={styles.boxConfetti}> 
                        <Icon style={styles.icon} name="trophy" size={80} color="#FFD700" />  
                        <Icon style={styles.iconMiddle} name="trophy" size={80} color="#FFD700" /> 
                        <Icon style={styles.icon} name="trophy" size={80} color="#FFD700" />
                    </SafeAreaView>
                    <SafeAreaView style={styles.boxFinish}>
                        <Text style={styles.textScore}>{scoreNum==0? 'Nenhuma resposta ': scoreNum==1? `${scoreNum} resposta`: `${scoreNum} respostas`}</Text>
                        <Text style={styles.textScore}>{scoreNum==1 || scoreNum==0?'correta !!!':'corretas !!!'}</Text>
                    </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.boxAreaButton}>
                <TouchableOpacity style={styles.boxButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.textButton} >Jogar novamente</Text>
                </TouchableOpacity>
            </SafeAreaView>
            <SafeAreaView style={styles.boxBase}>
                <FontAwesome6 name="list-check" size={38}/>
                <Text style={styles.textBase}>JotaQuiz</Text>
            </SafeAreaView>
        </SafeAreaView>
    )
}