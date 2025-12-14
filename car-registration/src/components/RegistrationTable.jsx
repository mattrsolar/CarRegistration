import React from "react";

const RegistrationTable = ({ cars }) => (
  <table border="1" cellPadding="5" style={{ borderCollapse: "collapse", width: "100%" }}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Make</th>
        <th>Model</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {cars.map(car => (
        <tr key={car.id}>
          <td>{car.id}</td>
          <td>{car.make}</td>
          <td>{car.model}</td>
          <td>{car.isExpired ? "Expired" : "Valid"}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default RegistrationTable;
