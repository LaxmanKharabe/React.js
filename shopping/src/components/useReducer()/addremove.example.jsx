import React, { useReducer, useState } from 'react';
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                items: [...state.items, action.payload],
            };
        case 'REMOVE_ITEM':
            return {
                items: state.items.filter(item => item !== action.payload),
            };
        default:
            return state;
    }
};

export const AddOrRemoveItem = () => {
    const [state, dispatch] = useReducer(reducer, { items: [] });
    const [newItem, setNewItem] = useState('');

    const addItem = () => {
        if (newItem.trim() !== '') {
            dispatch({ type: 'ADD_ITEM', payload: newItem });
            setNewItem('');
        }
    };

    const removeItem = itemToRemove => {
        dispatch({ type: 'REMOVE_ITEM', payload: itemToRemove });
    };

    return (
        <div>
            <div>
                <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} placeholder="Enter item" />
                <button onClick={addItem}>Add Item</button>
            </div>
            <ul>
                {state.items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => removeItem(item)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

