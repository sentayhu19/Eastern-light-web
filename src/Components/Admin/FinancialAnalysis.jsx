import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

const FinancialAnalysis = ({ data }) => {
  function Convert(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
const date = new Date(data.created_at);
const timeAgo = formatDistanceToNow(date, { addSuffix: true });
  return (
   <>
          <tr className="text-gray-700 hover:bg-gray-700 hover:text-white cursor-pointer odd:bg-gray-200">
            <td className="p-3 border border-gray-400">{data.brand}</td>
            <td className="p-3 border border-gray-400">{data.name}</td>
            <td className="p-3 border border-gray-400">{Convert(Number (data.price))}</td>
            <td className="p-3 border border-gray-400">{Convert(Number( data.unit))}</td>
            <td className="p-3 border border-gray-400">{Convert(Number(data.box))}</td>
  
            <td className="p-3 border border-gray-400">{Convert(Number(data.box * data.price))} ETB</td>
            <td className="p-3 border border-gray-400"><p className='text-green-600'>{timeAgo}</p> <p>{formatDate(data.created_at)}</p></td>
          </tr>  
          </>
  );
};

export default FinancialAnalysis;