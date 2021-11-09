import * as React from 'react';
import styled from 'styled-components';

const Button = styled.div`
 background-color : transparent ;
margin: 20px;
cursor: pointer;
`

const ButtonSX = styled.button`
border: 1px solid #1976d2;
border-radius: 4px;
background-color: transparent;
padding: 8px 15px;
color: #1976d2;
font-family: Helvetica;
font-size: 14px;
box-shadow: 0px 1px 2px grey;
border-top-right-radius: 0px;
border-bottom-right-radius: 0px;
&.active{
  background-color: #1976d2;
  color: white;
  transition: 0.5s;
  &:hover{
    background-color: #1565c0;
    transition: 0.5s;
  }
}
&:hover{
  background-color: rgba(25,118,210,0.04);
  transition : 0.5s ;
}
`

const ButtonDX = styled.button`
border: 1px solid #93b6de;
border-radius: 4px;
background-color: transparent;
padding: 8px 15px;
color: #1976d2;
font-family: Helvetica;
font-size: 14px;
box-shadow: 0px 1px 2px grey;
border-top-left-radius: 0px;
border-bottom-left-radius: 0px;
border-left: 0px;
&.active{
  background-color: #1976d2;
  color: white;
  transition : 0.5s ;
  &:hover{
    background-color: #1565c0;
    transition: 0.5s;
  }
}
&:hover{
  background-color: rgba(25,118,210,0.04);
transition  : 0.5s ;
}
`

type Props = {
  setToggle: (filterToggle: string) => void,
  filterToggle: string
}

const VariantButtonGroup: React.FC<Props> = ({ setToggle, filterToggle }) => {
  return (
      <Button>
        <ButtonSX className={filterToggle === 'in' ? "active" : undefined} onClick={() => { filterToggle === 'in' ? setToggle('all') : setToggle('in') }}>
          IN STOCK
        </ButtonSX>

        <ButtonDX className={filterToggle === 'out' ? "active" : undefined} onClick={() => { filterToggle === 'out' ? setToggle('all') : setToggle('out') }}>
          OUT OF STOCK
        </ButtonDX>
      </Button>
  );
}

export default VariantButtonGroup;