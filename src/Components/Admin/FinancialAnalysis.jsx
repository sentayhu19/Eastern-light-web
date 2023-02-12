import React, { useState } from 'react';

const FinancialAnalysis = ({ data }) => {
  function Convert(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


  return (
   <>
          <tr className="text-gray-700 hover:bg-gray-700 hover:text-white cursor-pointer odd:bg-gray-200">
            <td className="p-3 border border-gray-400">{data.brand}</td>
            <td className="p-3 border border-gray-400">{data.name}</td>
            <td className="p-3 border border-gray-400">{Convert(Number (data.price))}</td>
            <td className="p-3 border border-gray-400">{Convert(Number( data.unit))}</td>
            <td className="p-3 border border-gray-400">{Convert(Number(data.box))}</td>
            <td className="p-3 border border-gray-400">{Convert(Number( data.unit * data.price))} ETB</td>
            <td className="p-3 border border-gray-400">{Convert(Number(data.box * data.price))} ETB</td>
          </tr>  
          </>
  );
};

export default FinancialAnalysis;