import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-2b413-default-rtdb.firebaseio.com/",
});

export default instance;
