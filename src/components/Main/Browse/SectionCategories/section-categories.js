import React, {Component, useContext,useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';
import {categories} from"../../../../data/categories"
import styles from "../../../../globals/styles";
import SectionCategoriesItem from "../SectionCategoriesItem/section-categories-item";
import {ThemeContext} from "../../../../provider/theme-provider";
import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";
import {navigationName} from "../../../../globals/constants";
import CategoryApi from "../../../../api/categoryApi";
const SectionCategories=(props)=>{
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
    const [DATA,setDATA] = useState([]);
    const seeAll=()=>{
        props.navigation.navigate(navigationName.Categories,{

        })
    };
        
    const renderItem=()=>{
        return DATA.map((item,i)=>{
            return <SectionCategoriesItem item={item} key={i} navigation={props.navigation}/>

        })
    }
    useEffect(()=>{
        if(DATA.length===0)
        {
            const getAllCategory=async()=>{
                const res=await CategoryApi.getAll();
                
                setDATA(res.payload);
                
            };
            getAllCategory();
        }
        
    })
    return(
        <View style={{marginTop:60}}>
            <View style={{

                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={themeStyle.title}>{props.title}</Text>
                {/* <TouchableHighlight style={{marginRight:20}} onPress={seeAll}>
                    <Text style={themeStyle.textMedium}>See all</Text>

                </TouchableHighlight> */}
            </View>
            <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                {renderItem()}
            </ScrollView>
        </View>
    );}
export default SectionCategories;