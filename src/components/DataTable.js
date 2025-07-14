import React from 'react';
import DataTableBase from 'react-data-table-component';
import { useDataContext } from '../context/DataContext';
import '../index.css';

function DataTable() {
  const { filteredData, columns } = useDataContext();

const customStyles = {
    rows: {
      style: {
        minHeight: '28px',
        fontSize: '13px',
        paddingTop: '4px',
        paddingBottom: '4px',
      },
    },
    headCells: {
      style: {
        minHeight: '30px',
        fontSize: '13px',
        paddingTop: '6px',
        paddingBottom: '6px',
      },
    },
  };

  return (
    <div className="data-table-container">
      <DataTableBase
        columns={columns}
        data={filteredData}
        pagination
        paginationPerPage={100}
        paginationRowsPerPageOptions={[100,50,20,10]}
        fixedHeader
        fixedHeaderScrollHeight="38rem" 
        highlightOnHover
      />
    </div>
  );
}

export default DataTable;
