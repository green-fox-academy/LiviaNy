import { useEffect, useState } from 'react';
import './App.css';
import Qotd from './qotd';
import QuoteList from './quoteList';

function App() {
  const [qotd, setQotd] = useState({});
  const [quotes, setQuotes] = useState([]);
  const baseUrl = 'https://favqs.com/api/';
  const ApiKey = '6d1e5cb9d46ffbf4d8f945ef8d614458';
  const fetchQotd = () => {
    fetch(`${baseUrl}qotd`)
      .then((res) => res.json())
      .then((data) => {
        setQuotes([]);
        setQotd(data.quote);
      });
  };
  const fetchQuotes = () => {
    fetch(`${baseUrl}quotes`, {
      headers: {
        Authorization: `Token token="${ApiKey}"`,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes);
        setQotd(null);
      });
  };
  const giveMeANewOne = () => {
    fetchQotd();
  };
  const giveMeALot = () => {
    fetchQuotes();
  };
  useEffect(() => {
    fetchQotd();
  }, []);
  return (
    <div className="App">
      {qotd && <Qotd quote={qotd.body} author={qotd.author} />}
      {quotes.length > 0 && <QuoteList quotes={quotes} />}
      <button onClick={giveMeANewOne}>Give me a new one!</button>
      <button onClick={giveMeALot}>Give me a lot!</button>
    </div>
  );
}

export default App;
