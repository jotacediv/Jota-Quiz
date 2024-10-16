import React from 'react';
import { SafeAreaView, Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import styles from './style';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function AboutScreen({navigation}){
    return (
        <SafeAreaView style={styles.boxMain}>
            <StatusBar barStyle="light-content" backgroundColor="#fff" />
            <ScrollView>
                <Text style={styles.title}>Sobre o Jota Quiz</Text>
                <Text style={styles.text}>Jota Quiz é um aplicativo de perguntas e respostas iterativas, 
                                          com uma estrutura de diversas categorias temáticas e níveis de 
                                          dificuldade.</Text>
                
                <Text style={styles.title}>Versão</Text>
                <Text style={styles.text}>1.0.0</Text>

                <Text style={styles.title}>Desenvolvedor</Text>
                <Text style={styles.text}>João Carlos A. Lima</Text>

                <Text style={styles.title}>Tecnologias Usadas</Text>
                <Text style={styles.text}>React Native, Expo, React Navigation, Git e GitHub</Text>

                <Text style={styles.title}>Licença</Text>
                <Text style={styles.text}>MIT License</Text>

                <Text style={styles.title}>Contato</Text>
                <Text style={styles.text}>jotacediv@gmail.com</Text>
                <Text style={styles.text}>98984244712</Text>
            </ScrollView>
            <TouchableOpacity style={styles.boxReturnHome} onPress={()=>navigation.navigate('Home')}>
                <MaterialIcons name="exit-to-app" size={45} color="black" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};
