import React, {useState} from 'react';
import {View} from 'react-native';
import {languageEng} from "../globals/language-Eng";

const LanguageContext=React.createContext();

const LanguageProvider=(props)=>{
    const [changeLanguage,setChangeLanguage]=useState(languageEng);
    
    return(
        <LanguageContext.Provider value={{changeLanguage,setChangeLanguage}}>
            {props.children}
        </LanguageContext.Provider>

    );
}

export {LanguageProvider,LanguageContext};