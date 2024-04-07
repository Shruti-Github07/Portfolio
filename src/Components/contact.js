import React, { useState } from 'react';
import '../Styles/ContactForm.css'; // Import CSS file
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!')
        console.log(formData);
    };

    return (
        <div className='contact-body'>
            <div className='myContact'>
                {/* <h3> Contact me here:</h3> */}
                <a href="https://www.linkedin.com/in/shrutiraj016" target="_blank">
                    <img src={require('../Images/linkedin.png')} alt='LinkedIn' className='contactlogos' />
                </a>
                <a href="https://github.com/Shruti-Github07" target="_blank">
                    <img src={require('../Images/github.png')} alt='LinkedIn' className='contactlogos' />
                </a>
                <a href="mailto:shrutiraj016@gmail.com" target="_blank">
                    <img src={require('../Images/gmail.png')} alt='LinkedIn' className='contactlogos' />
                </a>  
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;
