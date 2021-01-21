import React, {Component, useContext,useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,
    TouchableHighlight,Dimensions ,SectionList,FlatList,ActivityIndicator } from 'react-native';

import styles from "../../../globals/styles";
import {ThemeContext} from "../../../provider/theme-provider";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {themes} from "../../../globals/themes";
import ListAuthorsItem from "../ListAuthorsItem/list-authors-item";

import InstructorApi from "../../../api/instructorApi";
const ListAuthors=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
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
    const [DATA,setDATA]=useState([]);


    const renderItem=()=>{
        return DATA.map((item,i)=>{
            return <ListAuthorsItem item={item} key={i+1} navigation={props.navigation}/>
        })
    };
    const getAllInstructor=async()=>{
        const res=await InstructorApi.getAll();
        setDATA(res.payload);
        setIsLoading(false);
    }
    useEffect(()=>{
        if(props.searchResult)
        {
            setDATA(props.searchResult);
            setIsLoading(false);

        }
        else
        {
            getAllInstructor();

        }
    })
    return(
        <ScrollView style={{backgroundColor:changeTheme.background,flex:1}}>
            { isLoading && <ActivityIndicator size="large" color="red"/> }

            <View style={{marginTop:60,flex:1}}>
                <Text style={themeStyle.sectionTitle}>{props.title}</Text>
                {renderItem()}
            </View>
        </ScrollView>

    );

}

export default ListAuthors;