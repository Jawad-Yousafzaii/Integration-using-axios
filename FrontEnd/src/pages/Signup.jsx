import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    try {
      const res = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      setError(null);
    } catch (err) {
      setError("Invalid credentials");
    }
    navigate("/dashboard");
  };

  return (
    <div className="bg-gray-600 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center mx-auto mt-10">
      {/* Form Section */}
      <div className="md:w-1/2 px-8 md:px-16">
        <h2 className="font-bold text-2xl text-[#87aae4]">Login</h2>
        <p className="text-xs mt-4 text-white">
          If you are already a member, easily log in
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 mt-8 rounded-xl border"
            required
          />
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 rounded-xl border w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
          >
            Login
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {token && (
          <p className="text-green-500 text-center mt-4">Token: {token}</p>
        )}
      </div>

      {/* Image Section */}
      <div className="md:block hidden w-1/2">
        <img
          className="rounded-2xl"
          src="https://i.pinimg.com/736x/9a/c0/bf/9ac0bfd5f1002b066e26d6cd48cf5851.jpg"
          alt="Login"
        />
      </div>
    </div>
  );
};

export default Signup;
