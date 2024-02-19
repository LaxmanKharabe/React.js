// ChildOfChild.js
import React from 'react';
import { useDataContext } from './DataContext';

const ChildOfChild = () => {
  const { data } = useDataContext();

  return (
    <div>
      <h3>Child of Child Component</h3>
      <p>Data from Parent: {data}</p>
    </div>
  );
};

export default ChildOfChild;
