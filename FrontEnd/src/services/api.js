// import axiosInstance from "./axiosInstance";

// // ✅ Read Data (Get Users)
// export const getUsers = async () => {
//   try {
//     const response = await axiosInstance.get("/users");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     throw error;
//   }
// };

// // ✅ Create Data (Add User)
// export const addUser = async (userData) => {
//   try {
//     const response = await axiosInstance.post("/users", userData);
//     return response.data;
//   } catch (error) {
//     console.error("Error adding user:", error);
//     throw error;
//   }
// };

// // ✅ Update Data (Edit User)
// export const updateUser = async (userId, updatedData) => {
//   try {
//     const response = await axiosInstance.put(`/users/${userId}`, updatedData);
//     return response.data;
//   } catch (error) {
//     console.error("Error updating user:", error);
//     throw error;
//   }
// };

// // ✅ Delete Data (Remove User)
// export const deleteUser = async (userId) => {
//   try {
//     await axiosInstance.delete(`/users/${userId}`);
//     return "User deleted successfully!";
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     throw error;
//   }
// };
import axios from "axios";

const API_URL = "https://reqres.in/api";

// ✅ Get Users (Read)
export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data.data;
};

// ✅ Add User (Create)
export const addUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users`, userData);
  return response.data;
};

// ✅ Update User (Edit)
export const updateUser = async (userId, updatedData) => {
  const response = await axios.put(`${API_URL}/users/${userId}`, updatedData);
  return response.data;
};

// ✅ Delete User
export const deleteUser = async (userId) => {
  await axios.delete(`${API_URL}/users/${userId}`);
  return "User deleted (but not really)";
};

// ✅ Default export (Agar tum default export chahte ho)
const api = { getUsers, addUser, updateUser, deleteUser };
export default api;
