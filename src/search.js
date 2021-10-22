import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Data from './data.json'

export default function BasicTextFields(props) {
  return (

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1.5, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={props.value} onChange={(e) => {props.cerca(e.target.value)}} id="outlined-basic" label="Cerca" variant="outlined" />
    </Box>


  );
}

