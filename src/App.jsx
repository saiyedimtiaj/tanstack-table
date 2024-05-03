import React from 'react';
import Table from './Component/Table';

const App = () => {
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center my-5'>Tanstack Table</h1>
      <div className='max-w-[700px] mx-auto px-4 mb-10'>
      <Table/>
      </div>
    </div>
  );
};

export default App;