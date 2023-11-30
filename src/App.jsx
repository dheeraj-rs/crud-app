// App.js
import React, { useState } from "react";
import "./App.css";
import MemoizedTableRow from "./Table";

function App() {
  const initialData = [
    { id: 1, title: "Item 1", userId: 101 },
    { id: 2, title: "Item 2", userId: 102 },
  ];

  const [apiData, setApiData] = useState(initialData);
  const [newItem, setNewItem] = useState("");

  const handleDelete = (id) => {
    setApiData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleUpdate = (id, updatedTitle) => {
    setApiData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, title: updatedTitle } : item
      )
    );
  };

  const handleAdding = () => {
    if (newItem.trim() === "") {
      return;
    }
    const newItemObject = {
      id: apiData.length + 1,
      title: newItem,
    };
    setApiData((prevData) => [...prevData, newItemObject]);
    setNewItem("");
  };

  return (
    <div className="flex items-center justify-center border">
      <div className="border border-gray-400 p-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter new item title"
        />
        <button type="submit" onClick={handleAdding}>Add</button>

        <table>
          <thead className="">
            <tr>
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">User ID</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((obj) => (
              <MemoizedTableRow
                key={obj.id}
                obj={obj}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
