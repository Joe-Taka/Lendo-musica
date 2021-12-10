
import styles from './Nav.module.css'

const SearchItem = ({text}) => {

  return (
  <>
    <button type='button' className={styles.SearchButtonStyle}>{Object.keys(text)[0]} - {Object.values(text)[0]}</button>
  </>

  );
}

export default SearchItem;