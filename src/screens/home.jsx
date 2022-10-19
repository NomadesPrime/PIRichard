import { Button, Text, View } from "react-native";

export const Home = ({ navigation }) => (
    <View>
        <Text>Aqui é a Home</Text>
        <Button
            title="Sobre"
            onPress={() => navigation.navigate("Sobre")}
        />
        <Button
            title="Contato"
            onPress={() => navigation.navigate("Contato")}
        />
        <Button
            title="Cadastro"
            onPress={() => navigation.navigate("Cadastro")}
        />
        <Button
            title="Entrar"
            onPress={() => navigation.navigate("Entrar")}
        />
    </View>
)
