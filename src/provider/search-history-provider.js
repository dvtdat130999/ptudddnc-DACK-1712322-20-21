import React, {useState} from 'react';

const SearchHistoryContext=React.createContext();

const SearchHistoryProvider=(props)=>{
    
   
    const [searchHistory,setSearchHistory]=useState([]);
    return(
        <SearchHistoryContext.Provider value={{searchHistory,setSearchHistory}}>
            {props.children}
        </SearchHistoryContext.Provider>

    );
}

export {SearchHistoryProvider,SearchHistoryContext};