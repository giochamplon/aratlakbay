import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import React from 'react'
import AdminLayout from '../components/AdminLayout'

function createData(
  id= number,
  name= string,
  email= string,
  gender= string,
  phone_number= string,
) {
  return {id,name,email,gender,phone_number};
}

const rows=[
  createData(1, 'Mario Manuel','mariomanuel@gmail.com','Male', '09111222346'),
  createData(2, 'Stormi Lour','stormilour@gmail.com','Female', '09435687121'),
  createData(3, 'Juan Dela Cruz','juandelacruz@gmail.com','Male', '09876712459'),
  createData(4, 'Gulf Delfin','gulfdelfin@gmail.com','Male','09215643981'),
  createData(5, 'Kylie Fuz','kyliefuz39@gmail.com', 'Male', '09898798561'),

]

export default function Users() {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: "650"}}>
          <TableHead>
            <TableRow>
            <TableCell> Id</TableCell>
            <TableCell align="right">Customer Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >

              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>

              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.phone_number}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        
        </Table>
      </TableContainer>

    </Box>



  )
}

Users.getLayout = function getLayout(page) {

    return <AdminLayout>{page}</AdminLayout>
}
