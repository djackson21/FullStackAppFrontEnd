import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Paper, paperClasses } from '@mui/material';

export default function Student() {
  const paperClasses={padding:'50px 20px', width:600, margin:"20px auto"}
  const[name,setName]=React.useState('')
  const[address,setAddress]=React.useState('')
  return (
    <Container>
      <Paper elevation={3} style={paperClasses}>
        <h1 style={{color:"blue"}}><u>Add Student</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
    <Button variant='contained' color='secondary'>Submit</Button>

    </Box>
    {name}
    {address}
    </Paper>
    </Container>
  );
}
