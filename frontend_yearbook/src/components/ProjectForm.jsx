import api from '../api';
import React, { useState } from 'react';
// import '../styles/ProjectForm.css';

const ProjectForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [image, setImage] = useState(null);  // For file input
    const [view_url, setViewUrl] = useState('');
    const [source_url, setSourceUrl] = useState('');

    const createProject = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('year', year);
        formData.append('image', image);  // Append file
        formData.append('view_url', view_url);
        formData.append('source_url', source_url);

        api
            .post("/projects/projects/", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'  // Important for file uploads
                }
            })
            .then((res) => {
                if (res.status === 201) {
                    alert("Project created!");
                    // Reset form fields after successful submission
                    setTitle('');
                    setDescription('');
                    setYear('');
                    setImage(null);
                    setViewUrl('');
                    setSourceUrl('');
                } else {
                    alert("Failed to create project.");
                }
            })
            .catch((err) => {
                // Handle error response properly
                    if (err.response && err.response.data) {
                        console.log(err.response.data);  // Log the full error response
                        alert("Error: " + JSON.stringify(err.response.data));  // Convert the object to a string
                    } else {
                        alert("An unknown error occurred.");
                    }
            });
    }

    return (
        <div className='form-box'>
            <h1>Create Project</h1>
            <form onSubmit={createProject}>
                <label htmlFor='title'>Title:</label>
                <br />
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="description">Description:</label>
                <br />
                <textarea
                    placeholder="Description"
                    value={description}
                    rows={4}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="year">Year:</label>
                <br />
                <input
                    type="number"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
                <label htmlFor="image">Image:</label>
                <br />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}  // Get the file
                />
                <label htmlFor="view_url">View URL:</label>
                <br />
                <input
                    type="url"
                    placeholder="View URL"
                    value={view_url}
                    onChange={(e) => setViewUrl(e.target.value)}
                />
                <label htmlFor="source_url">Source URL:</label>
                <br />
                <input
                    type="url"
                    placeholder="Source URL"
                    value={source_url}
                    onChange={(e) => setSourceUrl(e.target.value)}
                />
                <br />
                <button type="submit">Create Project</button>
            </form>
        </div>
    );
}

export default ProjectForm;
