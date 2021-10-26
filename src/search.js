import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {
  return (

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '38ch'},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={props.value} onChange={(e) => {props.cerca(e.target.value)}} id="outlined-basic" label="search" variant="outlined" />
    </Box>


  );
}

