import Stack from '@mui/material/Stack';

export default function ButtonInStock() {
  return (
    <Stack direction="row" spacing={0} sx={{ border: '1px solid transparent', background: 'rgba(200,200,200,0.4)', height: '32px', borderRadius: '20px', maxWidth: '70px' }}>

      <div style={{ marginLeft: '12px', marginTop: '6px' }}>
        in stock
      </div>
    </Stack>
  );
}
