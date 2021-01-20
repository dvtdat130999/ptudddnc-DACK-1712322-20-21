import React, {useState} from 'react';
import {View} from 'react-native';
import {themes} from "../globals/themes";
import {courses} from "../data/courses";

const ThemeContext=React.createContext();

const ThemeProvider=(props)=>{
    const [changeTheme,setChangeTheme]=useState(themes.dark);
    console.log("Check change theme");
    console.log(changeTheme);
    return(
        <ThemeContext.Provider value={{changeTheme,setChangeTheme}}>
            {props.children}
        </ThemeContext.Provider>

    );
}

export {ThemeProvider,ThemeContext};