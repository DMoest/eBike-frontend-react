function StationSingle({ city, capacity, address, postcode, active }) {
  return (
    <tr>
      {/* <td>{id}</td> */}
      <td data-label="Stad">{city}</td>
      <td data-label="Kapacitet">{capacity}</td>
      <td data-label="Adress">{address}</td>
      <td data-label="Postnummer">{postcode}</td>
      <td data-label="Aktiv">{active}</td>
    </tr>
  );
}

export default StationSingle;
