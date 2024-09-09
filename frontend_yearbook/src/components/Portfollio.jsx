import api from '../api'
import React, { useState } from 'react';
import '../styles/PortfollioForm.css'


const Portfollio = () => {
    const [portfollio, setPortfollio] = useState([]);
    const [name, setName] = useState('');
    const [student_class, setStudent_class] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);  // Use null for file input
    const [content, setContent] = useState('');

    const createPortfollio = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('student_class', student_class);
        formData.append('email', email);
        formData.append('image', image);  // Append file
        formData.append('content', content);

        api
            .post("/students/students/", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'  // Important for file uploads
                }
            })
            .then((res) => {
                if (res.status === 201) alert("Portfolio created!");
                else alert("Failed to create portfolio.");
            })
            .catch((err) => alert(err));
    }

    return (
        <div className='form-box'>
            <h1>Portfolio</h1>
            <form onSubmit={createPortfollio}>
                <label htmlFor='name'>Name:</label>
                <br />
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="class">Student Class:</label>
                <br />
                <input
                    type="text"
                    placeholder="Class"
                    value={student_class}
                    onChange={(e) => setStudent_class(e.target.value)}
                />
                <label htmlFor="email">Email:</label>
                <br />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="image">Image:</label>
                <br />
                <input
                    type="file"
                    accept="image/*"  // Restrict to images only
                    onChange={(e) => setImage(e.target.files[0])}  // Get the file
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    type="text"
                    placeholder="Content"
                    value={content}
                    rows={4}
                    onChange={(e) => setContent(e.target.value)}
                />
                <br />
                <button type="submit">Create Portfollio</button>
            </form>
        </div>
    );
}

export default Portfollio;
