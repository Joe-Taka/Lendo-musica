import styles from './Nav.module.css'

import MainLogo from './MainLogo'
import SearchButton from './SearchButton'
import SearchLogo from './SearchLogo'
import ErrorSearchLogo from './ErrorSearchLogo'

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

const ErrorSearch = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.logoContainerSearch}>
        <MainLogo/>
      </div>

      <div className={styles.searchContainer}>
        <p>Letra não encontrada</p>
        <ErrorSearchLogo/>
        <p style={{'fontWeight':'normal'}}>Essa música ainda não foi escrita, mas não fique triste, você pode acessar milhares de músicas realizando uma nova busca &lt;3</p>
        <SearchButton text={<ButtonContent/>} action={()=>navigate('/')}/>
      </div>
    </div>
  )
}


export default ErrorSearch;