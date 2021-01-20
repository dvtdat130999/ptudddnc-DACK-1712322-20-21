import React, {Component, useContext,useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, 
    TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,Button,TouchableOpacity } from 'react-native';
// import { Video } from 'expo-av';
import Clipboard from 'expo-clipboard';

import { Video } from 'expo-video'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CourseIntroduction from "./CourseIntroduction/course-introduction";
import {themes} from "../../globals/themes";
import DarkStyles from "../../globals/dark-style";
import LightStyles from "../../globals/light-style";
import styles from "../../globals/styles";
import {ThemeContext} from "../../provider/theme-provider";
import {LanguageContext} from "../../provider/language-provider";

import CourseApi from "../../api/courseApi";
import ListCourseSection from "./CourseSection/ListCourseSection/list-course-section";
import ListComment from "../CourseStudy/Comment/list-comment";
import Rating from "../CourseStudy/Rating/rating";
const {width,height}=Dimensions.get('window');
const CourseStudyTab=createMaterialTopTabNavigator();
const CourseStudy=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let themeStyle=null;
    let {changeLanguage}=useContext(LanguageContext);

    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }
    
    // const videoRef = useRef(Video)(null);
    const [item,setItem]=useState(props.route.params.item);
    const [navigation,setNavigation]=useState(props.route.params.navigation);
    const [learning,setLearning]=useState([]);
    const [courseSection,setCourseSection]=useState(null);
    const [isYoutube,setIsYoutube]=useState(false);
    const [isMp4,setIsMp4]=useState(false);
    const [videoProgress,setVideoProgress]=useState(0);
    const [tabBarBackground,setTabBarBackground]=useState(null);
    const [tabBarLabelColor,setTabBarLabelColor]=useState(null);
    props.navigation.setOptions({title:item.title});

    const renderLearning=()=>{
        return learning.map((item,i)=>{
            return <Text style={themeStyle.text} key={i}>{`+ ${item}`}</Text>
        })
    }
    const getCourseSection=async()=>{
        const res=await CourseApi.courseDetail(item.id,item.instructorId);
        return res.payload.section;
        
    };

    const copyToClipboard=()=>{
        const averagePoint=Math.round((item.formalityPoint + item.presentationPoint + item.contentPoint)/3);
        let courseInfo=`Course name: ${item.title}\nInstructor: ${item["instructor.user.name"]}\nTotal hours: ${item.totalHours}\nContent: ${item.description}\nAverage point: ${averagePoint}`;
        Clipboard.setString(courseInfo);
        alert(changeLanguage.CopyToClipboardSuccess);
    }
    useEffect(()=>{
        console.log("Check course:",props.route.params.item);

        if(tabBarBackground===null)
        {
            if(themeStyle===DarkStyles)
            {
                setTabBarBackground("black");

            }
            if(themeStyle===LightStyles)
            {
                setTabBarBackground("white");

            }
        }
        if(tabBarLabelColor===null)
        {
            if(themeStyle===DarkStyles)
            {
                setTabBarLabelColor("white");

            }
            if(themeStyle===LightStyles)
            {
                setTabBarLabelColor("black");

            }
        }
        if(item===null)
        {
            setItem(props.route.params.item);
        }
        if(navigation===null)
        {
            setNavigation(props.route.params.navigation)
        }
        if(learning.length===0 && item!==null)
        {
            setLearning(item.learnWhat);
            console.log(learning);
        }
        if(item!==null && courseSection===null)
        {
            let section=getCourseSection();
            setCourseSection(section);
        }

       
    })
    return(
        <ScrollView>
            <View style={{backgroundColor:changeTheme.background}}>
                {item.promoVidUrl!==null && item.promoVidUrl.includes(".mp4")===true?
                <Video
                    source={{ uri: item.promoVidUrl }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    useNativeControls
                    shouldPlay={false}
                    isLooping={false}
                    // onProgress={onProgress}
                    // ref={videoRef}
                    // positionMillis={6000}
                    style={{ width: width, height: height/3 }}
                />
                :
                <Image source={{uri:item.imageUrl}} style={{height:400,width:'100%'}}/>

                }
                {props.route.params.searchedCourse ? 
                    <CourseIntroduction item={item} navigation={props.navigation} searchedCourse={true}/>:
                    <CourseIntroduction item={item} navigation={props.navigation} />
                }
                <View style={styles.space}/>
                <View style={styles.space}/>

                <Text style={themeStyle.textMedium}>{changeLanguage.Contents}</Text>
                {renderLearning()}
                <View style={styles.space}/>
                <View style={styles.space}/>
                <TouchableOpacity style={themeStyle.related} onPress={copyToClipboard}>
                    <Text style={themeStyle.text}>
                        {changeLanguage.CopyToClipboard}
                    </Text>
                </TouchableOpacity>
                <View style={styles.space}/>
                <View style={styles.space}/>
                <CourseStudyTab.Navigator
                    tabBarOptions={{
                        labelStyle: { fontSize: 12,
                                        color: tabBarLabelColor
                        },

                        style: { 
                            backgroundColor: tabBarBackground ,
                        },
                    }}
                >
                    <CourseStudyTab.Screen name="Section" 
                    >
                        {()=><ListCourseSection navigation={navigation} 
                                                courseId={item.id} 
                                                instructorId={item.instructorId}/>}
                    </CourseStudyTab.Screen>
                    
                    <CourseStudyTab.Screen
                        name="Comment"
                    >
                        {()=><ListComment navigation={navigation} 
                                                item={item} 
                                                />}
                    </CourseStudyTab.Screen>
                    <CourseStudyTab.Screen
                        name="Rating"
                        
                    >
                        {()=><Rating item={item} 
                                                />}
                    </CourseStudyTab.Screen>
                </CourseStudyTab.Navigator>
                

            </View>
        </ScrollView>
    );
}

export default CourseStudy