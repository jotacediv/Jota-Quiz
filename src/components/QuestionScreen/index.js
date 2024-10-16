import React, { useEffect, useState } from "react"
import { SafeAreaView, Text, TouchableOpacity, StatusBar, BackHandler, Alert } from "react-native"
import styles from './style'
import { useFonts, AnnieUseYourTelescope_400Regular } from '@expo-google-fonts/annie-use-your-telescope'
import { FontAwesome6 } from '@expo/vector-icons'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function QuestionScreen({ navigation, route }) {
    const { questionsResp } = route.params
    const { textNick} = route.params

    // Array para armazenar o estado de cada pergunta (respondida e se está correta)
    const [questionStatus, setQuestionStatus] = useState(
        questionsResp.map(() => ({ isAnswered: false, isCorrect: null, selectedAnswerIndex: null }))
    );
    
    // Índice da pergunta atual
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0) 
    // Define a quantidade de segundos inicialmente
    const [seconds, setSeconds] = useState(15)
    // Confere a pontuação
    const [scoreNum, setScoreNum] = useState(0)
    // Pausa para clicar no botão
    const [isClickButton, setIsclickButton] = useState(false)
    // Carrega a fonte
    const [fontsLoaded] = useFonts({
        AnnieUseYourTelescope_400Regular
    });

    // Verifica se as perguntas estão disponíveis e o índice é válido
    const currentQuestion = questionsResp ? questionsResp[currentQuestionIndex] : null

    // Impede renderizar até que a fonte esteja carregada e as perguntas existam
    useEffect(() => {
        if (!fontsLoaded || !currentQuestion) return

        let interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1)
        }, 1000);

        if (seconds < 0) {
            if (currentQuestionIndex < questionsResp.length - 1) {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
                setSeconds(15)
            } else {
                // Navega para a tela de pontuação(ScoreScreen) quando as perguntas terminarem
                setSeconds(0)
                navigation.navigate('Score', {scoreNum, textNick})
            }
        }

        return () => clearInterval(interval)
    }, [fontsLoaded, seconds, currentQuestion])

    const handlePress = (index) => {
        let responseCurrent = questionsResp[currentQuestionIndex]['answers'][index]
        // Verifica se a resposta está correta
        const isCorrect = responseCurrent === questionsResp[currentQuestionIndex]['correct_answer'];
        
        // Atualiza o status da questão atual
        const newStatus = [...questionStatus];
        newStatus[currentQuestionIndex] = {
            isAnswered: true,
            isCorrect: isCorrect,
            selectedAnswerIndex: index // Armazena o índice da resposta selecionada
        };
        setQuestionStatus(newStatus);

        // Armazena a pontuação se a resposta estiver correta
        if (isCorrect) {
            setScoreNum((prevScore) => prevScore + 1);
        }

        // Pausa o botão por 0,5 segundos
        if(!isClickButton){
            setIsclickButton(true)
            setTimeout(() => {
                setIsclickButton(false)
            }, 300)
        }

        // Avança para a próxima pergunta
        setTimeout(verificScreen, 300)
    };

    const verificScreen = () => {
        if (currentQuestionIndex < questionsResp.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            setSeconds(15)
        } else {
            setSeconds(0)
            setTimeout(() => {
                navigation.navigate('Score', {scoreNum, textNick})
              }, 400); 
        }
    };

    // Confirmação caso o usuário deseje sair do APP
    useEffect(() => {
        const goBack = () => {
            Alert.alert(
                "Confirmação",
                "Tem certeza que deseja sair?",
                [
                    {
                        text: 'Não',
                        onPress: () => null,
                        style:'cancel'
                    },
                    {text: 'Sim', onPress: () => BackHandler.exitApp()}
                ]
            )
            return true
        }
        BackHandler.addEventListener("hardwareBackPress", goBack)

        return () => BackHandler.removeEventListener("hardwareBackPress", goBack)
    }, [])

    function goBackExit(){
        Alert.alert(
            'Confirmação',
            "Voltar a tela principal?",
            [
                {
                    text: 'Não',
                    onPress: ()=> null,
                    style:'cancel'
                },
                {text: 'Sim', onPress: () => navigation.navigate('Home')}
            ]
        )
    }

    return (
        <SafeAreaView style={styles.boxMain}>
            <SafeAreaView style={styles.boxHome}>
                <StatusBar barStyle="light-content" backgroundColor="#1952FC" />
                <Text style={styles.textQuestion}>
                    {currentQuestion['question']}
                </Text>

                {currentQuestion['answers'].map((answer, index) => {
                    const isSelected = questionStatus[currentQuestionIndex].selectedAnswerIndex === index;
                    const isCorrectAnswer = answer === currentQuestion['correct_answer'];
                    const isAnswered = questionStatus[currentQuestionIndex].isAnswered;

                    let backgroundColor = '#fff'; // Cor padrão
                    if (isAnswered) {
                        if (isSelected && isCorrectAnswer) {
                            backgroundColor = '#30FF30';
                        } else if (isSelected && !isCorrectAnswer) {
                            backgroundColor = 'red'; 
                        }
                    }

                    return (
                        <TouchableOpacity
                            activeOpacity={2}
                            disabled={isClickButton || isAnswered}
                            key={index}
                            style={[styles.boxButtonRes, { backgroundColor }]}
                            onPress={() => handlePress(index)}
                        >
                            <Text style={styles.textButtonRes}>{answer}</Text>
                        </TouchableOpacity>
                    );
                })}
            </SafeAreaView>

            <SafeAreaView style={styles.boxTime}>
                <Text style={styles.textTime}>00:{seconds < 10 ? `0${seconds}` : seconds}</Text>
            </SafeAreaView>

            <SafeAreaView style={styles.boxAreaQuestion}>
                <SafeAreaView style={styles.boxQuestionExit}>
                    {questionsResp.map((_, index) => {
                        let bgColor = '#fff'; // Cor padrão

                        // Se o índice da questão foi respondido, define a cor
                        if (index === currentQuestionIndex) {
                            bgColor = '#FED404'; // A pergunta atual
                        } else if (questionStatus[index].isAnswered) {
                            // Muda a cor conforme a resposta certa ou errada
                            bgColor = questionStatus[index].isCorrect ? '#30FF30' : 'red';
                        }

                        return (
                            <SafeAreaView key={index} style={styles.bulletWithArrow}>
                                <SafeAreaView style={[styles.boxNumQuestion, { backgroundColor: bgColor }]}>
                                    <Text style={styles.textNumQuestion}>{index + 1}</Text>
                                </SafeAreaView>

                                {/* Adiciona a seta se não for o último item */}
                                {index < questionsResp.length - 1 && (
                                    <Feather name="arrow-right" size={18} color="black" style={styles.arrowIcon} />
                                )}
                            </SafeAreaView>
                        );
                    })}
                    <TouchableOpacity onPress={() => goBackExit()}>
                        <MaterialIcons name="exit-to-app" size={40} color="black" />
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={styles.boxBase}>
                <FontAwesome6 name="list-check" size={38} />
                <Text style={styles.textBase}>JotaQuiz</Text>
            </SafeAreaView>
        </SafeAreaView>
    );
}
