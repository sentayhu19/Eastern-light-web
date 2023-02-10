import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteproduct } from "../api/auth";
import Select from "react-select";
import { editproductput } from "../api/auth";
import SkeletonCard from "../Skeleton/SkeletonCard";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faRuler } from "@fortawesome/free-solid-svg-icons";
import { setLoading } from "../../redux/eastern-light/reducer/reducer";
import ErrorAlert from "../Alert/ErrorAlert";

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
    priority: "",
    unit: "",
    box: "",
    brand: "",
  });

  const { protectedData } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.catagory);

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
      ["priority"]: product.priority,
      ["unit"]: product.unit,
      ["box"]: product.box,
      ["brand"]: product.brand,
    });
    seteditToggle(!editToggle);
  };

  const handledelete = async () => {
    await deleteproduct(deletedproduct)
      .then((response) => {})
      .catch((error) => {
        ErrorAlert(error.response.data.message);
      });
    window.location.reload();
  };
  const handleedit = async (e) => {
    e.preventDefault();

    try {
      editproductput(editproduct);
    } catch (error) {
      ErrorAlert(error.response.data.message);
    }
    window.location.reload();
  };

  return (
    <>
      <div
        className="relative flex items-center md:justify-center flex-col 
        md:flex-row md:gap-4 sm:gap-1 m-auto sm:w-[90%] md:w-[96%] md:h-[500px]
         sm:h-[380px] shadow-lg mt-10 md:p-7 sm:p-3 hover:border-2 border-[#76A900] rounded-2xl"
        key={product._id}
        data-aos="fade-up"
      >
        {isloading ? (
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
                {product.price} ETB
              </p>
            </div>
            <p className="sm:text-[13px] md:hidden">
              {product.description.slice(0, 20) + "..."}
            </p>
            <p
              className="sm:text-[13px] sm:hidden md:flex"
              title={product.description}
            >
              {" "}
              {product.description.slice(0, 80) + "..."}{" "}
            </p>
            <div className="flex items-center md:gap-2 sm:text-[12px] mx-3">
              <p title="Box">
                <FontAwesomeIcon icon={faBox} />
                &nbsp;
                {product.box}
              </p>{" "}
              |
              <p title="Unit">
                <FontAwesomeIcon icon={faRuler} />
                &nbsp;
                {product.unit}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                className="bg-[#76A900] text-white rounded-lg p-1"
                onClick={handleeditToggle}
                title="Edit"
              >
                Edit
              </button>
              <button
                onClick={handledeletetoggle}
                className="bg-red-500 text-white rounded-lg px-6"
                title="Delete"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        )}

        {deleteToggle ? (
          <div className="absolute z-20 flex flex-col gap-10 top-6 w-full md:h-[450px] sm:h-[260px] bg-white">
            <div className="flex flex-col pt-7 rounded-lg gap-7 bg-[#F0F1F3]">
              <p className="border-b pb-5">
                Are you sure you want to delete {product.name} ?
              </p>
              <button
                className="bg-red-500 text-white rounded-lg p-1 hover:bg-white hover:text-red-500"
                onClick={handledelete}
                id={product.id}
                title="Delete"
              >
                Delete
              </button>
              <button
                className="bg-[#76A900] text-white rounded-lg p-1 hover:bg-white hover:text-[#76A900]"
                onClick={handledeletetoggle}
                title="Cancel"
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
        <>
          <div className="fixed top-0 left-0 z-40 w-full h-full bg-[#01090f] opacity-90"></div>
          <div className="fixed pb-10  z-50 flex flex-col overflow-y-auto rounded-lg gap-7 top-10 items-center justify-center bg-white h-screen sm:w-[90%] ml-[4%] md:w-[40%] ">
            <form className="flex flex-col w-full gap-3 m-auto mt-36">
              <h2 className="border-b px-5 text-xl">Edit {product.name} ?</h2>
              <label className="border-none text-left mb-[-15px]">Name</label>
              <input
                type="text"
                className="border border-green-600 text-green-500 rounded-lg p-2"
                placeholder="Name"
                value={editproduct.name}
                onChange={(e) =>
                  seteditproduct({ ...editproduct, name: e.target.value })
                }
              />
              
              <label className="border-none text-left mb-[-15px]">Description</label>
              <input
                type="text"
                className="border-2 border-green-600 rounded-lg p-2 text-green-500"
                placeholder="Description"
                value={editproduct.description}
                onChange={(e) =>
                  seteditproduct({
                    ...editproduct,
                    description: e.target.value,
                  })
                }
              />
              <label className="border-none text-left mb-[-15px]">Price</label>
              <input
                type="text"
                className="border-2 border-green-600 rounded-lg p-2 text-green-500"
                placeholder="Price"
                value={editproduct.price}
                onChange={(e) =>
                  seteditproduct({ ...editproduct, price: e.target.value })
                }
              />
              <label className="border-none text-left mb-[-15px]">Brand</label>
              <input
                type="text"
                className="border hover:border rounded-lg p-2 text-green-500"
                placeholder="Price"
                value={editproduct.brand}
                onChange={(e) =>
                  seteditproduct({ ...editproduct, brand: e.target.value })
                }
              />
              <label className="border-none text-left mb-[-10px]">Category</label>
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
                className="border-2 border-green-600 rounded-lg p-2 text-green-500"
                placeholder="Image"
                value={editproduct.image}
                onChange={(e) =>
                  seteditproduct({ ...editproduct, image: e.target.value })
                }
              />
              <label className="border-none text-left mb-[-15px]">Priority</label>
              <input
                type="text"
                className="border-2 border-green-600 rounded-lg p-2 text-green-500"
                placeholder="Priority"
                value={editproduct.priority}
                onChange={(e) =>
                  seteditproduct({ ...editproduct, priority: e.target.value })
                }
              />
              {/* edit unit  */}
              <label className="border-none text-left mb-[-15px]">Unit</label>
              <input
                type="text"
                className="border-2 border-green-600 text-green-500 rounded-lg p-2"
                placeholder="Unit"
                value={editproduct.unit}
                onChange={(e) =>
                  seteditproduct({ ...editproduct, unit: e.target.value })
                }
              />
              <label className="border-none text-left mb-[-15px]">Box</label>
              <input
                type="text"
                className="border-2 border-green-600 rounded-lg p-2 text-green-500"
                placeholder="Box"
                value={editproduct.box}
                onChange={(e) =>
                  seteditproduct({ ...editproduct, box: e.target.value })
                }
              />
              <button
                className="bg-green-600 text-white rounded-lg p-1 hover:bg-white hover:text-green-600"
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
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default AdminProduct;
