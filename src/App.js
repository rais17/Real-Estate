import "./App.css";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import CardsDisplayer from "./components/CardsDisplayer";
import { useEffect, useState } from "react";
import {dummyData} from "./dummyData"

function App() {

  const [filters, setFilter] = useState({
    location: "",
    priceRange: "",
    propertyType: "",
  });

  console.log("location", filters.location);
  console.log("priceRange", filters.priceRange);
  console.log("propertyType", filters.propertyType);

  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    
    const filteredData = dummyData
      .filter((obj0) => {
      return !filters.propertyType || obj0.propertyType === filters.propertyType;
      })
      .filter((obj1) => {
        return !filters.location || obj1.location === filters.location;
      })
      .filter((obj2) => {
        return !filters.priceRange || obj2.priceRange === filters.priceRange;
      })
      .flatMap((originObj) => {
        return originObj.properties;
      });
    
    setFilteredProperties(filteredData);
    
  },[filters]);

  console.log("filteredProperties", filteredProperties);
  return (
    <div className="w-screen min-h-screen">
      <Navbar />
      <Filters filters={filters} setFilter={setFilter} />
      <CardsDisplayer filteredProperties={filteredProperties} />
    </div>
  );
}

export default App;
