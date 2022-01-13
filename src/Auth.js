import React from "react";
import { useEffect } from "react";
import axios from "axios";

function Auth(props) {
  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    let code = sessionStorage.getItem("code");
    let url = "http://localhost:8000";
    await axios
      .post(`${url}/oauth/token`, {
        code: `${code}`,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: process.env.CLIENT_REDIRECT_URL,
      })
      .then((res) => {
        console.log(res.access_token);
        props.parentCallback(res.access_token);
      });
  };
}

export default Auth;
