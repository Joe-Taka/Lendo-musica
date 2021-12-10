
import styles from './Nav.module.css'

const SearchBox = ({label, placeholder, setValue}) => {

  return (

    <div className={styles.InputCont}>
      <label>{label}</label>
      <input type='text' placeholder={placeholder} className={styles.Input} onInput={e => setValue(e.target.value)}></input>
    </div>
  )
}

export default SearchBox;