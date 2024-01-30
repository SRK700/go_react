// Subject.jsx
import React, { useState, useEffect } from 'react';

const Subject = ({ subjectId }) => {
    const [subject, setSubject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSubject = async () => {
            try {
                const response = await fetch(`http://localhost:8000/subjects/${subjectId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setSubject(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSubject();
    }, [subjectId]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading subject: {error}</p>;
    if (!subject) return <p>No subject found for ID {subjectId}</p>;

    return (
        <div>
            <h2>Subject Details</h2>
            <p><strong>ID:</strong> {subject.id}</p>
            <p><strong>Name:</strong> {subject.name}</p>
            {/* Add additional subject properties as needed */}
        </div>
    );
};

export default Subject;
