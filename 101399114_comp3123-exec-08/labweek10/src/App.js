import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="App">
      <h2>Data Entry Form</h2>
      <form onSubmit={handleSubmit} className="data-entry-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="1234 Main St"
            value={formData.address}
            onChange={handleChange}
          />
          <label>Address 2</label>
          <input
            type="text"
            name="address2"
            placeholder="Apartment, studio, or floor"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <label>Province</label>
          <select
            name="province"
            value={formData.province}
            onChange={handleChange}
          >
            <option value="">Choose...</option>
            <option value="Ontario">Ontario</option>
            <option value="Quebec">Quebec</option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="New Brunswick">New Brunswick</option>
            <option value="Manitoba">Manitoba</option>
            <option value="British Columbia">British Columbia</option>
            <option value="Prince Edward Island">Prince Edward Island</option>
            <option value="Saskatchewan">Saskatchewan</option>
            <option value="Alberta">Alberta</option>
            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
          </select>
          <label>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </div>

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <label>Agree Terms & Condition?</label>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
        <h3>Submitted Data</h3>
        <p>Email: {submittedData.email}</p>
        <p>Full Name: {submittedData.fullName}</p>
        <p>Address: {submittedData.address} {submittedData.address2 && `, ${submittedData.address2}`}</p>
        <p>City: {submittedData.city}</p>
        <p>Province: {submittedData.province}</p>
        <p>Postal Code: {submittedData.postalCode}</p>
      </div>
      
      )}
    </div>
  );
}

export default App;
