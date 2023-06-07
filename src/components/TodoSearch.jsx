import React from 'react';
import '../stylesheets/TodoSearch.css';

function TodoSearch(){

    const [searchValue, setSearchValue] = React.useState('');


    return(
        <input 
            placeholder='Cortar Cebolla'
            className='TodoSearch' 
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}   
        />
    )
  }

  export { TodoSearch };