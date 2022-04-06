import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import ICustomer from "../../shared/interfaces/ICustomers";
import styles from "./styles";
import Icon from "react-native-vector-icons/Feather"

interface CustomersCardProps extends TouchableOpacityProps {
  customer: ICustomer
}

const CustomersCard = ({
  customer: {
    id,
    nome,
    estado
  },
  onPress,
  ...rest
}: CustomersCardProps): JSX.Element => (
  <>
  <TouchableOpacity
  {...{
    onPress,
    ...rest
  }}
  style={styles.container}
  >
    <View
    style={styles.content}
    >
    <Text>Id: {id}</Text>
    <Text>Nome: {nome}</Text>
    <Text>Estado: {estado}</Text>
    </View>

  <Icon
  name="arrow-right"
  size={24}
  color="#000"
  style={styles.icon}
  />

  </TouchableOpacity>
  </>
)

export default CustomersCard