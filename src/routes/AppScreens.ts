import Home from "../pages/Home"
import Customers from "../pages/Customers"
import Header from "../components/Header"
import {ComponentType} from "react"
import { NativeStackNavigationOptions } from "@react-navigation/native-stack"
import { ParamListBase, RouteProp } from "@react-navigation/native"

interface IAppScreens {
  name: string,
  component: ComponentType<any>
  options: NativeStackNavigationOptions | ((props: {
    route: RouteProp<ParamListBase, string>
    navigation: any
}) => NativeStackNavigationOptions)
}

const AppScreens: IAppScreens[] = [
  {
    name: "Home",
    component: Home,
    options: {
      headerShown: false
    }
  },
  {
    name: "Customers",
    component: Customers,
    options: {
      headerTitle: Header,
      headerBackVisible: false
    }
  }

]

export default AppScreens