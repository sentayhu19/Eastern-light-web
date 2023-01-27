import axios from "axios";
axios.defaults.withCredentials = true;


export async function onLogin (loginData)
{
    return await axios.post('http://localhost:8000/api/login', loginData)
}

export async function onLogout ()
{
    return await axios.get('http://localhost:8000/api/logout')
}

export async function fetchProtectedInfo(){
    return await axios.get('http://localhost:8000/api/protected')
}

// product

export async function addnewproduct (productData)
{
    return await axios.post('http://localhost:8000/api/addproduct', productData)
}

export async function getproducts ()
{
    return await axios.get('http://localhost:8000/api/getproducts')
}


// category

export async function addnewcategory (categoryData)
{
    return await axios.post('http://localhost:8000/api/addcategory', categoryData)
}

export async function getcategories ()
{
    return await axios.get('http://localhost:8000/api/getcategories')
}

