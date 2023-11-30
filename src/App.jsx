/* eslint-disable react/prop-types */
import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [userArray, setUserArray] = useState([]);
  const passwordMinLength = 6; 
  const handleLogin = (credentials) => {
    const { email, password } = credentials;

    const user = { email, password, id: Date.now() };
    setUserArray((prevUserArray) => [...prevUserArray, user]);

    setMessage("Login successful! User data added to the array.");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onLogin={handleLogin} passwordMinLength={passwordMinLength} />
      <p>{message}</p>

      {/* Displaying user data array for demonstration */}
      {userArray.length > 0 && (
        <div>
          <h2>User Data Array:</h2>
          <ul>
            {userArray.map((user) => (
              <li key={user.id}>{`Email: ${user.email}, Password: ${user.password}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function LoginForm({ onLogin, passwordMinLength }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const validateEmail = () => {
    // Very basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(credentials.email);
  };

  const validatePassword = () => {
    // Password length validation
    if (credentials.password.length < passwordMinLength) {
      return false;
    }

    // Password complexity validation (add more criteria as needed)
    const hasUpperCase = /[A-Z]/.test(credentials.password);
    const hasLowerCase = /[a-z]/.test(credentials.password);
    const hasDigit = /\d/.test(credentials.password);

    return hasUpperCase && hasLowerCase && hasDigit;
  };

  const handleLogin = () => {
    if (!validateEmail()) {
      alert("Invalid email format");
      return;
    }

    if (!validatePassword()) {
      alert(
        `Invalid password. Password must be at least ${passwordMinLength} characters long and include at least one uppercase letter, one lowercase letter, and one digit.`
      );
      return;
    }

    // Call the parent component's login function with credentials
    onLogin(credentials);
  };

  return (
    <div>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          id="email"
          name="email"
          value={credentials.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? "Hide" : "Show"} Password
        </button>
      </label>
      <br />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default App;



// // App.js
// import React, { useState } from "react";
// import "./App.css";
// import MemoizedTableRow from "./Table";

// function App() {
//   const initialData = [
//     { id: 1, title: "Item 1", userId: 101 },
//     { id: 2, title: "Item 2", userId: 102 },
//   ];

//   const [apiData, setApiData] = useState(initialData);
//   const [newItem, setNewItem] = useState("");

//   const handleDelete = (id) => {
//     setApiData((prevData) => prevData.filter((item) => item.id !== id));
//   };

//   const handleUpdate = (id, updatedTitle) => {
//     setApiData((prevData) =>
//       prevData.map((item) =>
//         item.id === id ? { ...item, title: updatedTitle } : item
//       )
//     );
//   };

//   const handleAdding = () => {
//     if (newItem.trim() === "") {
//       return;
//     }
//     const newItemObject = {
//       id: apiData.length + 1,
//       title: newItem,
//     };
//     setApiData((prevData) => [...prevData, newItemObject]);
//     setNewItem("");
//   };

//   return (
//     <div className="flex items-center justify-center border">
//       <div className="border border-gray-400 p-4">
//         <input
//           type="text"
//           value={newItem}
//           onChange={(e) => setNewItem(e.target.value)}
//           placeholder="Enter new item title"
//         />
//         <button type="submit" onClick={handleAdding}>Add</button>

//         <table>
//           <thead className="">
//             <tr>
//               <th className="border border-gray-300 p-2">ID</th>
//               <th className="border border-gray-300 p-2">Title</th>
//               <th className="border border-gray-300 p-2">User ID</th>
//               <th className="border border-gray-300 p-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {apiData.map((obj) => (
//               <MemoizedTableRow
//                 key={obj.id}
//                 obj={obj}
//                 onDelete={handleDelete}
//                 onUpdate={handleUpdate}
//               />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default App;