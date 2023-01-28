import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Error = ({message}) => {
  useEffect(() => {
    const alert = document.querySelector('.animation-slide-right');
    setTimeout(() => {
      alert.classList.remove('animation-slide-right');
      alert.classList.add('animation-slide-right-back');
    }, 3000);
  }, []);
  return (
    <div className="fixed right-0 m-1 p-4 bg-red-500 text-white rounded-lg shadow-md animation-slide-right">
      <div className='flex items-center gap-3'>
      <FontAwesomeIcon icon={faXmark} className=" text-white text-3xl border rounded-lg w-8 "/>
      <p> {message}</p>
       </div>
      <button className="absolute top-0 right-0 p-1 text-red-500 hover:text-white">
        <i className="fas fa-times"></i>
      </button>
    </div> 
  )
}

export default Error;