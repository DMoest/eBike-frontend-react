import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Customer from "./CustomerSingle";
import DocumentTitle from "react-document-title";
import StatusBar from "../../components/global/Statusbar/StatusBar";

// CSS
import "./Customers.css";

function Customers({ city }) {
  const url = process.env.REACT_APP_API_BASE_URL + "/api/user/city/" + city;
  const [customers, setCustomers] = useState([]);

  // API call
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCustomers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [customers, url]);

  // Deletes a customer
  const handleDeleteCustomers = (customers) => {
    // axios.request({
    //     method: 'DELETE',
    //     url: url,
    //     data: {
    //         _id: customers._id
    //     }
    // }).then(res => {
    //     console.log(res)
    //     setCustomers(customers.filter((customer) => customer._id !== customers._id))
    // }).catch(err => {
    //     console.log(err)
    // })

    console.log("Customer deleted", customers);
  };

  return (
    <>
      <StatusBar city={city} />
      <DocumentTitle title="Kunder"></DocumentTitle>

      <div className="data-map__wrapper">
        <div className="data__wrapper fullwidth">
          <h1 className="header__top">Kunder</h1>
          <div className="data__inner-wrapper">
            <table className="data__table fullwidth">
              <thead>
                <tr>
                  <th>Förnamn</th>
                  <th>Efternamn</th>
                  <th>Address</th>
                  <th>Postnummer</th>
                  <th>Stad</th>
                  <th>Telefon</th>
                  <th>Email</th>
                  <th>Betalningsmetod</th>
                  <th>Betalningsstatus</th>
                  <th>Hantera</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => {
                  return (
                    <Customer
                      key={customer._id}
                      firstname={customer.firstname}
                      lastname={customer.lastname}
                      adress={customer.adress}
                      postcode={customer.postcode}
                      city={customer.city}
                      phone={customer.phone}
                      email={customer.email}
                      paymentMethod={customer.payment_method}
                      paymentStatus={customer.payment_status}
                      handleDeleteCustomers={handleDeleteCustomers}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;
