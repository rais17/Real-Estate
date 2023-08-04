import React from 'react'
import FilterTemplate from './FilterTemplate'

const Filters = ({filters, setFilter}) => {
  return (
    <div className='flex justify-center w-full gap-8 py-5 bg-slate-700'>
      <FilterTemplate
        name="location"
        label="Location"
        value={filters.location}
        options={["Delhi", "Mumbai", "Chennai", "Kolkata"]}
        setFilter={setFilter}
      />
      <FilterTemplate
        name="priceRange"
        label="Price Range"
        value={filters.priceRange}
        options={["100K - 200K", "200K - 300K", "300K - 400K", "400K - 500K"]}
        setFilter={setFilter}
      />
      <FilterTemplate
        name="propertyType"
        label="Property Type"
        value={filters.propertyType}
        options={["House", "Flat"]}
        setFilter={setFilter}
      />
    </div>
  );
}

export default Filters