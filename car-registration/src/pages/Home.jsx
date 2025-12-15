import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import { API_URL } from "../config/api";
import Form from "react-bootstrap/Form";
import Datatable from "../components/table/Datatable";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //Load cars (with optional make filter)
  const fetchCars = async (make = "") => {
    try {
      const response = await axios.get(`${API_URL}/`, {
        params: make ? { make } : {},
      });
      setCars(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching cars:", error);
      setIsLoading(false);
    }
  };

  //Load unique makes for dropdown
  const fetchMakes = async () => {
    try {
      const response = await axios.get(`${API_URL}/`);
      const uniqueMakes = [...new Set(response.data.map((car) => car.make))];
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

  return (
    <div>
      <h1>Cars</h1>

      {/* Filter by make */}
      <div style={{ marginBottom: "15px" }}>
        <Form.Select value={selectedMake} onChange={handleMakeChange}>
          <option value="">All Makes</option>
          {makes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </Form.Select>
      </div>

      {isLoading ? 
      (<div className="loading">
        <p>Loading content...</p>
        <Spinner animation="border" role="status"/> 
      </div>)
      
      : null}

      <Datatable data={cars} type="cars" />
    </div>
  );
};

export default Home;
