import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const ButtonRESET = styled.button`
border: 1px solid #1976d2;
border-radius: 4px;
background-color: #1976d2;
padding: 8px 15px;
color: white;
font-family: Helvetica;
font-size: 14px;
box-shadow: 0px 1px 2px grey;
margin-top: 18px;

&:hover {
  background-color: rgb(25, 100, 200);
  box-shadow: 0px 3px 10px silver;
}
`



export default function BasicButtons(props: { reset: () => void; }) {
  return (
    <Stack  direction="row" 
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: '101px',      
    }}>
      
      <ButtonRESET onClick={() => {props.reset()}}>
        RESET
      </ButtonRESET>

      {/* <ButtonRESET variant="contained" style={{marginTop: '18px'}} onClick={() => {props.reset()}}>RESET</Button>     */}

    </Stack>
  );
}
