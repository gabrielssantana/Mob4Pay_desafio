import Home from "../pages/Home"
import Customers from "../pages/Customers"
import {ComponentType} from "react"
interface IAppScreens {
  name: string,
  component: ComponentType<any>
}

const AppScreens: IAppScreens[] = [
  {
    name: "Home",
    component: Home
  },
  {
    name: "Customers",
    component: Customers
  }
]

export default AppScreens