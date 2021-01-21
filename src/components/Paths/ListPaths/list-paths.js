import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../globals/styles";
import ListPathsItem from "../ListPathsItem/list-paths-item";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {ThemeContext} from "../../../provider/theme-provider";
const ListPaths=(props)=>{
    console.log("CHeck props of listpaths");
    console.log(props);
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
    let DATA;
    console.log("Check props of list paths");
    console.log(props);
    let category;
    if(props.route && props.route.params && props.route.params.category)
    {
        category=props.route.params.category;


    }
    if(props.relatedWithCourse)
    {
        category=props.relatedWithCourse.category;
    }
    if(props.searchResult)
    {
        DATA=props.searchResult;
    }
    else
    {
        DATA=paths;
    }
    const renderItem=()=>{
        return DATA.map((item,i)=>{
            if(category)
            {
                if(category===item.category)
                {
                    return <ListPathsItem item={item} key={i+1} navigation={props.navigation}/>

                }
                if(category.name===item.category)
                {
                    return <ListPathsItem item={item} key={i+1} navigation={props.navigation}/>

                }
                else
                {
                    return <View key={i+1}/>
                }
            }
            return <ListPathsItem item={item} key={i+1} navigation={props.navigation}/>
        })
    };
    return(
        <ScrollView style={{backgroundColor:changeTheme.background,flex:1}}>

            <View style={{marginTop:60,flex:1}}>
                <Text style={themeStyle.sectionTitle}>{props.title}</Text>
                {renderItem()}
            </View>
        </ScrollView>

    );

}

export default ListPaths;