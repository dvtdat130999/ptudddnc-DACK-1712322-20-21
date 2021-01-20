import React, {Component, useContext,useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,
    TouchableHighlight,Dimensions ,SectionList,FlatList,ActivityIndicator } from 'react-native';


import {ThemeContext} from "../../../provider/theme-provider";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import CourseApi from "../../../api/courseApi";
import ListCommentItem from "./list-comment-item";
const ListComment=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let themeStyle;

    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }
    const [DATA,setDATA]=useState([]);
    const [navigation,setNavigation]=useState(props.navigation);

    const renderItem=()=>{
        return DATA.map((item,i)=>{

            return <ListCommentItem navigation={navigation} item={item} key={i}/>
        })
        //return <View></View>
    }
    useEffect(()=>{
        if(DATA.length===0)
        {
            const getDetail=async()=>{
                const res=await CourseApi.courseDetail(props.item.id,null);
                setDATA(res.payload.ratings.ratingList);

            }
            getDetail();
        }
        
    })
    return(
        <ScrollView style={{backgroundColor:changeTheme.background}}>
            {renderItem()}

        </ScrollView>
    )
};

export default ListComment;

