// Create a new file called DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const setParentData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, setParentData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
