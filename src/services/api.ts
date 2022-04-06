import axios from "axios";

const api = axios.create({
  baseURL: "https://middleware-mob4pay-homolog.mob4pay.com/teste/"
})

export default api