import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:5000/api/products");
    setProducts(data);
  };

  const addProduct = async () => {
    await axios.post("http://localhost:5000/api/products", {
      name,
      price,
      description,
    });
    fetchProducts();
    setName("");
    setPrice("");
    setDescription("");
  };

  const updateProduct = async () => {
    await axios.put(`http://localhost:5000/api/products/${editingId}`, {
      name,
      price,
      description,
    });
    fetchProducts();
    setEditingId(null);
    setName("");
    setPrice("");
    setDescription("");
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 mr-2"
        />
        {editingId ? (
          <button
            onClick={updateProduct}
            className="bg-green-500 text-white px-4 py-2"
          >
            Update
          </button>
        ) : (
          <button
            onClick={addProduct}
            className="bg-blue-500 text-white px-4 py-2"
          >
            Add
          </button>
        )}
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="text-center">
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">${product.price}</td>
              <td className="border p-2">{product.description}</td>
              <td className="border p-2">
                <button
                  onClick={() => {
                    setEditingId(product._id);
                    setName(product.name);
                    setPrice(product.price);
                    setDescription(product.description);
                  }}
                  className="bg-yellow-500 text-white px-2 py-1 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="bg-red-500 text-white px-2 py-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
