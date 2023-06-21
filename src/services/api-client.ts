import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "06c4994921744691a4abfd5701ffd4e3",
  },
});
