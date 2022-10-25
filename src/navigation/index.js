
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "../screens/home";
import { Sobre } from "../screens/sobre";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


export const RootNavigation = () => {
    return (
        <Tab.Navigator   
        activeColor="#3e2465"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#F0F8FF' }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                  }}
                />
                

            <Tab.Screen
                name="Sobre"
                component={Sobre}
                options={{
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                  }}
                />
              
            <Tab.Screen
                name="Contato"
                component={Sobre}
                options={{
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                  }}
                />
            <Tab.Screen
                name="Cadastro"
                component={Sobre}
                options={{
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                  }}
                />
            <Tab.Screen
                name="Entrar"
                component={Sobre}
                options={{
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                  }}
                />
        </Tab.Navigator>
    )
}