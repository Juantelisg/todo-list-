import React from 'react'
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {        
    return (
     <input 
        placeholder="Buscar" 
        value={searchValue}
        className='TodoSearch'     
        onChange={(event) => {
            setSearchValue(event.target.value)
        }}
     />
    )
}

export { TodoSearch };