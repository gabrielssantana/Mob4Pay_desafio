import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import ICustomer from "../../shared/interfaces/ICustomers";
import styles from "./styles";

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
    <Text>{id}</Text>
    <Text>{nome}</Text>
    <Text>{estado}</Text>

  </TouchableOpacity>
  </>
)

export default CustomersCard