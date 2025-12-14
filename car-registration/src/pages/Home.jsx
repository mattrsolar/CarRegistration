import React, { useEffect, useState } from "react";
import axios from "axios";
import CarTable from "../components/CarTable";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5179")
      .then(res => setCars(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Cars</h1>
      <CarTable cars={cars} />
    </div>
  );
};

export default Home;
