import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonInStock() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" style={{border: '1px solid lime', color: 'black', boxShadow: '0px 0px 5px lime'}}>
        In Stock
      </Button>
    </Stack>
  );
}