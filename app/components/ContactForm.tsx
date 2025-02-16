"use client";

import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    return (
        <div className="max-w-xl mx-auto p-16 bg-base-200 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="textarea textarea-bordered w-full"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="btn btn-primary w-full">
                    Send Message
                </button>
            </form>
            <p className="mt-4 text-center">
                or contact us through mail via <a href="mailto:contact@deepseeksuper.com" className="text-primary">contact@deepseeksuper.com</a>
            </p>
        </div>
    );
};

export default ContactForm;
