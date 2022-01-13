import axios from "axios";

export default class Api {
  constructor() {
    this.api_token = null;
    this.client = null;
    this.api_url = "http://localhost:8000/api/v1";
    //process.env.REACT_APP_API_BASE_URL || WHY IS THIS NOT WORKING?
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

  // Bikes Admin
  getBikes = (city) => {
    return this.init().get("/admin/bike/city/" + city);
  };

  getParkingZones = (city) => {
    return this.init().get("/admin/parking/city/" + city);
  };

  // stations Admin
  getStations = (city) => {
    return this.init().get("/admin/station/city/" + city);
  };

  // Customers Admin
  getCustomers = (city) => {
    return this.init().get("/admin/user/city/" + city);
  };

  deleteCustomer = (data, city) => {
    return this.init().delete("/admin/user/city/" + city, { data: data });
  };
}
