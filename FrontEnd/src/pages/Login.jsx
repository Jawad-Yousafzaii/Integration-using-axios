import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../services/api";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(null);

  let Navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const userData = {
    email: "eve.holt@reqres.in", // Hardcoded for testing
    password: "cityslicka",
  };

  const handleLogIn = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login", userData);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setMessage("Signup successful!");
        console.log("Response:", res.data);
      }
    } catch (error) {
      setMessage("Oops! Something went wrong.");
      console.error("Error:", error);
    }

    Navigate("/dashboard");
  };
  const [showCode, setShowCode] = useState(false);

  const code = `import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(null);

  let Navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const userData = {
    email: "eve.holt@reqres.in", // Hardcoded for testing
    password: "cityslicka",
  };

  const handleLogIn = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://reqres.in/api/login", userData);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setMessage("Signup successful!");
        console.log("Response:", res.data);
      }
    } catch (error) {
      setMessage("Oops! Something went wrong.");
      console.error("Error:", error);
    }

    Navigate("/dashboard");
  }; 
  
  return ( <div className="bg-gray-900 flex justify-center items-center min-h-screen p-6 overflow-y-hidden">
        <div className="bg-gray-800 text-white rounded-lg shadow-xl w-full max-w-md p-8 h-[86vh] flex flex-col justify-center">
          <h2 className="font-semibold text-3xl text-center text-[#5f81de]">
            Signup
          </h2>
          <p className="text-sm text-center text-gray-400 mt-2">
            If you already have an account, sign up easily.
          </p>

          <form onSubmit={handleLogIn} className="flex flex-col gap-6 mt-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-xl border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="p-3 rounded-xl border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
              required
            />
            <button
              type="submit"
              className="bg-[#1E3A8A] text-white rounded-xl py-3 hover:bg-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
            >
              Signup
            </button>
          </form>

          {message && (
            <p className="text-center text-red-500 mt-4">{message}</p>
          )}
        </div>
        <div className="hidden md:block w-1/4 ml-8 p-4">
          <img
            className="rounded-xl"
            src="https://i.pinimg.com/736x/9a/c0/bf/9ac0bfd5f1002b066e26d6cd48cf5851.jpg"
            alt="Signup"
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
  `;

  return (
    <>
      <div className="bg-gray-900">
        <button
          onClick={() => setShowCode(!showCode)}
          className="mt-6 ml-20 mx-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
        >
          {showCode ? "Hide Code" : "Show Code"}
        </button>

        {/* Conditionally render the code block */}
        {showCode && (
          <pre className="mt-6 p-4 bg-gray-700 text-white rounded-lg whitespace-pre-wrap break-words">
            <code>{code}</code>
          </pre>
        )}
      </div>
      <div className="bg-gray-900 flex justify-center items-center min-h-[12rem] p-6 ">
        <div className="bg-gray-800 text-white rounded-lg shadow-xl w-full h-[76.5vh] max-w-md p-8 flex flex-col justify-center">
          <h2 className="font-semibold text-3xl text-center text-[#5f81de]">
            Signup
          </h2>
          <p className="text-sm text-center text-gray-400 mt-2">
            If you already have an account, sign up easily.
          </p>

          <form onSubmit={handleLogIn} className="flex flex-col gap-6 mt-6">
            <input
              type="email"
              name="email"
              placeholder="eve.holt@reqres.in"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-xl border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="cityslicka"
              value={formData.password}
              onChange={handleChange}
              className="p-3 rounded-xl border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
              required
            />
            <button
              type="submit"
              className="bg-[#1E3A8A] text-white rounded-xl py-3 hover:bg-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
            >
              Signup
            </button>
          </form>

          {message && (
            <p className="text-center text-red-500 mt-4">{message}</p>
          )}
        </div>
        <div className="hidden lg:block w-[330px] ml-8 p-4 ">
          <img
            className="rounded-xl h-[76.5vh]"
            src="https://i.pinimg.com/736x/9a/c0/bf/9ac0bfd5f1002b066e26d6cd48cf5851.jpg"
            alt="Signup"
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
