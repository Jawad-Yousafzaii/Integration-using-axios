import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log("🔹 Sending Login Request...");
      console.log("Email:", email);JWT_SECRET=your_secret_key
      PORT=5000
      
      console.log("Password:", password);

      const response = await axios.post(
        "https://backend-for-integration-3.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log("✅ Login Successful:", response.data);
    } catch (error) {
      console.log("❌ Login Error:", error.response?.data || error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login to Your Account
        </h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded-lg"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
        <div className="w-full text-center flex justify-center items-center gap-2 mt-4">
          <h1 className="text-sm">Don't Have An Account ?</h1>
          <Link to="/signup" className="text-blue-400 font-bold">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
