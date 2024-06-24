import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import PersonajesScreen from "../screens/PersonajesScreen";
import ListaScreen from "../screens/ListaScreen";

const Tab = createBottomTabNavigator()

function MyTabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Welcome" component={WelcomeScreen}/>
            <Tab.Screen name = "Personaje" component={PersonajesScreen}/>
            <Tab.Screen name="Lista" component={ListaScreen}/>
        </Tab.Navigator>
    )
}

export default function BottomNavegador(){
    return( 
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}