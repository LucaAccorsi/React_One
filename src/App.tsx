import './App.css';
import Navbar from './pages/navbar';
import BasicCard from './pages/main';
import Footer from './pages/footer';
import { useEffect, useState } from 'react';
import { Product } from './data';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Detail from './pages/detail';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import { setTerm } from './features/slice/resetSlice';
import { setToggle } from './features/slice/toggleSlice';

const Grid = styled.div`
display: grid;
grid-template-columns: 25% 25% 25% 25%;
row-gap: 8px;
padding-bottom: 8rem;
`

const Container = styled.div`
position: relative;
min-height: 100vh;
`


const App: React.FC = () => {
  
  const dispatch = useDispatch()

  // const [searchTerm, setTerm] = useState('');
  const searchTerm = useSelector((state: RootState) => state.reset.value);

  // const [filterToggle, setToggle] = useState('all');  
  const filterToggle = useSelector((state: RootState) => state.toggle.value);

  
  const [data, setData] = useState<Product[]>([])

  useEffect(() => {
    fetch("https://assets.fc-dev.instore.oakley.com/assets/products/products.json")
    .then(response => response.json())
    .then(data => setData(data))
  }, [])

  function cerca(text: string) {
    dispatch(setTerm(text));
  }

  function reset() {
    dispatch(setTerm(''));
  }


return (

  <Router>
    <Switch>

      <Route path="/dettaglio/:id">
        <Detail data={data}/>
      </Route>

      <Route path="/" >
        <Container className="App" >
          <Navbar    setToggle={setToggle}  cerca={cerca} reset={reset} />

          <Grid>
            {data
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
