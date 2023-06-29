// This file uses the GET method to bring the countries stored on the database.
import axios from "axios"

export function GetCountries() {
    return axios.get("https://localhost:5000/api/countries");
  };
