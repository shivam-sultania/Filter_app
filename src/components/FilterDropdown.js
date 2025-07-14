import React from 'react';
import Select from 'react-select';
import WindowedSelect from 'react-windowed-select';
import '../index.css';

function FilterDropdown({ column, options, selected, onChange }) {
  const handleChange = (selectedOptions) => {
    onChange(column, selectedOptions || []);
  };

  return (
    <div className="filter-dropdown">
      <label className="filter-label">{column}</label>

      {column === 'number' ? (
        <WindowedSelect
          isMulti
          options={options}
          value={selected}
          onChange={handleChange}
          classNamePrefix="react-select"
          placeholder={`Filter ${column}`}
          styles={{
            menu: (provided) => ({
              ...provided,
              zIndex: 9999, // Prevents being cut off
            }),
          }}
        />
      ) : (
        <Select
          isMulti
          options={options}
          value={selected}
          onChange={handleChange}
          placeholder={`Filter ${column}`}
          classNamePrefix="react-select"
        />
      )}
    </div>
  );
}

export default FilterDropdown;
