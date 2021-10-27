import './App.css';
import Navbar from './navbar';
import BasicCard from './main.js';
import Footer from './footer';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import products from './data.json';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dettaglio from './dettaglio';


function App() {

  const [searchTerm, setTerm] = useState(''); // stato dei dati iniziale
  const [arrProds, setArrProds] = useState(products);

  function cerca(text) {
    setTerm(text);
    console.log(searchTerm);
  }

  function reset(props) {
    setTerm('');
  }

  function detail() {
    return
  }


  const toggle = (value) => {
    var newArr = [];
    products.map((prodx) => {
      if (value === "in") {
        if (prodx.availability.stock > 0) {
          newArr.push(prodx);
        }
      }
      if (value === "out") {
        if (prodx.availability.stock <= 0) {
          newArr.push(prodx);
        }
      }
      setArrProds(newArr);
    });

  }



  return (

    <Router>
      <Switch>

        {/* ROUTE PER DETTAGLIO */}

        <Route path="/dettaglio/:id">
          <Dettaglio />
        </Route>

        {/* ROUTE PER HOME */}

        <Route path="/" >
          <div className="App" >
            <Navbar content="text" searchText={searchTerm} toggle={(value) => toggle(value)} cerca={(text) => { cerca(text) }} reset={() => { reset() }} />
            <Grid container sx={{ minHeight: '90vh', marginBottom: 'auto' }} >
              {arrProds.filter(prod => prod.name.toLowerCase().includes(searchTerm.toLowerCase())).map((produ) => (
                <BasicCard produ={produ}/>
              ))}
            </Grid>
            <Footer sx={{ height: '68px' }} />
          </div>
        </Route>

      </Switch>
    </Router>
  );
}


export default App;
