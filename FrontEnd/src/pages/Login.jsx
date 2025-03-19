import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  let Navigate = useNavigate();
  const [message, setMessage] = useState("");
  const API_URL = "https://reqres.in/api/login";
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //it is the request in which we send the cridentials to the backend

  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post({ API_URL }, formData);
  //     setMessage("Response Agya HUrrra");
  //     console.log("Response ye aya ", res.data);
  //   } catch (error) {
  //     setMessage("jani error agya yar.");
  //     console.log("error", error);
  //   }
  // };

  // In this we are using the hardcoded data to test the signup functionality
  // and we are not using the form data
  const userData = {
    email: "eve.holt@reqres.in", // Reqres ke test users
    password: "cityslicka",
  };

  // In this we are using the hardcoded data to test the signup functionality
  // and we are not using the form data
  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post(API_URL, userData);
  //     setMessage("Response Agya HUrrra");
  //     console.log("Response ye aya ", res.data);

  //     Navigate("/dashboard");
  //   } catch (error) {
  //     setMessage("jani error agya yar.");
  //     console.log("error", error);
  //   }
  // };

  //Learning of saving the token in the loacal storage and fetching data using the token

  //storing of the token in state
  const [token, setToken] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(API_URL, userData);

      if (res.data.token) {
        localStorage.setToken("token", res.data.token);
        setMessage("Response Agya HUrrra");
        console.log("Response ye aya ", res.data);
      }
    } catch (error) {
      setMessage("jani error agya yar.");
      console.log("error", error);
    }

    Navigate("/dashboard");
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Signup</h2>
      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md"
        >
          Signup
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default Signup;
