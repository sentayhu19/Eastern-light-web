import axios from "axios";
axios.defaults.withCredentials = true;

const endPoint = "http://localhost:8000/api";

export async function onLogin (loginData)
{
    return await axios.post(`${(endPoint)}/login`, loginData)
}

export async function onLogout ()
{
    return await axios.get(`${(endPoint)}/logout`)
}

export async function fetchProtectedInfo(){
    return await axios.get(`${(endPoint)}/protected`)
}

// product

export async function addnewproduct (productData)
{
    return await axios.post(`${(endPoint)}/addproduct`, productData)
}

export async function getproducts ()
{
    return await axios.get(`${(endPoint)}/getproducts`)
}


// category

export async function addnewcategory (categoryData)
{
    return await axios.post(`${(endPoint)}/addcategory`, categoryData)
}

export async function getcategories ()
{
    return await axios.get(`${(endPoint)}/getcategories`)
}

export async function getproductshow()
{
    return await axios.get(`${(endPoint)}/productshow`)
}
export async function getsearchbycat(catagory_id)
{
    return await axios.post(`${(endPoint)}/searchbycat`,catagory_id)
}

export async function deleteproduct(id)
{
    return await axios.delete(`${(endPoint)}/deleteproduct`,id)   
}
