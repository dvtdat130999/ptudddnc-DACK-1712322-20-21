import React, {useState,useEffect,useContext} from 'react';
import {View} from 'react-native';
import CategoryApi from "../api/categoryApi";
const CategoryContext=React.createContext();

const CategoryProvider=(props)=>{
    
    const [categoryList,setCategoryList]=useState([]);
    
    return(
        <CategoryContext.Provider value={{categoryList,setCategoryList}}>
            {props.children}
        </CategoryContext.Provider>

    );
}

export {CategoryProvider,CategoryContext};