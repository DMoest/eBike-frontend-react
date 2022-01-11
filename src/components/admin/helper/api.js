import axios from "axios";

export default class Api {
  constructor() {
    this.api_token = null;
    this.client = null;
    this.api_url =
      process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/api/v1";
  }

  init = () => {
    // getCookie("ACCESS_TOKEN");
    this.api_token = null;

    let headers = {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    if (this.api_token) {
      headers.Authorization = `Bearer ${this.api_token}`;
    }

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  // Bikes
  getBikes = (city) => {
    return this.init().get("/bike/city/" + city);
  };

  getParkingZones = (city) => {
    return this.init().get("/parking/city/" + city);
  };

  // stations
  getStations = (city) => {
    return this.init().get("/station/city/" + city);
  };

  // Customers
  getCustomers = (city) => {
    return this.init().get("/user/city/" + city);
  };

  deleteCustomer = (data, city) => {
    return this.init().delete("/user/city/" + city, { data: data });
  };
}
