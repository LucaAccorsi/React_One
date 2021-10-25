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
      marginRight: '101px',
      
    }}>
      <Button variant="contained" style={{marginTop: '18px'}} onClick={() => {props.reset()}}>RESET</Button>    
    </Stack>
  );
}
