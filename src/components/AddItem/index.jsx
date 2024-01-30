import React, { useEffect, useState } from 'react';

const AddItems = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newItem, setNewItem] = useState({ name: '', price: '' });

    const fetchItems = async () => {
        try {
            const response = await fetch('http://localhost:8000/items');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setItems(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleAddItem = async () => {
        try {
            const response = await fetch('http://localhost:8000/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Refresh the item list after adding a new item
            fetchItems();
            // Clear the form fields
            setNewItem({ name: '', price: '' });
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div>
            <h1>Items List</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {items.map(item => (
                    <li key={item.ID}>Name: {item.Name}, Price: {item.Price}</li>
                ))}
            </ul>

            <h2>Add New Item</h2>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" value={newItem.name} onChange={handleInputChange} />
                </label>
                <label>
                    Price:
                    <input type="text" name="price" value={newItem.price} onChange={handleInputChange} />
                </label>
                <button type="button" onClick={handleAddItem}>
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default AddItems;
