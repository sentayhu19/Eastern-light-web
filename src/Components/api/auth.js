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

export async function getproducts (productData)
{
    return await axios.post('http://localhost:8000/api/getproducts', productData)
}


// category

export async function addnewcategory (productData)
{
    return await axios.post('http://localhost:8000/api/addcategory', productData)
}

export async function getcategories (productData)
{
    return await axios.post('http://localhost:8000/api/getcategories', productData)
}