import { useIsFocused } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, {useState, useEffect, useCallback} from "react";
import { ScrollView } from "react-native";
import CustomersCard from "../../components/CustomersCard";
import api from "../../services/api";
import ICustomer from "../../shared/interfaces/ICustomers";
import styles from "./styles"

type HomeProps = NativeStackScreenProps<any, "Home">

const Home = ({
  navigation: {
    navigate
  }
}: HomeProps): JSX.Element => {
  const isFocused = useIsFocused()
  const [customers, setCustomers] = useState<ICustomer[]>([])

  const getCustomers = useCallback(async () => {
    try {
      const url = "obterClientes"
      const {data: {clientes}} = await api.get(url)
      setCustomers(clientes)
    }
    catch (error) {
      console.log(error)
    }
  }, [isFocused])

  useEffect(() => {
    isFocused && getCustomers()
  }, [isFocused])

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {customers.map(customer => (
        <CustomersCard
        key={customer.id}
        {...{
          customer
        }}
        onPress={() => navigate("Customers", customer)}
        />
      ))}

    </ScrollView>
  )

}

export default Home