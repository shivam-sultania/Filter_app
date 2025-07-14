import React, { createContext, useContext, useState, useEffect } from 'react';
import Papa from 'papaparse';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [rawData, setRawData] = useState([]);
  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [columns, setColumns] = useState([]);

  // Load CSV once
  useEffect(() => {
    Papa.parse('/dataset_large.csv', {
      download: true,
      header: true,
      complete: (results) => {
        const data = results.data.filter(row => Object.values(row).some(Boolean)); // remove empty rows
        setRawData(data);

        const cols = Object.keys(data[0] || {}).map((key) => ({
          name: key,
          selector: row => row[key],
          sortable: true,
        }));
        setColumns(cols);
      }
    });
  }, []);

  // Update filtered data whenever filters change
  useEffect(() => {
    if (!rawData.length) return;

    const filtered = rawData.filter(row => {
      return Object.entries(filters).every(([col, selected]) => {
        if (!selected.length) return true;
        return selected.some(val => row[col] === val.value);
      });
    });

    setFilteredData(filtered);
  }, [rawData, filters]);

  return (
    <DataContext.Provider
      value={{ rawData, filteredData, filters, setFilters, columns }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
