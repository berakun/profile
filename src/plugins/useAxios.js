import axios from "axios";

export const gorilla = axios.create({
  baseURL: 'https://crudapi.co.uk/api/v1/probe',
  timeout: 1000,
  headers: {
    Authorization: `Bearer FeUOw1LkQVnbXrZ8LozPtwVlumXI8ABfANNZfJaVBWg3_tPdzw`
  }
});

