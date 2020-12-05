import React, {useState} from 'react';
import {View} from 'react-native';


const BookmarkContext=React.createContext();

const BookmarkProvider=(props)=>{
    const [coursesBookmark,setCoursesBookmark]=useState([]);
    return(
        <BookmarkContext.Provider value={{coursesBookmark,setCoursesBookmark}}>
            {props.children}
        </BookmarkContext.Provider>

    );
}

export {BookmarkProvider,BookmarkContext};