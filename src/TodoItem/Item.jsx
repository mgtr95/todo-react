import React, { useState } from 'react';

export default function ListWithAddAndClear() {
  const [items, setItems] = useState([]);
  const [newItemText, setNewItemText] = useState('');

  function handleAddItemClick() {
    if (newItemText.trim() === '') {
      return;
    }

    setItems([...items, newItemText.trim()]);
    setNewItemText('');
  }

  function handleClearItemClick(index) {
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleClearItemClick(index)}>Clear</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItemText}
          onChange={(event) => setNewItemText(event.target.value)}
        />
        <button onClick={handleAddItemClick}>Add</button>
      </div>
    </div>
  );
}
