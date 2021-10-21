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
          my: 2,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button key='one' onClick={() => props.toggle('in')}>IN STOCK</Button>
        <Button key='two' onClick={() => props.toggle('out')}>OUT OF STOCK</Button>
      </ButtonGroup>
    </Box>
  );
}
