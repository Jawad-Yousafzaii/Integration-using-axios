import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function BeginnerAPI() {
  const [users, setUsers] = useState([]);
  const [showCode, setShowCode] = useState(false); // New state to manage code visibility

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Code you want to show when the button is clicked
  const code = `
import axios from "axios";
import { useState, useEffect } from "react";

export default function BeginnerAPI() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-8 flex items-center justify-center">
      <div className="bg-gray-800 text-white rounded-lg shadow-xl w-full max-w-4xl p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">User List</h2>
        {users.length > 0 ? (
          <ul className="space-y-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                <p className="text-lg font-medium">{user.name}</p>
                <p className="text-sm text-gray-400">{user.email}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-400">Loading...</p>
        )}
      </div>
    </div>
  );
  }
  `;

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-between items-center bg-gray-900 p-4">
        <div className="bg-gray-900">
          <button
            onClick={() => setShowCode(!showCode)}
            className=" ml-20 mx-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
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
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 "
        >
          Logout
        </button>
      </div>
      <div className="min-h-screen bg-gray-900 p-8 flex items-center justify-center">
        <div className="bg-gray-800 text-white rounded-lg shadow-xl w-full max-w-4xl p-8">
          <h2 className="text-3xl font-semibold text-center mb-6">User List</h2>
          {users.length > 0 ? (
            <ul className="space-y-4">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-300"
                >
                  <p className="text-lg font-medium">{user.name}</p>
                  <p className="text-sm text-gray-400">{user.email}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-400">Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
