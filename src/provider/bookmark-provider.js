import React, {useState,useContext,useEffect} from 'react';
import {View} from 'react-native';

import CourseApi from "../api/courseApi";
import UserApi from "../api/userApi";
import {AuthenticationContext} from "./authentication-provider";
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