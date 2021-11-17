import styled from 'styled-components';

const Button = styled.button`
border: 1px solid grey;
height: 50px;
width: 200px;
font-size: 20px;
border-radius: 10px;
background-color: transparent;
cursor: pointer;
&:hover{
background:linear-gradient(120deg,  #43cea2, #185a9d);
color: white;
box-shadow: 0px 0px 10px #43cea2;
}
@media (max-width: 968px) {
    font-size: 1rem;
    height: 2rem;
    width: 8rem;
}
`

export default function AddToCartButton() {
  return (
    // <Stack spacing={2} direction="row">
    //   <Button variant="outlined">Add to cart</Button>
    // </Stack>
    <Button>
        Add to cart
    </Button>
  );
}