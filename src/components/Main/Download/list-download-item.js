import React, {Component, useState, useEffect, useContext} from 'react';
import { StyleSheet,View, Text, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {ThemeContext} from "../../../provider/theme-provider";
import {navigationName} from "../../../globals/constants";


const ListDownloadItem=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let themeStyle;
    let border;
    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
        border="white";
    }
    else
    {
        themeStyle=LightStyles;
        border="black";

    }
    const [item,setItem]=useState(null);

    const watchVideo=()=>{
        props.navigation.navigate(navigationName.VideoDownload,{
            item:item,
            navigation:props.navigation

        })
        console.log("Watch video");
    }
    useEffect(()=>{
        if(item===null)
        {
            let nameSplit=props.item.filename.split("_");
            let type=nameSplit[1];
            let id=nameSplit[2];
            let name="";
            for(let j=3;j<nameSplit.length;j++)
            {
                if(j>3)
                {
                    name=name+"_";
                }
                name=name+nameSplit[j];
            }
            let temp={
                type:type,
                id:id,
                name:name,
                uri:props.item.uri
            }
            setItem(temp);
        }
        
    })
    return(
        <View style={{backgroundColor:changeTheme.background,
                        marginTop:20,
                        flex:1,
                        borderBottomColor:border,
                        borderBottomWidth:1
                    }}
        >
            {item!==null ?
            <TouchableOpacity onPress={watchVideo} style={{flex:1,marginBottom:20}}>
                
                <Text style={themeStyle.text}>
                    {item.name}
                </Text>
            </TouchableOpacity>
            :
            <View style={{flex:1,marginBottom:20}}></View>
            }
               
        </View>


    );
}

export default ListDownloadItem;