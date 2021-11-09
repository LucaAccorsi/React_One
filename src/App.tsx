import './App.css';
import Navbar from './pages/navbar';
import BasicCard from './pages/main';
import Footer from './pages/footer';
import { useEffect, useState } from 'react';
import { Product, products } from './data';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Detail from './pages/detail';
import styled from 'styled-components'

const Grid = styled.div`
display: grid;
grid-template-columns: 25% 25% 25% 25%;
row-gap: 8px;
padding-bottom: 84px;
`

const Container = styled.div`
position: relative;
min-height: 100vh;
`

function App() {

  const [searchTerm, setTerm] = useState('');
  const [filterToggle, setToggle] = useState('all');

  const [data, setData] = useState<Product[]>([])

  useEffect(() => {
    fetch("https://assets.fc-dev.instore.oakley.com/assets/products/products.json")
    .then(response => response.json())
    .then(
      (result) => {
      setData(result);
    },
    )
  }, [])



  function cerca(text: string) {
    setTerm(text);
  }

  function reset() {
    setTerm('');
  }



return (

  <Router>
    <Switch>

      <Route path="/dettaglio/:id">
        <Detail />
      </Route>

      <Route path="/" >
        <Container className="App" >
          <Navbar  searchTerm={searchTerm} filterToggle={filterToggle} setToggle={setToggle}  cerca={cerca} reset={reset} />


          <Grid>
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
        </Container>
      </Route>

    </Switch>
  </Router>
);
}


export default App;
