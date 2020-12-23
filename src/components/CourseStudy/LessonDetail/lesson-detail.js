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
            console.log("CHeck lesson for videoUrl");
            console.log(item);
            return <Lesson navigation={props.navigation} item={item} listLesson={listLesson} stt={i+1} key={i}/>
        })
    }
    const [urlSplit,seturlSplit]=useState(null);
    const [url,setUrl]=useState(null);
    useEffect(()=>{
        console.log("Check route params lesson video url");
        console.log(props.route.params.lesson.videoUrl);
        if(item!==props.route.params.lesson)
        {
            setItem(props.route.params.lesson);
        }
        if(listLesson!==props.route.params.listLesson)
        {
            setListLesson(props.route.params.listLesson);
        }
        if(item!==null && item.videoUrl && url!==item.videoUrl)
        {
            setUrl(item.videoUrl);
        }
        if(url!==null)
        {
            if(urlSplit!==null)
            {
                if(url.includes("?v="))
                {
                    let temp=url.split("?v=");
                    if(temp[1]!==urlSplit[1])
                    {
                        seturlSplit(temp);
                    }               
                }
                if(url.includes("embed/"))
                {
                    let temp=url.split("embed/");
                    if(temp[1]!==urlSplit[1])
                    {
                        seturlSplit(temp);
                    }                     
                }
                
            }
            else
            {
                if(url.includes("?v="))
                {
                    seturlSplit(url.split("?v="));
           
                }
                if(url.includes("embed/"))
                {
                    seturlSplit(url.split("embed/"));
           
                }
            }
           
        }
        
          
    })
    return(

        <ScrollView style={{backgroundColor:changeTheme.background,flex:1}}>
            <View style={{flex:1}}>
                {urlSplit ?
                // <SafeAreaView >
                //     <YoutubePlayer
                        
                //         height={height/3} 
                //         videoId={urlSplit[1]}
                //         play={false} 
                        
                //             />
                // </SafeAreaView>
                <YoutubePlayer
                        
                        height={height/3} 
                        videoId={urlSplit[1]}
                        play={false} 
                        
                            />:<View></View> 
                }                
                
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