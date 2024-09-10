import React from "react";

const CustomTable = ({ headers, data, renderRow, isWhite = true }) => {
  return (
  <table
  className={`w-full ${
    isWhite ? "bg-white" : "bg-sky-200"
  } border border-gray-300 rounded-lg overflow-hidden h-full mt-2`}
>

      <thead className="bg-blue-100">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="table-header">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
            <tr key={item.id} className="border-t border-gray-300 text-center">
              {renderRow(item)}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
