import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable,
  } from "@tanstack/react-table";
  import React, { useState } from "react";
  import DATA from "./data";
  import EditCell from "./EditCell";
import Filter from "./Filter";
  
  // Define the table columns
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
      cell: EditCell, // Custom cell component for editing
    },
    {
      accessorKey: "age",
      header: "Age",
      cell: EditCell, // Simple cell rendering
    },
    {
      accessorKey: "country",
      header: "Country",
      cell: (props) => <p>{props.getValue()}</p>, // Simple cell rendering
    },
    {
      accessorKey: "year",
      header: "Year",
      cell: (props) => <p>{props.getValue()}</p>, // Simple cell rendering
  },
  {
    accessorKey: "occupation",
    header: "Occupation",
    cell: (props) => <p>{props.getValue()}</p>,  // Simple cell rendering
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (props) => <p>{props.getValue()}</p>,  // Simple cell rendering
  },
];
const Table = () => {
    const [data, setData] = useState(DATA);
    const [columnFilters,setColumsFilters] = useState([])
  
    // Define table instance
    const table = useReactTable({
      data,
      columns,
      state:{
        columnFilters
      },
      getSortedRowModel:getSortedRowModel(),
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel:getFilteredRowModel(),
      meta: {
        // Function to update data
        updateData: (rowIndex, coloumId, value) =>
          setData((prev) =>
            prev?.map((row, index) =>
              index === rowIndex
                ? {
                    ...prev[rowIndex],
                    [coloumId]: value,
                  }
                : row
            )
          ),
      },
    });
  
    return (
      // Apply full-width styling to the container
      <div className="w-full">
        <Filter columnFilters={columnFilters} setColumsFilters={setColumsFilters} />
        <table className="items-center rounded-sm bg-transparent max-h-[450px] overflow-y-auto block w-full overflow-x-auto border-collapse border">
          <thead className="bg-slate-200">
            {/* Render table header */}
            {table?.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {/* Render header cells */}
                {headerGroup?.headers?.map((header) => (
                  <th
                    className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    key={header?.id}
                  >
                    {header?.column?.columnDef?.header}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {/* Render table body */}
            {table?.getRowModel().rows.map((row) => (
              <tr key={row?.id}>
                {/* Render cells in each row */}
                {row?.getVisibleCells().map((cell) => (
                  <td
                    key={cell?.id}
                    className="border-t border-gray-300 px-6 align-middle  text-xs whitespace-nowrap p-4 "
                  >
                    {/* Render cell content */}
                    {flexRender(cell?.column?.columnDef?.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;