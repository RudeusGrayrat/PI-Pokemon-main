import { useState } from "react";
import styles from "./SearchBar.module.css" 

export default function SearchBar(props) {
   const {onSearch} = props
   const [name, setName] = useState([])
   const handleChange = (e)=>{
      setName([e.target.value])
   }
   const handleSearch = (e)=>{
      if (name.length === 0) {
         return
      }else{
         onSearch(name)
   }
   
   }
    return (
       <div className={styles.searchBar}>
          <input className={styles.buscador} type='search' value={name} onChange={handleChange}/>
          <button onClick={handleSearch}>Buscar</button>
       </div>
    );
 }
 