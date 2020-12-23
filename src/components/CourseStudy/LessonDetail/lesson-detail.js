import React, {Component, useContext,useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, 
    TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,Button,
    SafeAreaView
} from 'react-native';

import {themes}from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style"
import LightStyles from "../../../globals/light-style";
import styles from "../../../globals/styles";
import {ThemeContext} from "../../../provider/theme-provider";
import Lesson from "../Lesson/lesson";
import { Video } from 'expo-av';
import YoutubePlayer from 'react-native-youtube-iframe';

const {width,height}=Dimensions.get('window');
const LessonDetail=(props)=>{
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
    const [listLesson,setListLesson]=useState(null);
    const renderListLesson=()=>{
        return listLesson.map((item,i)=>{
            return <Lesson navigation={props.navigation} item={item} listLesson={listLesson} stt={i+1}/>
        })
    }
    useEffect(()=>{
        if(item===null)
        {
            setItem(props.route.params.lesson);
           console.log("Check params list");
           console.log(props.route.params.listLesson);
        }
        if(listLesson===null)
        {
            setListLesson(props.route.params.listLesson);
            console.log("CHeck list in lesson detail");
            console.log(listLesson);
        }
        if(item!==null && urlSplit===null)
        {
            seturlSplit(item.videoUrl.split("?v="));
        }        
    })
    const [urlSplit,seturlSplit]=useState(null);
    return(

        <ScrollView style={{backgroundColor:changeTheme.background,flex:1}}>
            <View style={{flex:1}}>
                <SafeAreaView style={{ flex: 1 }}>
                    <YoutubePlayer
                        
                        height={height/3} 
                        videoId={urlSplit[1]}
                        play={false} 
                        onReady={onPlayerReady}
                            />
                </SafeAreaView>
                {item? 
                    <Text style={themeStyle.text}>{item.name}</Text> : 
                    <View></View>
                
                }
                {item? 
                    <Text style={themeStyle.text}>{item.content}</Text>:
                    <View></View>
                
                }
                {listLesson ? 
                    renderListLesson():
                    <View></View>
                }
            </View>
        </ScrollView>
    );
}

const componentStyle=StyleSheet.create({
    video:{
        width:width,
        height:height/3,
    }
})
export default LessonDetail;