import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Use this file to define the background image and styling
import Logo from "./Logo";

function App() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data object to send
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phone,
    };

    try {
      // Send data to the backend
      const response = await axios.post(
        "https://nicholas-website-2fee10db19de.herokuapp.com/users", // Updated endpoint URL
        formData
      );
      console.log(response.data.message); // Confirm success message from backend
      setSubmitted(true); // Show thank you message
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an issue with your submission. Please try again.");
    }
  };


  return (
  <div className="app-container">
    <Logo /> {/* Logo is now at the top level, outside of the signup container */}

    <div className="signup-container">

      {!submitted ? (
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>COMING SOON</h2>
          <p>SIGN UP FOR LATEST DROPS</p>

          <input
            type="text"
            placeholder="FIRST NAME"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="LAST NAME"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="PHONE NUMBER"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button type="submit">Join the Waitlist</button>
        </form>
      ) : (
        <h3>Thank you for signing up!</h3>
      )}
    </div>
  </div>
  );
}

export default App;
