import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type Props = {
  cerca: (cerca:string) => void, 
  searchTerm: string,
}

const BasicTextField : React.FC<Props> = ({cerca, searchTerm}) => {
  return (

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '38ch'},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={searchTerm} onChange={(e) => {cerca(e.target.value)}} id="outlined-basic" label="search" variant="outlined" />
    </Box>


  );
}

export default BasicTextField;