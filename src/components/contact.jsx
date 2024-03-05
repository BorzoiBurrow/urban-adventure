import React, { useState } from 'react';
import '../styles/styles.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [requiredFields, setRequiredFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlur = (field) => {
    setRequiredFields((prevFields) => ({
      ...prevFields,
      [field]: formData[field].trim() === '',
    }));
  };

  const Submit = (e) => {
    e.preventDefault();
    const RequiredEmpty = Object.values(formData).some((value) => value.trim() === '');
    if (RequiredEmpty) {
      alert('Please fill out all required fields before submitting.');
    } else {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="contact-container">
      <form onSubmit={Submit}>
        <div className={`form-field ${requiredFields.name ? 'required' : ''}`}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={() => handleBlur('name')}
          />
        </div>

        <div className={`form-field ${requiredFields.email ? 'required' : ''}`}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={() => handleBlur('email')}
          />
        </div>

        <div className={`form-field ${requiredFields.message ? 'required' : ''}`}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={() => handleBlur('message')}
          />
        </div>
        <button id="submitContact" type="submit">Submit</button>
      </form>
      <p>Alternatively, contact me directly at:
      walbuunka@gmail.com</p>
    </div>
  );
}

export default Contact;
