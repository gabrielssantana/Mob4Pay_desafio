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
  style={styles.container}
  >
    <Text
    style={styles.title}
    >
      {key}
    </Text>
    <Text
    style={styles.content}
    >
      {value}
    </Text>
  </View>
)

export default CustomerFields