import './App.css';
import { useEffect, useState } from 'react';
import BeerList from './BeerList';

function App() {
  const [beers, setBeers] = useState([]);
  const fetchBeers = () => {
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
      .then((res) => res.json())
      .then((data) => {
        setBeers(data);
      });
  };
  useEffect(() => {
    fetchBeers();
  }, []);
  return (
    <div className="App">
      <div className="title">
        <h1>BeerWiki</h1>
      </div>
      {<BeerList beerList={beers} />}
    </div>
  );
}

export default App;
