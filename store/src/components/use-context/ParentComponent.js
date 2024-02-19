// ParentComponent.js
import React from 'react';
import ChildOfParent from './ChildOfParent';
import { DataProvider } from './DataContext';

const ParentComponent = () => {
  return (
    <DataProvider>
      <div>
        <h1>Parent Component</h1>
        <ChildOfParent />
      </div>
    </DataProvider>
  );
};

export default ParentComponent;
