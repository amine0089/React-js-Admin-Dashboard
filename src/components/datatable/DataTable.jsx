import React from 'react'
import './datatable.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'

function DataTable() {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 200,
          valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        { field: 'status', headerName: 'Status', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: () =>{
                return(
                      <div className="cellAction">
                        <Link to="/users/1" style = {{textDecoration:'none'}}>
                            <div className="viewButton">View</div>
                        </Link>
                          <div className="deleteButton">Delete</div>
                      </div>
                );
            }
        }
      ];
      
      const rows = [
        { id: 1, lastName: 'Moncef', firstName: 'Pixau', age: 35,status:'active' },
        { id: 2, lastName: 'Zian', firstName: 'Azzedin', age: 42,status:'passive' },
        { id: 3, lastName: 'Adil', firstName: 'Kahl', age: 45,status:'active' },
        { id: 4, lastName: 'Amir', firstName: 'Khouja', age: 16,status:'active' },
        { id: 5, lastName: 'Seddik', firstName: 'Miko', age: 22,status:'passive' },
        { id: 6, lastName: 'Taher', firstName: 'Naboto', age: 150 ,status:'active'},
        { id: 7, lastName: 'Amina', firstName: 'Boutina', age: 44,status:'passive' },
        { id: 8, lastName: 'Amel', firstName: 'Losis', age: 36 ,status:'active'},
        { id: 9, lastName: 'Khaled', firstName: 'Chbab', age: 65 ,status:'active'},
        { id: 10, lastName: 'Morad', firstName: 'Halili', age: 26 ,status:'passive'},
      ];

      const actionColum = () =>[
          {
              field: 'action',
              headerName: 'Action',
              with: 200,
              renderCell: () =>{
                  return(
                        <div className="cellAction">
                            <div className="viewButton">View</div>
                            <div className="deleteButton">Delete</div>
                        </div>
                  );
              }
          }
        ]
  return (  
    <div className='datatable'>
        <div className='dataTitle'>
            Add New User
            <Link to='/users/new' style={{textDecoration:'none'}} className = "link">
                Add New
            </Link>
        </div>
        <DataGrid
        className='datagrid'
        rows={rows}
        columns={columns.concat(actionColum)}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable