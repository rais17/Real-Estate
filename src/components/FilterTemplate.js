import React from "react";
import "./FilterTemplate.css"; // Import your CSS file

const FilterTemplate = ({ name, label, value, options, setFilter }) => {
  const handleSelect = (selectOption) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: selectOption,
    }));
  };

  return (
    <div className="filter-container">
      <label htmlFor={name}>{label}:</label>
      <select
        className="filter-dropdown"
        name={name}
        id={name}
        value={value}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="">{value === "" ? "All" : label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterTemplate;
