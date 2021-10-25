import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonInStock() {
  return (
    <Stack direction="row" spacing={0} sx={{border: '1px solid transparent', background:'rgba(200,200,200,0.4)', height: '32px', borderRadius: '20px', maxWidth:'70px'}}>
      {/* <Button variant="contained" sx={{}}>
        In Stock
      </Button> */}
  <div style={{marginLeft:'12px',  marginTop:'6px'}}>
    in stock
  </div>
    </Stack>
  );
}
