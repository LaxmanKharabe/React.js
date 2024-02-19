// ChildOfParent.js
import React from 'react';
import ChildOfChild from './ChildOfChild';
import { useDataContext } from './DataContext';

const ChildOfParent = () => {
  const { data, setParentData } = useDataContext();

  // You can use data from context or set new data to be passed down
  return (
    <div>
      <h2>Child of Parent Component</h2>
      <p>Data from Parent: {data}</p>
      <button onClick={() => setParentData('New Data from Parent')}>Change Parent Data</button>
      <ChildOfChild />
    </div>
  );
};

export default ChildOfParent;
