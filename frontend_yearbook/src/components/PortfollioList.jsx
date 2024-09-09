import React, { useState, useEffect } from 'react';
import api from '../api';
import '../styles/PortfollioStyles.css';

const PortfolioList = () => {
    const [portfolios, setPortfolios] = useState([]); // State to hold portfolio data
    const [loading, setLoading] = useState(true);     // State for loading spinner
    const [error, setError] = useState(null);         // State for error handling
    const [isEditing, setIsEditing] = useState(null); // Track which portfolio is being edited
    const [formData, setFormData] = useState({
        name: '',
        student_class: '',
        email: '',
        content: '',
        image: null,  // Add image to the form data state
    }); // State to hold form data for the selected portfolio

    useEffect(() => {
        // Fetch data from the backend when the component loads
        api.get('/students/students/')
            .then((response) => {
                setPortfolios(response.data);  // Set the fetched data to state
                setLoading(false);  // Stop the loading spinner
            })
            .catch((err) => {
                setError("Failed to fetch portfolios");
                setLoading(false);
            });
    }, []);  // Empty dependency array to fetch data only once when component mounts

    if (loading) {
        return <p>Loading portfolios...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const deleteNote = (id) => {
        api
            .delete(`/students/students/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Portfolio deleted!");
                    setPortfolios(portfolios.filter((portfolio) => portfolio.id !== id)); // Update state to remove deleted portfolio
                } else alert("Failed to delete portfolio.");
            })
            .catch((error) => alert(error));
    };

    const handleUpdateClick = (portfolio) => {
        setIsEditing(portfolio.id); // Set the selected portfolio as being edited
        setFormData({
            name: portfolio.name,
            student_class: portfolio.student_class,
            email: portfolio.email,
            content: portfolio.content,
            image: portfolio.image || null,  // Pre-fill image data
        });
    };

    const handleFormChange = (e) => {
        if (e.target.name === 'image') {
            setFormData({
                ...formData,
                image: e.target.files[0],  // Store the file object in state
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleFormSubmit = (id) => {
        const updatedFormData = new FormData();
        updatedFormData.append('name', formData.name);
        updatedFormData.append('student_class', formData.student_class);
        updatedFormData.append('email', formData.email);
        updatedFormData.append('content', formData.content);

        if (formData.image) {
            updatedFormData.append('image', formData.image);  // Append the image if it exists
        }

        api
            .put(`/students/students/update/${id}/`, updatedFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',  // Tell the API you're sending form data
                },
            })
            .then((res) => {
                if (res.status === 200) {
                    alert("Portfolio updated!");
                    setPortfolios(portfolios.map((portfolio) => portfolio.id === id ? res.data : portfolio)); // Update the state with the edited portfolio
                    setIsEditing(null); // Exit editing mode
                } else alert("Failed to update portfolio.");
            })
            .catch((error) => alert(error));
    };

    return (
        <div className='trip'>
            <h1>Meet Our Students</h1>
            <p className='trip-p'>Their Year, Their EBook, Their Legacy</p>
            <div className='trip-card'>
                {portfolios.map((portfolio) => (
                    <div className='t-card' key={portfolio.id}>
                        {isEditing === portfolio.id ? (
                            <div>
                                <input
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    placeholder='Name'
                                />
                                <input
                                    type='text'
                                    name='student_class'
                                    value={formData.student_class}
                                    onChange={handleFormChange}
                                    placeholder='Class'
                                />
                                <input
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    placeholder='Email'
                                />
                                <textarea
                                    name='content'
                                    value={formData.content}
                                    onChange={handleFormChange}
                                    placeholder='Content'
                                />
                                <input
                                    type='file'
                                    name='image'
                                    accept='image/*'
                                    onChange={handleFormChange}  // Handle file input change
                                />
                                <button onClick={() => handleFormSubmit(portfolio.id)}>Save</button>
                                <button onClick={() => setIsEditing(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <div className="t-image">
                                    {portfolio.image && (
                                        <img
                                            src={portfolio.image}
                                            alt={portfolio.name}
                                        />
                                    )}
                                </div>
                                <h2>{portfolio.name}</h2>
                                <p>Class: {portfolio.student_class}</p>
                                <p>Email: {portfolio.email}</p>
                                <p>Content: {portfolio.content}</p>
                                <div className="pro-btns">
                                    <button className='delete-button' onClick={() => deleteNote(portfolio.id)}>Delete</button>
                                    <button className='update-button' onClick={() => handleUpdateClick(portfolio)}>Update</button>
                                </div>
                                
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioList;

