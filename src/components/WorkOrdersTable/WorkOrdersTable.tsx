import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import WorkOrder from '../../model/WorkOrder/model/WorkOrder';

interface WorkOrdersTableProps{
    WorkOrders: WorkOrder[]
  }

const WorkOrdersTable = ({WorkOrders}: WorkOrdersTableProps) => {
  return (
    <div>
    <TableContainer component={Paper}>

    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell align="right">Description</TableCell>
          <TableCell align="right">Received date</TableCell>
          <TableCell align="right">Status</TableCell>
          <TableCell align="right">Priority</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {WorkOrders.map((item, index) => (
          <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {item.work_order_id}
            </TableCell>
            <TableCell align="right">{item.description}</TableCell>
            <TableCell align="right">{item.received_date}</TableCell>
            <TableCell align="right">{item.status}</TableCell>
            <TableCell align="right">{item.priority}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </TableContainer>
  </div>
  )
}

export default WorkOrdersTable