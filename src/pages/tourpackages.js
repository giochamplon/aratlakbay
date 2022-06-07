import React from 'react'
import { styled } from '@mui/material/styles';
import { Box, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import AdminLayout from '../components/AdminLayout'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  id= number,
  name= string,
  destination= string,
  date= string,
  price= string,
) {
  return { id, name, destination, date, price };
}

const rows = [
  createData(1,'Mario Manuel', 'Boracay','6/6/2022','P 6000'),
  createData(2,'Stormi Lour', 'Vigan', '7/6/2022','P 3000'),
  createData(3,'Juan Dela Cruz', 'Boracay', '7/6/2022','P 6000'),
  createData(4,'Gulf Delfin', 'Siargao','7/26/2022','P 5000'),
  createData(5,'Kylie Fuz', 'Buhol','6/16/2022','P 3000'),
];

export default function Tourpackages() {
  return (

    <Box>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Customer Name</StyledTableCell>
            <StyledTableCell align="right">Destination</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.destination}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Box>

  )
}
Tourpackages.getLayout = function getLayout(page) {

    return <AdminLayout>{page}</AdminLayout>
}
