import axios from "axios";

export default class Api {
  constructor(token) {
    this.token = token;
    this.client = null;
    this.api_url = "http://localhost:8000/api/v1";
    //process.env.REACT_APP_API_BASE_URL || WHY IS THIS NOT WORKING?
  }

  init = () => {
    let headers = {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  /**
   * ADMIN - Get all bikes
   * @param {string} city
   */
  getBikes = (city) => {
    console.log("/admin/bike/city/" + city);
    return this.init().get("/admin/bike/city/" + city);
  };

  /**
   * ADMIN - Get all parking zones
   * @param {string} city
   */
  getParkingZones = (city) => {
    return this.init().get("/admin/parking/city/" + city);
  };

  /**
   * ADMIN - Get all stations
   * @param {string} city
   */
  getStations = (city) => {
    return this.init().get("/admin/station/city/" + city);
  };

  /**
   * ADMIN - Get all customers
   * @param {string} city
   */
  getCustomers = (city) => {
    return this.init().get("/admin/user/city/" + city);
  };

  /**
   * ADMIN - Get all travels
   * @param {string} city
   */
  getCustomerTravels = (city) => {
    return this.init().get("/travel/city/" + city);
  };

  /**
   * ADMIN - Delete a customer by ID
   * @param {string} id
   */
  deleteCustomer = (id) => {
    return this.init().delete("/admin/user", { body: id });
  };

  /**
   * USER - Get all user travels
   */
  getTravels = () => {
    let res = this.init().get("/travel/");
    return res.data;
  };

  /**
   * USER - Get all user travels by :id
   * @param {string} id
   */
  getUserTravels = (id) => {
    return this.init().get("/travel/user/" + id);
  };

  /**
   * USER - Get user by :id
   * @param {string} id
   */
  getUser = (id) => {
    return this.init().get("/user/" + id);
  };
}

// get parking/bikes/parkingId
// get station/bikes/stationid
