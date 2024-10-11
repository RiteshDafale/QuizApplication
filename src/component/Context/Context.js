import React, { useState, createContext } from 'react';

// Create the context
export const Context = createContext(); // Use a meaningful name

// Create a provider component
export const ContextProvider = ({ children }) => {
    const [name, setName] = useState('');

    return (
        <Context.Provider value={{ name, setName }}>
            {children}
        </Context.Provider>
    );
};