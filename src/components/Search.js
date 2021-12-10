import MainLogo from './MainLogo'
import SearchBox from './SearchBox'
import SearchButton from './SearchButton'
import SearchLogo from "./SearchLogo";

import styles from './Nav.module.css'

import { Link, useNavigate } from "react-router-dom";

const IconSpan = {
  marginLeft: '0.6rem'
}

const ButtonContent = () => ( 
    <>
        <SearchLogo />
        <span style={IconSpan}>Buscar</span>
    </>
)

const Search = ({ArtistInput,setArtistInput,SongInput,setSongInput, setLyrics}) => {

  const navigate = useNavigate();

  let artistObj = {}

  const searchSong = async () => {
    console.log({ArtistInput})
    console.log({SongInput})

    const url = (artist, title) => `https://api.lyrics.ovh/v1/${artist}/${title}`

    let searchHistory = JSON.parse(localStorage.getItem('searchHistory'));

    console.log(searchHistory)

    try {
      const response = await fetch(url(ArtistInput,SongInput));
      console.log(response)
      const data = await response.json();
      setLyrics(data.lyrics);

      if (response.status === 200) {

        artistObj[ArtistInput] = SongInput

        if (!searchHistory) {
          searchHistory = [];
          searchHistory.push(artistObj)
          localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

        } else {
          searchHistory.push(artistObj)
          localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        }

        navigate('/searchresult') 
      } else {

        navigate('/errorsearch') 
      }

    }  catch (err) {
      throw err;
    }
  }

  return (
    <div>
      <div className={styles.logoContainer}>
        <MainLogo/>
        <Link to="/history" className={styles.linkStyle}>Últimas buscas</Link>
      </div>

      <div className={styles.searchContainer}>
        <p>Buscar letra</p>
        <SearchBox label='Artista' placeholder='Insira o nome do artista' setValue={setArtistInput}/>
        <SearchBox label='Música' placeholder='Insira o nome da música' setValue={setSongInput}/>
        <SearchButton text={<ButtonContent/>} action = {searchSong}/>
      </div>
    </div>
  )
}

export default Search;