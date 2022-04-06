import React from "react";
import styles from "./styles";
import { Text, View } from "react-native";

interface CustomerFieldsProps {
  values: [string, string | number]
}

const CustomerFields = ({
  values: [
    key,
    value
    ]
}: CustomerFieldsProps): JSX.Element => (
  <View
  >
    <Text>
      {key}
    </Text>
    <Text>
      {value}
    </Text>
  </View>
)

export default CustomerFields