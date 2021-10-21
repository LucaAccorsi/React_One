import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({/*reset*/}) {
  return (
    <Stack spacing={2} sx={{my: 2}} direction="row">
      <Button  variant="outlined" >RESET</Button>    
    </Stack>
  );
}
