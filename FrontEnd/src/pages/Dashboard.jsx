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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-7xl">
        <h2 className="text-2xl font-bold text-center mb-4">User List</h2>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id} className="p-2 border rounded my-1">
                Name :{user.name} <br />
                Email: {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
  );
}
