import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonInStock() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" color="success">
        In Stock
      </Button>
    </Stack>
  );
}