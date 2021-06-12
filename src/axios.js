import axios from "axios";

const instance = axios.create({
  baseURL: "https://anime-bend.herokuapp.com",
});

export default instance;
