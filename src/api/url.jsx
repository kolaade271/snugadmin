import axios from "axios"; 
import {  getToken } from "./storage";
const token = getToken();

const url = axios.create({
  baseURL : 'https://staging-api.beebzride.com',
  APIKEY:`VZi8jLFQX9nfLZFqDzltWMi5WZVzg35o2L63K4h+6nfnUGKCSmaMGjDSmz0tFR0RdgyLxjTbIyuahyI4mcdj`
});

export default url;