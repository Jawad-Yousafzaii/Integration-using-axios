import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
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
  };

  return (
    <div className="p-5">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 m-2"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 m-2"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2">
        Login
      </button>
      {token && <p>Token: {token}</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Login;
