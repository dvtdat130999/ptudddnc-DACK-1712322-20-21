import React, {useState} from 'react';
import {View} from 'react-native';


const MyCoursesContext=React.createContext();

const MyCoursesProvider=(props)=>{
    const [myCourses,setMyCourses]=useState([]);
    return(
        <MyCoursesContext.Provider value={{myCourses,setMyCourses}}>
            {props.children}
        </MyCoursesContext.Provider>

    );
}

export {MyCoursesProvider,MyCoursesContext};