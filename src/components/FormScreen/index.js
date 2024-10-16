import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, TextInput, FlatList, StatusBar, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, View } from "react-native";
import styles from './style';
import { useFonts, AnnieUseYourTelescope_400Regular } from '@expo-google-fonts/annie-use-your-telescope';
import { FontAwesome6 } from '@expo/vector-icons';
import questions from '../../../assets/Questions/questions.json';

export default function FormScreen({ navigation }) {
    const [textNick, setTextNick] = useState('');
    const [buttonSelectCat, setButtonSelectCat] = useState(null);
    const [buttonSelectDif, setButtonSelectDif] = useState(null);
    const [questionsResp, setQuestionsResp] = useState([]);

    const category = [
        { id: 'astro', label: 'Astronomia' },
        { id: 'movie', label: 'Cinema' },
        { id: 'fut', label: 'Futebol' },
        { id: 'game', label: 'Games' },
        { id: 'geo', label: 'Geografia' },
        { id: 'hist', label: 'História' },
        { id: 'mtm', label: 'Matemática' },
        { id: 'mito', label: 'Mitologia' },
        { id: 'tec', label: 'Tecnologia' }
    ];

    const verificButtonCat = (buttonCat) => {
        setButtonSelectCat(buttonCat);
        setQuestionsResp([]);
    };

    const verificButtonDif = (buttonDif) => {
        setButtonSelectDif(buttonDif);
        setQuestionsResp([]);
    };

    const sortearPerguntas = (perguntas, num) => {
        const shuffled = perguntas.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    const drawArray = (array) => array.sort(() => Math.random() - 0.5);

    useEffect(() => {
        if (buttonSelectCat && buttonSelectDif) {
            let selectedQuestions = [];

            if (buttonSelectCat === 'mtm') {
                selectedQuestions = questions['matematica'][buttonSelectDif];
            } else if (buttonSelectCat === 'geo') {
                selectedQuestions = questions['geography'][buttonSelectDif];
            } else if (buttonSelectCat === 'fut') {
                selectedQuestions = questions['futebol'][buttonSelectDif];
            } else if (buttonSelectCat === 'astro') {
                selectedQuestions = questions['astronomia'][buttonSelectDif];
            } else if (buttonSelectCat === 'movie') {
                selectedQuestions = questions['cinema'][buttonSelectDif];
            } else if (buttonSelectCat === 'game') {
                selectedQuestions = questions['games'][buttonSelectDif];
            } else if (buttonSelectCat === 'hist') {
                selectedQuestions = questions['historia'][buttonSelectDif];
            } else if (buttonSelectCat === 'mito') {
                selectedQuestions = questions['mitologia'][buttonSelectDif];
            } else {
                selectedQuestions = questions['tecnologia'][buttonSelectDif];
            }

            const formattedQuestions = selectedQuestions.map(q => ({
                question: q.question,
                correct_answer: q.correct_answer,
                answers: [q.correct_answer, ...q.incorrect_answers]
            }));

            const selectedRandomQuestions = sortearPerguntas(formattedQuestions, 7);
            formattedQuestions.forEach(question => drawArray(question.answers));
            setQuestionsResp(selectedRandomQuestions);
        }
    }, [buttonSelectCat, buttonSelectDif]);

    const [fontLoaded] = useFonts({ AnnieUseYourTelescope_400Regular });

    if (!fontLoaded) {
        return null;
    }

    const verificCatDif = () => {
        if (textNick === '') {
            alert('Preencha seu apelido !!');
        } else if (buttonSelectCat == null || buttonSelectDif == null) {
            alert('Escolha uma categoria e uma dificuldade !!');
        } else {
            navigation.navigate('Question', { questionsResp, textNick });
        }
    };

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.boxCheckCat, buttonSelectCat === item.id && styles.colorCheck]}
            onPress={() => verificButtonCat(item.id)}
        >
            <Text style={styles.textCat}>{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
                    <SafeAreaView style={styles.boxForm}>
                        <StatusBar barStyle='light-content' backgroundColor='#1952FC' />
                        <Text style={styles.textNick}>Digite seu apelido:</Text>
                        <TextInput
                            style={styles.boxInputNick}
                            onChangeText={setTextNick}
                            placeholder="Ex. Jotacê Bala"
                            value={textNick}
                            textAlign="center"
                            maxLength={17}
                        />

                        <Text style={styles.textTitle}>Categorias:</Text>
                        <FlatList
                            data={category}
                            renderItem={renderCategoryItem}
                            keyExtractor={item => item.id}
                            style={{ maxHeight: 153, width: '55%' }} // Limita a altura da lista
                            showsVerticalScrollIndicator={true} // Habilita a barra de rolagem
                        />

                        <Text style={styles.textTitle}>Nível de dificuldade:</Text>
                        <SafeAreaView style={styles.boxAreaButton}>
                            <TouchableOpacity
                                style={[styles.boxButtonDif, buttonSelectDif === 'easy' && styles.colorCheck]}
                                onPress={() => verificButtonDif('easy')}
                            >
                                <Text style={styles.textButtonDif}>Fácil</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.boxButtonDif, buttonSelectDif === 'medium' && styles.colorCheck]}
                                onPress={() => verificButtonDif('medium')}
                            >
                                <Text style={styles.textButtonDif}>Médio</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                        <TouchableOpacity
                            style={[styles.boxButtonDif, buttonSelectDif === 'hard' && styles.colorCheck, { marginTop: '1%' }]}
                            onPress={() => verificButtonDif('hard')}
                        >
                            <Text style={styles.textButtonDif}>Difícil</Text>
                        </TouchableOpacity>
                    </SafeAreaView>

                    <SafeAreaView style={styles.boxAreaButtonGo}>
                        <TouchableOpacity style={styles.boxButtonGo} onPress={verificCatDif}>
                            <Text style={styles.textButtonGo}>Iniciar</Text>
                        </TouchableOpacity>
                    </SafeAreaView>

                    <SafeAreaView style={styles.boxBase}>
                        <FontAwesome6 name="list-check" size={38} />
                        <Text style={styles.textBase}>JotaQuiz</Text>
                    </SafeAreaView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}
