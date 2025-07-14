import React, { useMemo } from 'react';
import FilterDropdown from './FilterDropdown';
import { useDataContext } from '../context/DataContext';
import '../index.css';

function FilterPanel({ visible }) {
  const { rawData, filters, setFilters } = useDataContext();

  const columns = useMemo(() => (
    Object.keys(rawData[0] || {}).filter(col =>
      col.startsWith('mod') || col === 'number'
    )
  ), [rawData]);

  // Precompute dropdown options using memoization
  const dropdownOptions = useMemo(() => {
    const optionsMap = {};
    columns.forEach(col => {
      const filteredRows = rawData.filter(row => {
        return Object.entries(filters).every(([key, selected]) => {
          if (key === col || !selected.length) return true;
          return selected.some(v => row[key] === v.value);
        });
      });

      const uniqueVals = [...new Set(filteredRows.map(row => row[col]))];
      optionsMap[col] = uniqueVals.map(v => ({ label: v, value: v }));
    });
    return optionsMap;
  }, [rawData, filters, columns]);

  const handleFilterChange = (col, selectedOptions) => {
    setFilters(prev => ({
      ...prev,
      [col]: selectedOptions
    }));
  };

  return (
    <div className={`filter-panel ${visible ? 'show' : ''}`}>
      <div className="filter-row">
        {columns.map(col => (
          <FilterDropdown
            key={col}
            column={col}
            options={dropdownOptions[col] || []}
            selected={filters[col] || []}
            onChange={handleFilterChange}
          />
        ))}
      </div>
    </div>
  );
}

export default FilterPanel;
