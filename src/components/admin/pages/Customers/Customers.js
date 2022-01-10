import { useState, useEffect } from "react";
import Api from "@/components/admin/helper/api";

// Components
import Customer from "./CustomerSingle";
import DocumentTitle from "react-document-title";
import StatusBar from "../../components/global/Statusbar/StatusBar";
import ErrorNotice from "@/components/global/ErrorNotice/ErrorNotice";

// CSS
import "./Customers.css";

function Customers({ city }) {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);

  const api = new Api();

  const getCustomers = () => {
    api
      .getCustomers(city)
      .then((res) => {
        setCustomers(res.data.users);
      })
      .catch((err) => {
        setError(err);
      });
  };

  // API call
  useEffect(() => {
    getCustomers();
  });

  // Deletes a customer
  const handleDeleteCustomers = (customers) => {
    api
      .deleteCustomer(customers._id, city)
      .then(() => {
        setCustomers(
          customers.filter((customer) => customer._id !== customers._id)
        );

        setError("Kund borttagen ", customers._id);
      })
      .catch((err) => {
        setError(err);
      });

    console.log("Customer deleted", customers);
  };

  return (
    <>
      <StatusBar city={city} />
      <DocumentTitle title="Kunder"></DocumentTitle>

      {/* Display error */}
      {error ? <ErrorNotice err={error} /> : null}

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
