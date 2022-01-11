function Customer({
  firstname,
  lastname,
  adress,
  postcode,
  city,
  phone,
  email,
  paymentMethod,
  paymentStatus,
  handleDeleteCustomers,
}) {
  return (
    <tr>
      <td data-label="Förnamn">{firstname}</td>
      <td data-label="Efternamn">{lastname}</td>
      <td data-label="Address">{adress}</td>
      <td data-label="Postnummer">{postcode}</td>
      <td data-label="Stad">{city}</td>
      <td data-label="Telefonnummer">{phone}</td>
      <td data-label="Email">{email}</td>
      <td data-label="Betalningsmetod">{paymentMethod}</td>
      <td data-label="Betalningsstatus">{paymentStatus}</td>
      <td data-label="Ta bort">
        <button onClick={handleDeleteCustomers}>Ta bort</button>
      </td>
    </tr>
  );
}

export default Customer;
