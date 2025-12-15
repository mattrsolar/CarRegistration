import React, { useEffect, useState } from "react";
import axios from "axios";
import CarTable from "../components/CarTable";
import { API_URL } from "../config/api";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [make, setMake] = useState("");
  const [selectedMake, setSelectedMake] = useState("");

  const fetchCars = async (make = "") => {
    const url = make ? `${API_URL}/?make=${make}` : `${API_URL}/`;
    const response = await axios.get(url);
    setCars(response.data);
  };

  const loadMakes = async () => {
    const response = await axios.get(`${API_URL}/`);
    const optionMakes = [
      ...new Set(response.data.map(car => car.make))
    ];
    setMakes(optionMakes);
  };

  const handleMakeChange = (e) => {
    const value = e.target.value;
    setSelectedMake(value);
    fetchCars(value);
  };

  const clearFilter = () => {
    setSelectedMake("");
    fetchCars();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cars</h1>

      {/* Filter by make */}
      <div style={{ marginBottom: "15px" }}>
        <select value={selectedMake} onChange={handleMakeChange}>
          <option value="">All Makes</option>
          {makes.map(make => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>

        <button
          onClick={clearFilter}
          style={{ marginLeft: "10px" }}
        >
          Clear
        </button>
      </div>

      <CarTable cars={cars} />
    </div>
  );
};

export default Home;
