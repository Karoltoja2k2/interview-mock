import React, { useState } from 'react';
import './App.css';
import WorkOrdersTable from './components/WorkOrdersTable/WorkOrdersTable';
import useDataLoader from './hooks/useDataLoader';

import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [descriptionFilter, setDescriptionFilter] = useState<string>();
  const workOrders = useDataLoader(descriptionFilter);

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <TextField id="outlined-basic" label="Description" variant="outlined" onChange={(e) => setDescriptionFilter(e.currentTarget.value)} />
      {workOrders?.length > 0 ? <WorkOrdersTable WorkOrders={workOrders} /> : <CircularProgress/>}
    </div>
  );
}

export default App;