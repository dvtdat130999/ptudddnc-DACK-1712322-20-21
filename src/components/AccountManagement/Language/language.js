import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';
import styles from "../../../globals/styles";
import {DefaultTheme} from "@react-navigation/native";
import {ThemeContext} from "../../../provider/theme-provider";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {languageViet} from "../../../globals/language-Viet";
import {languageEng} from "../../../globals/language-Eng";
import {LanguageContext} from "../../../provider/language-provider";

const Language=(props)=>{
    let {changeTheme,setChangeTheme}=useContext(ThemeContext);
    let themeStyle;
    let {changeLanguage,setChangeLanguage}=useContext(LanguageContext);

    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }
    console.log(changeTheme);
    const viet=()=>{

        setChangeLanguage(languageViet);
    }
    const eng=()=>{
        setChangeLanguage(languageEng);

    }
    return(
        <ScrollView style={{backgroundColor:changeTheme.background}}>
            <View style={{marginLeft:10,marginRight:10}}>

                <View style={styles.space}/>
                <View style={styles.space}/>

                <TouchableOpacity
                    style={{borderBottomColor: 'gray',
                        borderBottomWidth: 1,}}
                    onPress={viet}
                >
                    <View>
                        <Text style={themeStyle.textMedium}>{changeLanguage.Vietnam}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.space}/>
                <TouchableOpacity
                    style={{borderBottomColor: 'gray',
                        borderBottomWidth: 1,}}
                    onPress={eng}
                >
                    <View>
                        <Text style={themeStyle.textMedium}>{changeLanguage.English}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Language;