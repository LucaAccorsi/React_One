import * as React from 'react';
import styled from 'styled-components';

const SearchBar = styled.input`
height: 70%;
margin: 10px;
width: 90%;
border: 1px solid rgb(206, 206, 206);
border-radius: 4px;
padding-left: 10px;
font-size: 16px;
outline: red;
&:focus { 
    outline: none !important;
    border: 2px solid RGB(25, 118, 210);
 }
`

type Props = {
  cerca: (cerca:string) => void, 
  searchTerm: string,
}

const BasicTextField : React.FC<Props> = ({cerca, searchTerm}) => {
  return (

      <SearchBar value={searchTerm} onChange={(e) => {cerca(e.target.value)}} id="outlined-basic" placeholder="search"></SearchBar>

  );
}

export default BasicTextField;