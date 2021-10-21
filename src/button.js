import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function VariantButtonGroup(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          my: 2.7,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button style={{backgroundColor: 'rgba(0,255,0,0.3', border: '1px solid rgba(0,255,0,0.2', color: 'black', marginRight: '1px'}} key='one' onClick={() => props.toggle('in')}>IN STOCK</Button>
        <Button style={{backgroundColor: 'rgba(255,0,0,0.2', border: '1px solid rgba(255,0,0,0.2', color: 'black'}} key='two' onClick={() => props.toggle('out')}>OUT OF STOCK</Button>
      </ButtonGroup>
    </Box>
  );
}
