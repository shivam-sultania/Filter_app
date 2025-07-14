import React, { useState } from 'react';
import TopBar from './components/TopBar';
import FilterPanel from './components/FilterPanel';
import DataTable from './components/DataTable';
import { DataProvider } from './context/DataContext';
import './index.css';

function App() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <DataProvider>
      <div className="app-container">
        <TopBar onToggleFilters={() => setShowFilters(prev => !prev)} />
        
        <div className="content-below-topbar">
          <FilterPanel visible={showFilters} />
          <div className='table-container'>
            <DataTable />
          </div>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
