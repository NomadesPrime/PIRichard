import { Text, View } from "react-native";
import { styles } from "../lib/style";

export const login = () => {
  return (
    <View style={styles.container}>
      <Text style={{...styles.h1,...styles.vermelho}}>Top demais</Text>
    </View>
  );
};

