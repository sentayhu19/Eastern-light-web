import React, {useState} from 'react'
import Adminnav from '../Navigations/Adminnav';
import check from "../../assets/check.gif";
import { addnewcategory } from '../api/auth';
const AddCategory = () => {
    const [error, setError] = useState("");
    const [catagory, setcatagory] = useState({
      name: "",
    });
    const [isOpen , setIsOpen] = useState(false)
    const handleChange = (e) => {
        setcatagory({
        ...catagory,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await addnewcategory(catagory);
        //show suchess message
        setIsOpen(true)
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
  
      } catch (err) {
        setError(err.message);
      }
    };
  
    const { name} = catagory;
    //Only authorized usser i.e admin can add products
    return (
      <div className="mt-36 relative">
        <Adminnav/>
        <h1 className="text-center font-bold md:text-2xl pb-5">
          Add New Catagory
        </h1>
        <form onSubmit={handleSubmit}
          className="sm:flex flex-col sm:w-60% md:w-[90%] md:items-center md:gap-7 m-auto bg-white"
          data-aos="fade-up"
        >
          <label for="name" data-aos="fade-up">
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={name}
              required
              placeholder="Name"
            />
            <span>Name</span>
          </label>
          <button
            type="submit"
            className="bg-[#76A900] text-white rounded-lg md:w-36 md:h-12"
          >
            Submit
          </button>
          <p className="text-red-500 ">{error}</p>
        </form>
        {isOpen ? 
        <div className="absolute flex flex-col items-center justify-center bg-[#000] top-36 z-10 w-full h-52">
        <img className="w-44" src={check}/>
          <h1 className="text-white">SAVED</h1>
      </div>
        : "" }
      </div>
    );
}

export default AddCategory;