import React from "react";

const Filter = ({ columnFilters, setColumsFilters }) => {
  const fName = columnFilters?.find((f) => f.id === "name")?.value || "";

  const onFilterChange = (id,value) => setColumsFilters(
    prev => prev.filter(f=>f.id !== id).concat({
        id,value
    })
  )

  return (
    <div>
      <input
        value={fName}
        type="text"
        className="border border-black mb-4 py-1 px-2"
        placeholder="Search..."
        onChange={(e)=>onFilterChange('name',e.target.value)}
      />
    </div>
  );
};

export default Filter;
