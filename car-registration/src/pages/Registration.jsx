import { useEffect, useState } from "react";
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { SIGNALR_HUB_URL } from "../config/api";
import Datatable from "../components/table/Datatable";
import Spinner from 'react-bootstrap/Spinner';


const Registration = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const connection = new HubConnectionBuilder()
      .withUrl(SIGNALR_HUB_URL)
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();

    connection.on("ReceiveRegistrationStatus", data => {
      setCars(data);
      setIsLoading(false);
    });

    connection.start()
      .then(() => console.log("Connected to SignalR"))
      .catch(err => console.error(err));

    return () => {
      connection.stop();
    };
  }, []);

  return (
    <div className="title">
      <h1>Car Registration Status</h1>
      {isLoading ? 
      (<div className="loading">
        <p>Loading content...</p>
        <Spinner animation="border" role="status"/> 
      </div>)
      
      : null}
      <Datatable data={cars} type="reg" />
    </div>
  );
};

export default Registration;
