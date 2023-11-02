import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "768454b5459e43fda2e67ecb735ead6f",
  },
});

export { CanceledError };
