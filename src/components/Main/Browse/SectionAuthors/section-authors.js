import React, {Component, useContext,useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,
    TouchableHighlight,Dimensions ,SectionList,FlatList,ActivityIndicator } from 'react-native';
import {authors} from"../../../../data/authors"
import styles from "../../../../globals/styles";
import SectionAuthorsItem from "../SectionAuthorsItem/section-authors-item";
import {ThemeContext} from "../../../../provider/theme-provider";
import {LanguageContext} from "../../../../provider/language-provider";

import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";
import {navigationName} from "../../../../globals/constants";
import InstructorApi from "../../../../api/instructorApi";
const SectionAuthors=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let {changeLanguage}=useContext(LanguageContext);

    let themeStyle;
    const [isLoading,setIsLoading]=useState(true);

    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }
    const [DATA,setDATA] = useState([]);
    const seeAll=()=>{
        props.navigation.navigate(navigationName.Authors,{
        })
    };
    const renderItem=()=>{
        return DATA.map((item,i)=>{
            if(i<10)
            {
                return <SectionAuthorsItem item={item} key={i} navigation={props.navigation}/>

            }
            else
            {
                return <View key={i}></View>
            }
        })
    }
    const getAllInstructor=async()=>{
        const res=await InstructorApi.getAll();
        setDATA(res.payload);
        setIsLoading(false);
    }
    useEffect(()=>{
        if(DATA.length===0)
        {
            getAllInstructor();
        }
    })
    return(
        <View style={{marginTop:60,flexDirection:'column'}}>
            { isLoading && <ActivityIndicator size="large" color="red"/> }

            <View style={{

                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={themeStyle.title}>{props.title}</Text>
                <TouchableHighlight style={{marginRight:20}} onPress={seeAll}>
                    <Text style={themeStyle.text}>{changeLanguage.SeeAll}</Text>

                </TouchableHighlight>
            </View>
            <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                {renderItem()}
            </ScrollView>
        </View>
    );}
export default SectionAuthors;