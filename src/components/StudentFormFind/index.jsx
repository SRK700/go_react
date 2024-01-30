import React, { useState, useEffect } from 'react';
import Student from '../Student'; // Ensure this path is correct

const StudentFormFind = () => {
    const [inputId, setInputId] = useState('');
    const [id, setid] = useState(null);

    useEffect(() => {
        console.log("Updated id=" + id);
    }, [id]); // This effect will run whenever id changes

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("inputId=" + inputId);
        setid(Number(inputId)); // Convert inputId to a number
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Student ID:
                    <input
                        type="number"
                        value={inputId}
                        onChange={e => setInputId(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {/* Render the Student component if id is not null */}
            {id !== null && <Student id={id} />}
        </div>
    );
};

export default StudentFormFind;
