import axios from "axios";

export const gorilla = axios.create({
  baseURL: 'http://localhost:8000/api/posts',
  timeout: 1000
  // headers: {
  //   Authorization: `Bearer FeUOw1LkQVnbXrZ8LozPtwVlumXI8ABfANNZfJaVBWg3_tPdzw`
  // }
});

