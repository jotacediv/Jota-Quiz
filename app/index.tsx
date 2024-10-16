import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FormScreen from '../src/components/FormScreen'
import HomeScreen from '../src/components/HomeScreen'
import QuestionScreen from '../src/components/QuestionScreen'
import ScoreScreen from '../src/components/ScoreScreen'
import AboutScreen from '../src/components/AboutScreen'

const Stack = createNativeStackNavigator()

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} ></Stack.Screen>
        <Stack.Screen name="Form" component={FormScreen}></Stack.Screen>
        <Stack.Screen name="Question" component={QuestionScreen}></Stack.Screen>
        <Stack.Screen name="Score" component={ScoreScreen}></Stack.Screen>
        <Stack.Screen name="About" component={AboutScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
