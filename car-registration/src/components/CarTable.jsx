import React from "react";

const CarTable = ({ cars }) => (
  <table border="1" cellPadding="5" style={{ borderCollapse: "collapse", width: "100%" }}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Make</th>
        <th>Model</th>
        {/* <th>Registration Expiry</th> */}
      </tr>
    </thead>
    <tbody>
      {cars.map(car => (
        <tr key={car.id}>
          <td>{car.id}</td>
          <td>{car.make}</td>
          <td>{car.model}</td>
          {/* <td>{new Date(car.registrationExpiry).toLocaleDateString()}</td> */}
        </tr>
      ))}
    </tbody>
  </table>
);

export default CarTable;
