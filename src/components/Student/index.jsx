import React, { useState, useEffect } from 'react';

const Student = ({ id }) => {
    const [student, setStudent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await fetch(`http://localhost:8000/students/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setStudent(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStudent();
    }, [id]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading student: {error}</p>;
    if (!student) return <p>No student found for ID {id}</p>;

    return (
        <div>
            <h2>Student Details</h2>
            <p><strong>ID:</strong> {student.id}</p>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Grade:</strong> {student.grade}</p>
            {/* Add additional student properties as needed */}
        </div>
    );
};

export default Student;
