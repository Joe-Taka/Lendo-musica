
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Search from './components/Search'
import History from './components/History'
import Searchresult from './components/Searchresult'
import MusicPage from './components/MusicPage'
import ErrorSearch from './components/ErrorSearch'

import { useState } from 'react';

function App() {

  const [ArtistInput, setArtistInput] = useState('');
  const [SongInput, setSongInput] = useState('');
  const [Lyrics, setLyrics] = useState('');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Search ArtistInput={ArtistInput} setArtistInput={setArtistInput} SongInput={SongInput} setSongInput={setSongInput} setLyrics={setLyrics}/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/searchresult" element={<Searchresult ArtistInput={ArtistInput} SongInput={SongInput} />} />
          <Route path="/musicpage" element={<MusicPage SongInput={SongInput} Lyrics={Lyrics}/>} />
          <Route path="/errorsearch" element={<ErrorSearch/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
