import { useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../lib/style";

export const login = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        mode="outlined"
        value={text}
        onChangeText={(text) => setText(text)}
      />

      <TextInput
        label="Senha"
        mode="outlined"
        secureTextEntry={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        title="Entrar"
        label="Entrar"
        mode="contained"
        style={styles.button}
        onPress={() => console.log("Pressed")}
      >
        Entrar
      </Button>
    </View>
  );
};
