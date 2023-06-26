import axios from "axios"

export function GetCountries() {
    return axios.get("https://localhost:5000/api/countries");
  };
