import styles from './Nav.module.css'

import MainLogo from './MainLogo'
import SearchButton from './SearchButton'
import SearchLogo from './SearchLogo'

import { useNavigate } from "react-router-dom";

const IconSpan = {
  marginLeft: '0.6rem'
}

const ButtonContent = () => (
    <>
        <SearchLogo />
        <span style={IconSpan}>Nova Busca</span>
    </>
)

const Searchresult = ({ArtistInput, SongInput}) => {

  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.logoContainerSearch}>
        <MainLogo/>
      </div>

      <div className={styles.searchContainer}>
        <p>Letra encontrada</p>
        <div className={styles.songCont} onClick={() => navigate('/musicpage')}>
          <p>{ArtistInput}</p>
          <p>{SongInput}</p>
        </div>
        <p>Não encontrou o que procurava?</p>
        <SearchButton text={<ButtonContent/>} action={()=>navigate('/')}/>
      </div>
    </div>
  )
}


export default Searchresult;