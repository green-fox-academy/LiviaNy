`use strict`;

import express from 'express';
export const app = express();

const AwesomeMixVol1 = [
  { artist: 'Blue Swede', title: 'Hooked on a Feeling', genre: 'pop rock', year: '1973', rating: 5 },
  { artist: 'Raspberries', title: 'Go All the Way', genre: 'power pop', year: '1972', rating: 1 },
  { artist: 'Norman Greenbaum', title: 'Spirit in the Sky', genre: 'gospel', year: '1968', rating: 2 },
  { artist: 'David Bowie', title: 'Moonage Daydream', genre: 'glam rock', year: '1972', rating: 5 },
  { artist: 'Elvin Bishop', title: 'Fooled Around and Fell in Love', genre: 'southern rock', year: '1975', rating: 5 },
  { artist: '10cc', title: 'I`m Not in Love', genre: 'soft rock', year: '1975', rating: 1 },
  { artist: 'The Jackson Five', title: 'I Want You Back', genre: 'soul', year: '1969', rating: 2 },
  { artist: 'Redbone', title: 'Come and Get your Love', genre: 'pop rock', year: '1974', rating: 4 },
  { artist: 'The Runaways', title: 'Cherry Bomb', genre: 'hard rock', year: '1976', rating: 1 },
  { artist: 'Rupert Holmes', title: 'Escape', genre: 'soft rock', year: '1979', rating: 5 },
  { artist: 'Five Stairsteps', title: 'O-o-h Child', genre: 'soul', year: '1970', rating: 4 },
  {
    artist: 'Marvin Gaye & Tammi Terrell',
    title: 'Ain`t No Mountain High Enough',
    genre: 'soul',
    year: '1967',
    rating: 5,
  },
];

app.use(express.json());

app.get('/awesome', (req, res) => {
  res.status(200).send(AwesomeMixVol1);
});

app.post('/awesome', (req, res) => {
  const { artist } = req.body;
  const { title } = req.body;
  const { genre } = req.body;
  const { year } = req.body;
  const { rating } = req.body;
  if (!artist || !title || !genre || !year || !rating) {
    res.status(400).send({ error: `Please feed me some data!` });
  } else {
    addSong(artist, title, genre, year, rating);
    res.status(201).send(AwesomeMixVol1);
  }
});

app.delete('/awesome/:index', (req, res) => {
  const { index } = req.params;

  if (!index) {
    res.status(400).send({ error: `Please tell me which song to delete` });
  } else {
    removeSong(index);
    res.status(201).send(AwesomeMixVol1);
  }
});

app.put('/awesome/:index', (req, res) => {
  const { index } = req.params;
  const { rating } = req.body;
  if (!index || !rating) {
    res.status(400).send({ error: `Please feed me some data` });
  } else {
    changeRaing(index, rating);
    res.status(201).send(AwesomeMixVol1);
  }
});

app.get('/awesome/:list', (req, res) => {
  const { list } = req.params;
  if (!list) {
    res.status(400).send({ error: `Please give me a list` });
  } else if (list === '1' || list === '3' || list === '5') {
    res.status(201).send(sortList(list));
  } else {
    res.status(400).send({ error: 'List must be equal to 1, 3 or 5' });
  }
});

app.get('/awesome/artist/:artist', (req, res) => {
  const { artist } = req.params;
  if (!artist) {
    res.status(400).send({ error: 'Please provide an artist' });
  } else {
    res.status(201).send(search('artist', artist));
  }
});

app.get('/awesome/genre/:genre', (req, res) => {
  const { genre } = req.params;
  if (!genre) {
    res.status(400).alert('Please provide an author');
  } else {
    res.status(201).send(search('genre', genre));
  }
});

app.get('/awesome/year/:year', (req, res) => {
  const { year } = req.params;
  if (!year) {
    res.status(400).alert('Please provide an author');
  } else {
    res.status(201).send(search('year', year));
  }
});

function addSong(artist, title, genre, year, rating) {
  AwesomeMixVol1.push({ artist: artist, title: title, genre: genre, year: year, rating: rating });
}

function removeSong(index) {
  AwesomeMixVol1.splice(index - 1, 1);
}

function changeRaing(index, rating) {
  AwesomeMixVol1[index - 1].rating = rating;
}

function sortList(list) {
  const length = AwesomeMixVol1.length;
  const newList = [];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (AwesomeMixVol1[j].rating < AwesomeMixVol1[j + 1].rating) {
        let temporary = AwesomeMixVol1[j];
        AwesomeMixVol1[j] = AwesomeMixVol1[j + 1];
        AwesomeMixVol1[j + 1] = temporary;
      }
    }
  }
  for (let k = 0; k < list; k++) {
    newList.push(AwesomeMixVol1[k]);
  }
  return newList;
}

function search(searchType, searchValue) {
  const newMix = [];
  if (searchType === 'artist') {
    AwesomeMixVol1.forEach((song) => {
      if (song.artist.toLowerCase().includes(searchValue)) {
        newMix.push(song);
      }
    });
    return newMix;
  } else if (searchType === 'genre') {
    AwesomeMixVol1.forEach((song) => {
      if (song.genre.toLowerCase().includes(searchValue)) {
        newMix.push(song);
      }
    });
  } else if (searchType === 'year') {
    AwesomeMixVol1.forEach((song) => {
      if (song.year.toString().includes(searchValue)) {
        newMix.push(song);
      }
    });
  }
  return newMix;
}
