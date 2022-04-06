import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import ICustomer from "../../shared/interfaces/ICustomers";
import CustomerFields from "../../components/CustomerFields";
import Header from "../../components/Header";
import styles from "./styles";

type CustomersRouteProps = {
  Customers: ICustomer,
}

type CustomersProps = NativeStackScreenProps<CustomersRouteProps, "Customers">

const Customers = ({
  route: { params }
}: CustomersProps): JSX.Element => {
  const entries = Object.entries(params)
  return (
    <>
      <Header />
      <View
        style={styles.container}
      >
        {
          entries.map(entry => (
            <CustomerFields
              key={entry[0]}
              values={entry}
            />
          ))
        }

      </View>
    </>
  )
}

export default Customers