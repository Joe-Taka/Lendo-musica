import MainLogo from './MainLogo'
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
        <span style={IconSpan}>Nova Busca</span>
    </>
)

const MusicPage = ({SongInput, Lyrics}) => {

  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.logoContainer}>
        <MainLogo/>
        <Link to="/" className={styles.linkStyle}>Voltar para a busca</Link>
      </div>

      <div className={styles.lyricsCont}>
        <p style={{'fontSize': '2rem'}}>{SongInput}</p>
        <p>{Lyrics}</p>
        <SearchButton text={<ButtonContent/>} action={()=>navigate('/')}/>
      </div>
    </div>
  )
}

export default MusicPage;