import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';
import {authors} from"../../../../data/authors"
import styles from "../../../../globals/styles";
import SectionAuthorsItem from "../SectionAuthorsItem/section-authors-item";
import {ThemeContext} from "../../../../provider/theme-provider";
import {themes} from "../../../../globals/themes";
import DarkStyles from "../../../../globals/dark-style";
import LightStyles from "../../../../globals/light-style";
import {navigationName} from "../../../../globals/constants";

const SectionAuthors=(props)=>{
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
    const DATA = authors;
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
    return(
        <View style={{marginTop:60}}>
            <View style={{

                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={themeStyle.title}>{props.title}</Text>
                <TouchableHighlight style={{marginRight:20}} onPress={seeAll}>
                    <Text style={themeStyle.textMedium}>See all</Text>

                </TouchableHighlight>
            </View>
            <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                {renderItem()}
            </ScrollView>
        </View>
    );}
export default SectionAuthors;