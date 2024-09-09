import React, { useState, useEffect } from 'react';
import api from '../api';  
import '../styles/ProjectList.css';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch projects from the backend
        const fetchProjects = async () => {
            try {
                const response = await api.get('/projects/projects/');  // Fetch all projects
                setProjects(response.data);  // Assuming response contains a list of project objects
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch projects');
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);  // Empty dependency array means this runs once when the component mounts

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {projects.length === 0 ? (
                    <p>No projects available</p>
                ) : (
                    projects.map((project) => (
                        <div key={project.id} className="project-card">
                            {project.image && (
                                <img src={project.image} alt={project.title} className="project-image" />
                            )}
                            <h2 className="project-title">{project.title}</h2>
                            <h3 className="project-year">{project.year}</h3>
                            <div className="pro-details">
                                <p>{project.description}</p>
                                <div className="pro-btns">
                                    {project.view_url && (
                                        <a className="btn" href={project.view_url} target="_blank" rel="noopener noreferrer">View</a>
                                    )}
                                    {project.source_url && (
                                        <a className="btn" href={project.source_url} target="_blank" rel="noopener noreferrer">Source</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ProjectList;

