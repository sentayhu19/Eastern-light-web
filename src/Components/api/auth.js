import axios from "axios";
axios.defaults.withCredentials = true;

const endPoint = "https://api.easternlightpharma.com/v1";

export async function onLogin(loginData) {
  return await axios.post(`${endPoint}/login`, loginData);
}

export async function onLogout() {
  return await axios.get(`${endPoint}/logout`);
}

export async function fetchProtectedInfo() {
  return await axios.get(`${endPoint}/protected`);
}

// product

export async function addnewproduct(productData) {
  return await axios.post(`${endPoint}/addproduct`, productData);
}

export async function getproducts() {
  return await axios.get(`${endPoint}/getproducts`);
}

// category

export async function addnewcategory(categoryData) {
  return await axios.post(`${endPoint}/addcategory`, categoryData);
}

export async function getcategories() {
  return await axios.get(`${endPoint}/getcategories`);
}

export async function getproductshow() {
  return await axios.get(`${endPoint}/productshow`);
}
export async function getsearchbycat(catagory_id) {
  return await axios.post(`${endPoint}/searchbycat`, catagory_id);
}

export async function deleteproduct(id) {
  return await axios.post(`${endPoint}/deleteproduct`, id);
}

export async function editproductput(product) {
  return await axios.put(`${endPoint}/editproduct`, product);
}

export async function getproduct(id) {
  return await axios.get(`${endPoint}/getproduct/${id}`);
}
export async function addmessage(message) {
  return await axios.post(`${endPoint}/addmessage`, message);
}
export async function getmessages() {
  return await axios.get(`${endPoint}/getmessages`);
}
