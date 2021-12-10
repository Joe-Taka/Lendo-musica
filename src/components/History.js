import MainLogo from './MainLogo'
import Button from './Button'
import SearchButton from './SearchButton'
import SearchLogo from './SearchLogo'
import SearchItem from './SearchItem'
import styles from './Nav.module.css'

import { useNavigate } from "react-router-dom";

const buttonClear = {
  background: 'none',
  border: 'none',
  margin: 0,
  padding: 0,
  cursor: 'pointer',
  color: '#FFFFFF',
  fontSize: '1.4rem'
};

const ButtonContent = () => ( 
  <>
      <SearchLogo />
      <span style={IconSpan}>Buscar</span>
  </>
)

const IconSpan = {
  marginLeft: '0.6rem'
}

const History = () => {

  let searchHistory = JSON.parse(localStorage.getItem('searchHistory'));

  console.log(searchHistory)
  console.log(typeof searchHistory)

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.logoContainer}>
        <MainLogo/>
        <Button text='Limpar histórico X' style={buttonClear} action={() => localStorage.clear()}/>
      </div> 

      <div className={styles.searchContainer}>
        <p>Histórico</p>
        {searchHistory ? Array.from(searchHistory).map(item => (<SearchItem key={item.id} text={item}/>)) : null}
        <SearchButton text={<ButtonContent/>} action={() => navigate('/')}/>
      </div>
    </>
  )
}



export default History;