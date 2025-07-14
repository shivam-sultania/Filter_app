import React from 'react';
import '../index.css';

function TopBar({ onToggleFilters }) {
  return (
    <div className="topbar">
      <button className="filters-btn" onClick={onToggleFilters}>
        Filters ⬇️
      </button>
    </div>
  );
}

export default TopBar;
