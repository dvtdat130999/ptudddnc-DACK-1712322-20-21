import React, {useState} from 'react';
import {View} from 'react-native';
import {courses} from "../data/courses"

const CoursesContext=React.createContext();


const CoursesProvider=(props)=>{
    const [listCourses,setListCourses]=useState(courses);
    return(
        <CoursesContext.Provider value={{listCourses,setListCourses}}>
            {props.children}
        </CoursesContext.Provider>

    );
}

export {CoursesProvider,CoursesContext};