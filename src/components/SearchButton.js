
import styles from './Nav.module.css'

const SearchButton = ({text, action}) => {

  return (
  <>
    <button className={styles.SearchButtonStyle} onClick={() => action()}>{text}</button>
  </>

  );
}

export default SearchButton;