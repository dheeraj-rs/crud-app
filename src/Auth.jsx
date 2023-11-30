/* eslint-disable react/prop-types */
import React, { useState } from "react";

function Auth() {
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

export default Auth;

