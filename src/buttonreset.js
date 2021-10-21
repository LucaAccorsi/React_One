import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {
  return (
    <Stack  direction="row" 
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        my: 2.7,
      },
    }}>
      <Button variant="outlined" style={{border: '1px solid rgb(0,0,0,0.2', color: 'black', backgroundColor: 'rgb(0,0,0,0.1'}} onClick={() => {props.reset()}}>RESET</Button>    
    </Stack>
  );
}
