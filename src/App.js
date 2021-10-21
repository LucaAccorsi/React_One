import './App.css';
import Navbar from './navbar';
import BasicCard from './main.js';
import Footer from './footer';
import Data from './data.json';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import products from './data.json';
import * as React from 'react';

function App() {

  const [searchTerm, setTerm] = useState(''); // stato dei dati iniziale
  const [arrProds, setArrProds] = useState(products);

  function cerca(text) {
    setTerm(text);
    console.log(searchTerm);
  }

  function reset() {
    setTerm('');
  }

  const toggle = (value) => {
    var newArr = [];
    products.map((prodx)=> {
      if (value == "in") {
        if (prodx.availability.stock > 0 ) {
          newArr.push(prodx);
        }
      }
      if (value == "out") {
        if (prodx.availability.stock <= 0) {
          newArr.push(prodx);
        }
      }
      setArrProds(newArr);
    });

  }



  return (
    <div className="App">

      <Navbar content="text" toggle={(value) => toggle(value)} cerca={(text) => {cerca(text)}}      reset={() => {reset()}}/>

      <Grid container>
        {arrProds.filter(prod => prod.name.toLowerCase().includes(searchTerm.toLowerCase())).map((produ) => ( 
        <BasicCard nome={produ.name} prezzo={produ.price.current.value} stock={produ.availability.stock}/>
        ))}
           
      </Grid>
      
      <Footer />

    </div>
  );
}


export default App;
