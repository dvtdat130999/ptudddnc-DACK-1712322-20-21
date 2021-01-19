import React, {Component, useState, useEffect, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import ImageButton from "../../Common/image-button";
import SectionCourses from "../Home/SectionCourses/section-courses";
import ListCourses from "../../Courses/ListCourses/list-courses";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {ThemeContext} from "../../../provider/theme-provider";
import ListDownloadItem from "./list-download-item";

const ListDownload=(props)=>{
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

    const renderListItem=()=>{
        return DATA.map((item,i)=>{
            return <ListDownloadItem key={i} item={item} navigation={props.navigation}/>
        })
    }

    useEffect(()=>{
        if(DATA.length===0)
        {

            const onCheck=async()=>{
                const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
                if(status==='granted')
                {
                    const res=await MediaLibrary.getAssetsAsync({
                        mediaType:MediaLibrary.MediaType.video
                      });
                      setDATA(res.assets);
                }
            
            }
            onCheck();
        }
    })
    return(
        <ScrollView style={{backgroundColor:changeTheme.background,flex:1}}>
            <View style={{flex:1}}>
                {renderListItem()}
            </View>
        </ScrollView>


    );
}

export default ListDownload;