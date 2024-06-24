import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import PersonajesScreen from "../screens/PersonajesScreen";
import ListaScreen from "../screens/ListaScreen";
import LoginScreen from "../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";

// TAB
const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
            <Tab.Screen name="Personaje" component={PersonajesScreen} />
            <Tab.Screen name="Lista" component={ListaScreen} />
        </Tab.Navigator>
    )
}

// STACK
const Stack = createStackNavigator()
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Stack" component={MyTabs} />
        </Stack.Navigator>
    )
}

export default function BottomNavegador() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}