import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function List() {
    const rows = [
        {
            id:123,
            product:"Acer Nitro 5",
            img:'https://www.notebookcheck.biz/uploads/tx_nbc2/AcerNitro5-AN515-55__1__07.JPG',
            customer:'Moncef',
            date:'1 March',
            amount:320,
            method:'Cash on Delivery',
            status:"Approved"
        },
        {
            id:32523,
            product:"Redragon S101",
            img:'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg',
            customer:'Adil',
            date:'23 March',
            amount:100,
            method:'Online',
            status:"Pending"
        },
        {
            id:1283,
            product:"Playstation 5",
            img:'https://m.media-amazon.com/images/I/51zylG5gxfS._AC_SL1000_.jpg',
            customer:'Zian',
            date:'1 June',
            amount: 20,
            method:'Online Payment',
            status:"Pending"
        },
        {
            id:14523,
            product:"ASUS ROG Strix",
            img:'https://m.media-amazon.com/images/I/71RK6+rx-xL._AC_SL1500_.jpg',
            customer:'Hasoun',
            date:'11 February',
            amount:80,
            method:'Cash on Delivery',
            status:"Approved"
        },
        {
            id:45523,
            product:"HP-Pavilion",
            img:'https://m.media-amazon.com/images/I/81KyhfcoB4L._AC_SL1500_.jpg',
            customer:'Abdo',
            date:'15 February',
            amount:111,
            method:'Online Payment',
            status:"Approved"
        },
    ]
  return (
    <TableContainer component={Paper} className = 'table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>
                  <div className="cellWrapper">
                      <img src={row.img} alt="product" className = 'image'/>
                      {row.product}
                  </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                  <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List