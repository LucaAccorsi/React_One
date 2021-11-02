import './App.css';
import Navbar from './pages/navbar';
import BasicCard from './pages/main';
import Footer from './pages/footer';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { products } from './data';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Detail from './pages/detail';

function App() {

  const [searchTerm, setTerm] = useState<string>(''); // stato dei dati iniziale
  // const [arrProds, setArrProds] = useState<any>(products);
  const [filterToggle, setToggle] = useState<string>('all');

  function cerca(text: string) {
    setTerm(text);
    console.log(searchTerm);
  }

  function reset() {
    setTerm('');
  }



return (

  <Router>
    <Switch>

      {/* ROUTE PER DETTAGLIO */}

      <Route path="/dettaglio/:id">
        <Detail />
      </Route>

      {/* ROUTE PER HOME */}

      <Route path="/" >
        <div className="App" >
          <Navbar  searchTerm={searchTerm} filterToggle={filterToggle} setToggle={setToggle}  cerca={cerca} reset={reset} />
          <Grid container sx={{ minHeight: '90vh', marginBottom: 'auto' }} >
            {products
            .filter( prod => {
              const inStockFilterIn = filterToggle === "in" && prod.availability.stock > 0;
              const outStockFilterIn = filterToggle === "out" && prod.availability.stock <= 0;
              return filterToggle === 'all' || inStockFilterIn || outStockFilterIn;
            }).filter(prod => prod.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((produ) => (
              <BasicCard produ={produ} />
            ))}
          </Grid>
          <Footer />
        </div>
      </Route>

    </Switch>
  </Router>
);
}


export default App;
