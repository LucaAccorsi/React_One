import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonOutOfStock() {
  return (
    <Stack direction="row" spacing={2}>
      
      <Button variant="contained" color="error">
        Out of Stock
      </Button>
    </Stack>
  );
}