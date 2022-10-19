
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "../screens/home";
import { Sobre } from "../screens/sobre";


//const Stack = createNativeStackNavigator();
const Stack = createMaterialBottomTabNavigator();


export const RootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Sobre"
                component={Sobre}
            />
            <Stack.Screen
                name="Contato"
                component={Sobre}
            />
            <Stack.Screen
                name="Cadastro"
                component={Sobre}
            />
            <Stack.Screen
                name="Entrar"
                component={Sobre}
            />
        </Stack.Navigator>
    )
}