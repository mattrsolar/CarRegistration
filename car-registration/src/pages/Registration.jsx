import React, { useEffect, useState } from "react";
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import RegistrationTable from "../components/RegistrationTable";

const Registration = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const connection = new HubConnectionBuilder()
      .withUrl("http://localhost:5179/registrationHub")
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();

    connection.on("ReceiveRegistrationStatus", data => {
      setCars(data);
    });

    connection.start()
      .then(() => console.log("Connected to SignalR"))
      .catch(err => console.error(err));

    return () => {
      connection.stop();
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Car Registration Status</h1>
      <RegistrationTable cars={cars} />
    </div>
  );
};

export default Registration;
