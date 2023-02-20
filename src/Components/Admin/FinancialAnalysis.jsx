import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';
import { getcategories, getunit } from '../api/auth';
import { fetchcatagory, fetchunit } from '../../redux/eastern-light/reducer/reducer';

const FinancialAnalysis = ({ data }) => {
  const dispatch = useDispatch();
useEffect(() => {
    const pulldata = async () => {
      getcategories().then((response) => {
        dispatch(fetchcatagory(response.data.category));
      });
      getunit().then((response) => {
        dispatch(fetchunit(response.data.units));
      });
    };
    pulldata();
  }, []);

  const {units} = useSelector((state) => state.unit);
  const {categories} = useSelector((state) => state.catagory);
  const category = categories.filter((category) => category.id === data?.category_id);
const unit = units.filter((unit) => unit.id === data.unit_id);
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
            <td className="p-3 border border-gray-400">{unit.length>0 ? unit[0].name : ''}</td>
            <td className="p-3 border border-gray-400">{Convert(Number(data.box))}</td>
            <td className="p-3 border border-gray-400">{Convert(Number(data.box * data.price))} ETB</td>
            <td className="p-3 border border-gray-400"><p className='text-green-600'>{timeAgo}</p> <p>{formatDate(data.created_at)}</p></td>
          </tr>  
          </>
  );
};

export default FinancialAnalysis;