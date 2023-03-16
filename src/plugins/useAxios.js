import axios from "axios";

export const gorilla = axios.create({
  baseURL: 'https://crudcrud.com/api/39c7e241544445f4b20bf1a1778d576c/unicorns',
  timeout: 1000
  // headers: {
  //   Authorization: `Bearer FeUOw1LkQVnbXrZ8LozPtwVlumXI8ABfANNZfJaVBWg3_tPdzw`
  // }
});

