"use client";
import React, { useState } from 'react';
import styles from '../styles/form.module.css';

export default function Form() {
  const [inputData, setInputData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  // Change handler for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Submission handler for form
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if any input fields are empty
    const isEmpty = Object.values(inputData).some(value => value === '');
    if (isEmpty) {
        alert('Please fill out all fields.');
        return;
    }

    // Send form data to Zapier webhook; 
    try {
      const response = await fetch('/api/zapier', {
        method: 'POST',
        body: JSON.stringify(inputData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      console.log(response.body);
    } catch (error) { 
      console.error('Error submitting form:', error);
    }
    // Send form data to Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'formSubmission',
      'formData': inputData,
    });
    console.log(inputData);
  };

  return (
    <div className={styles.Container}>
      <form className={styles.Form} id="registrationForm" onSubmit={handleSubmit}>
        <div className={styles.FormTitle}><h1>Want to Go <br></br><span className={styles.Icon}><img src="/further-favicon.png"/></span> Further?</h1></div>
        <div className={styles.FormInputs}>  
          <input
            type="text"
            name="firstName"
            value={inputData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={inputData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <input
            type="email"
            name="email"
            value={inputData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="tel"
            name="phone"
            value={inputData.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
        </div>
        <div className={styles.ButtonContainer}>
          <button type="submit"><img src="/further-favicon.png"/><p>Submit</p></button>
        </div>
        <div className={styles.ImageContainer}>
          <img src="/further_element-4.png" alt="further element 4" />
        </div>
      </form>
    </div>
  )
};