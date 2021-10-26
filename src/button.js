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
      <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ marginLeft: '140px' }}>
        <Button style={{ marginRight: '1px', boxShadow: '0px 1px 2px grey', marginTop: '1px', borderColor: '#3378c8' }} key='one' onClick={() => props.toggle('in')}>IN STOCK</Button>
        <Button style={{ boxShadow: '0px 1px 2px grey', marginTop: '1px' }} key='two' onClick={() => props.toggle('out')}>OUT OF STOCK</Button>
      </ButtonGroup>
    </Box>
  );
}
