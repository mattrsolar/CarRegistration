import React, { useEffect, useState } from "react";
import axios from "axios";
import CarTable from "../components/CarTable";
import { API_URL } from "../config/api";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");

  //Load cars (with optional make filter)
  const fetchCars = async (make = "") => {
    try {
      const response = await axios.get(`${API_URL}/`, {
        params: make ? { make } : {}
      });
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  //Load unique makes for dropdown
  const fetchMakes = async () => {
    try {
      const response = await axios.get(`${API_URL}/`);
      const uniqueMakes = [...new Set(response.data.map(car => car.make))];
      setMakes(uniqueMakes);
    } catch (error) {
      console.error("Error fetching makes:", error);
    }
  };

  //Once load page, fetch cars and makes
  useEffect(() => {
    fetchCars();
    fetchMakes();
  }, []);

  //Activate dropdown change
  const handleMakeChange = (e) => {
    const make = e.target.value;
    setSelectedMake(make);
    fetchCars(make);
  };

  // Clear filter button
  const clearFilter = () => {
    setSelectedMake("");
    fetchCars();
  }

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
