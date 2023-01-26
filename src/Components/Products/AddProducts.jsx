import React, {useState} from 'react'

const AddProducts = () => {


    const [Products, setroducts] = useState({
      name:"",
      description:"",
      brand:"",
      image:"",
      price:"",
      category_id:"",
      priority:"",
  });
  const handleChange = (e) => {
    setroducts({
          ...Products,
          [e.target.name]: e.target.value,
      });
  };
  const {name, description, brand, image, price, category_id, priority} = Products;
    //Only authorized usser i.e admin can add products
  return (
    <div className='mt-36'>
        <h1 className='text-center font-bold md:text-2xl pb-5'>Add New Products</h1>
        <form className='sm:flex md:grid md:grid-cols-3 sm:w-60% md:w-[90%] md:items-center md:gap-7 m-auto bg-white' data-aos="fade-up">
        <label for="name" data-aos="fade-up">
            <input type="text" id="name" name='name' onChange={handleChange} value={name} required placeholder="Name"/>
            <span>Name</span>
        </label>
        <label for="price" data-aos="fade-up">
            <input type="text" id="price" name="description" onChange={handleChange} value={price} required placeholder="description"/>
            <span>Price</span>
        </label>
        <label for="brand" data-aos="fade-up">
            <input type="text" id="brand" name='brand' onChange={handleChange} value={brand} required placeholder="brand"/>
            <span>Brand</span>
        </label>
        <label for="image" data-aos="fade-up">
            <input type="text" id="image" name='image' onChange={handleChange} value={image} required placeholder="image"/>
            <span>Image</span>
        </label>
        <label for="priority" data-aos="fade-up">
            <input type="text" id="priority" name='priority' onChange={handleChange} value={priority} required placeholder="image"/>
            <span>Priority</span>
        </label>
        <label for="category" data-aos="fade-up">
            <input type="text" id="category" name='category' onChange={handleChange} value={category_id} required placeholder="category"/>
            <span>Category</span>
        </label>
        <div class="form-float scheme-des" data-aos="fade-up">
  <textarea name="description" class="inputText" onChange={handleChange}  id="" value={description} cols="30" rows="10" placeholder=" "></textarea>
  <label class="floating-label">Product description</label>
</div>
        <button  type="submit" className='bg-[#76A900] text-white rounded-lg md:w-36 md:h-12' >Submit</button>
    </form>
    </div>
  )
}

export default AddProducts;