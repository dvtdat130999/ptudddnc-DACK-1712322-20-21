import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';
import styles from "../../../globals/styles";
import {DefaultTheme} from "@react-navigation/native";
import {ThemeContext} from "../../../provider/theme-provider";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {LanguageContext} from "../../../provider/language-provider";

const ChangeThemes=(props)=>{
    let {changeTheme,setChangeTheme}=useContext(ThemeContext);
    let themeStyle;
    const {changeLanguage}=useContext(LanguageContext);

    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }
    console.log(changeTheme);
    const light=(props)=>{

        setChangeTheme(themes.light);
        console.log("Theme light");
    }
    const dark=(props)=>{
        setChangeTheme(themes.dark);

        console.log("Theme dark");
    }
    return(
        <ScrollView style={{backgroundColor:changeTheme.background}}>
            <View style={{marginLeft:10,marginRight:10}}>

                <View style={styles.space}/>
                <View style={styles.space}/>

                <TouchableOpacity
                    style={{borderBottomColor: 'gray',
                        borderBottomWidth: 1,}}
                    onPress={light}
                >
                    <View>
                        <Text style={themeStyle.textMedium}>{changeLanguage.Light}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.space}/>
                <TouchableOpacity
                    style={{borderBottomColor: 'gray',
                        borderBottomWidth: 1,}}
                    onPress={dark}
                >
                    <View>
                        <Text style={themeStyle.textMedium}>{changeLanguage.Dark}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ChangeThemes;