import { Button, View } from "react-native";

export const Home = ({ navigation }) => (
    <View>
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
