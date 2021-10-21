import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Data from './data.js';

export default function VariantButtonGroup() {
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
        <Button onClick={instock}>IN STOCK</Button>
        <Button onClick={outofstock}>OUT OF STOCK</Button>
      </ButtonGroup>
    </Box>
  );
}

function instock() {
  

  // if (Data.stock >= 1) {
  //   console.log(instock);
  //   return Data;
  // }
}

function outofstock() {

}