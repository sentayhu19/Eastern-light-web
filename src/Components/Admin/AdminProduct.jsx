import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteproduct } from "../api/auth";
import Select from "react-select";
import { editproductput } from "../api/auth";
import SkeletonCard from "../Skeleton/SkeletonCard";
import { setLoading } from "../../redux/eastern-light/reducer/reducer";

const AdminProduct = ({ product }) => {
  const dispatch = useDispatch();
  const { isloading } = useSelector((state) => state.auth);
  const [deletedproduct, setdeletedproduct] = useState({ id: "" });

  const [deleteToggle, setdeleteToggle] = useState(false);
  const [editToggle, seteditToggle] = useState(false);
  const [editproduct, seteditproduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const { protectedData } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.catagory);

  // useEffect(() => {
  //   dispatch(setLoading(true));
  //   setTimeout(() => {
  //     dispatch(setLoading(false));
  //   }, 3000);
  // }, []);

  const handledeletetoggle = () => {
    setdeletedproduct({ ["id"]: product.id });
    setdeleteToggle(!deleteToggle);
  };

  const handleeditToggle = () => {
    seteditproduct({
      ["id"]: product.id,
      ["name"]: product.name,
      ["description"]: product.description,
      ["price"]: product.price,
      ["category"]: product.category,
      ["image"]: product.image,
    });
    seteditToggle(!editToggle);
  };

  const handledelete = async () => {
    await deleteproduct(deletedproduct)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleedit = async (e) => {
    e.preventDefault();

    try {
      editproductput(editproduct);
      console.log("EDIT SUCCESS: ", editproduct);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="relative flex items-center md:justify-center flex-col 
        md:flex-row md:gap-4 sm:gap-1 m-auto sm:w-[90%] md:w-[96%] md:h-[500px]
         sm:h-[300px] shadow-lg mt-10 md:p-7 sm:p-3 hover:border-2 border-[#76A900] rounded-lg"
              key={product._id} data-aos="fade-up"
      >
        {isloading ? 
        (
          <SkeletonCard />
        ) : (
          <div className="flex items-center flex-col md:gap-4 sm:gap-1">
            <img
              src={product.image}
              alt={product.name}
              className="md:w-[200px] md:h-[200px] sm:w-[250px] sm:h-[100px] hover:scale-110"
            />
            <div className="border-b">
              <h3 className="font-bold w-full sm:text-[15px]">
                {product.name}
              </h3>
              <p className="font-bold w-full sm:text-[13px] bg-[#76A900] text-white rounded-lg mt-3">
                {product.price} Birr
              </p>
            </div>
            <p className="sm:text-[13px] md:hidden">
              {product.description.slice(0, 20) + "..."}
            </p>
            <p className="sm:text-[13px] sm:hidden md:flex">
              {" "}
              {product.description.slice(0, 80) + "..."}{" "}
            </p>
            <div className="flex flex-col gap-2">
              <button
                className="bg-[#76A900] text-white rounded-lg p-1"
                onClick={handleeditToggle}
              >
                Edit
              </button>
              <button
                onClick={handledeletetoggle}
                className="bg-red-500 text-white rounded-lg p-1"
              >
                Delete
              </button>
            </div>
          </div>
        )}

        {deleteToggle ? (
          <div className="absolute z-20 flex flex-col gap-10 top-7 w-full h-[450px] bg-white">
            <div className="flex flex-col pt-7 rounded-lg gap-7 bg-[#F0F1F3]">
              <p className="border-b pb-5">
                Are you sure you want to delete {product.name} ?
              </p>
              <button
                className="bg-red-500 text-white rounded-lg p-1 hover:bg-white hover:text-red-500"
                onClick={handledelete}
                id={product.id}
              >
                Delete
              </button>
              <button
                className="bg-[#76A900] text-white rounded-lg p-1 hover:bg-white hover:text-[#76A900]"
                onClick={handledeletetoggle}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {editToggle ? (
        <div className="fixed top-0 left-0 z-40 w-full h-full  bg-[#7e7e81] opacity-90 ">
          <div className="fixed z-50 flex flex-col p-4 overflow-x-auto overflow-y-auto sm:left-3 sm:w-[95%] rounded-lg gap-7 md:w-[70%] md:left-[30%] max-w-[650px]  items-center justify-center bg-white">
            <h2 className="border-b pb-5 text-xl">Edit {product.name} ?</h2>
            <form className="flex flex-col gap-3  md:w-[600px] m-auto">
              <label className="border-none text-left">Name</label>
              <input
                type="text"
                className="border-2 border-[#76A900] rounded-lg p-2"
                placeholder="Name"
                value={editproduct.name}
                onChange={(e) =>
                  seteditproduct({ ...editproduct, name: e.target.value })
                }
              />
              <label className="border-none text-left">Description</label>
              <input
                type="text"
                className="border-2 border-[#76A900] rounded-lg p-2"
                placeholder="Description"
                value={editproduct.description}
                onChange={(e) =>
                  seteditproduct({
                    ...editproduct,
                    description: e.target.value,
                  })
                }
              />
              <label className="border-none text-left">Price</label>
              <input
                type="text"
                className="border-2 border-[#76A900] rounded-lg p-2"
                placeholder="Price"
                value={editproduct.price}
                onChange={(e) =>
                  seteditproduct({ ...editproduct, price: e.target.value })
                }
              />
              <label className="border-none text-left">Category</label>
              <input
                type="text"
                className="border-2 border-[#76A900] rounded-lg p-2"
                placeholder="Category"
                value={editproduct.category}
                onChange={(e) =>
                  seteditproduct({ ...editproduct, category: e.target.value })
                }
              />
              <Select
                options={categories}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id}
                name="category"
                value={editproduct.category}
                onChange={(e) =>
                  seteditproduct({ ...editproduct, category: e.target.value })
                }
                placeholder="Category"
              />
              <input
                type="text"
                className="border-2 border-[#76A900] rounded-lg p-2"
                placeholder="Image"
                value={editproduct.image}
                onChange={(e) =>
                  seteditproduct({ ...editproduct, image: e.target.value })
                }
              />
              <button
                className="bg-[#76A900] text-white rounded-lg p-1 hover:bg-white hover:text-[#76A900]"
                onClick={handleeditToggle}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white rounded-lg p-1 hover:bg-white hover:text-red-500"
                onClick={handleedit}
              >
                Edit
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AdminProduct;
