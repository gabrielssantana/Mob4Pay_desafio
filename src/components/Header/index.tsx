import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather"
import styles from "./styles";

const Header = (): JSX.Element => {
  const {goBack} = useNavigation()
  return (
  <View
  style={styles.container}
  >
    <TouchableOpacity
    style={styles.content}
    onPress={goBack}
    >
      <Icon
      name='arrow-left'
      size={16}
      color='#000'
      />
    <Text>Voltar</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Header