import React, {Component, useState, useEffect, useContext} from 'react';
import { StyleSheet,View, Text, TouchableOpacity,Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {ThemeContext} from "../../../provider/theme-provider";
import {navigationName} from "../../../globals/constants";
import {Video} from "expo-av";
const {width,height}=Dimensions.get('window');

const ListDownloadItemVideo=(props)=>{
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
    const [item,setItem]=useState(null);
    useEffect(()=>{
        if(item===null)
        {
            setItem(props.route.params.item);
        }
    })
    
    
    return(
        <View style={{backgroundColor:changeTheme.background,
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems:'center'
                        }}>
            {item!==null?
                <View >
                    <Video
                        source={{uri:item.uri}}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay={false}
                        isLooping={false}
                        useNativeControls
                        style={{ width: width, height: height/3 }}
                        />
                    <View style={{marginTop:20}}></View>
                    <Text style={themeStyle.text}>
                        {item.name}
                    </Text>
                </View>
                :
                <View ></View>
            }
            
            
        </View>


    );
}

export default ListDownloadItemVideo;