import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID epftYNn0Gm7ZRHgZcZJ3oAKtTAa0PJqg_X3LsxlfAcA",
  },
});
