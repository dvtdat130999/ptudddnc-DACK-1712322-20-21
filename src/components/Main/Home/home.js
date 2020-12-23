import React, {Component, useState, useEffect, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,Button,TouchableOpacity } from 'react-native';

import ImageButton from "../../Common/image-button";
import SettingIcon from "../../../../assets/setting.png"
import SectionCourses from "./SectionCourses/section-courses";
import SectionCoursesBookmark from "./SectionCoursesBookmark/section-courses-bookmark";
import {navigationName} from "../../../globals/constants";
import {courses} from "../../../data/courses"
import {ThemeContext} from "../../../provider/theme-provider";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import CourseApi from "../../../api/courseApi";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {BookmarkContext} from "../../../provider/bookmark-provider";

import UserApi from "../../../api/userApi";
const Home=(props)=>{
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
    const onPressSetting=()=>{
        props.navigation.navigate(navigationName.Setting,{
            navigation:props.navigation,
        });
    }
    const params={
        limit:20,
        page:1
    };
     
    const getAllCourse=async()=>{
        const res=await CourseApi.topSell(params);
        setAllCourses(res.payload);
    }
    const {authentication}=useContext(AuthenticationContext);
    const {coursesBookmark,setCoursesBookmark}=useContext(BookmarkContext);
    const [first,setFirst]=useState(true);
    const [allCourses,setAllCourses]=useState([]);
    const getCourseLikeStatus=async(courseId)=>{
        const res=await UserApi.getCourseLikeStatus(authentication,courseId);
        return res.likeStatus;

    }
    useEffect(()=>{
        if(allCourses.length===0)
        {
            getAllCourse();
        }
        if(first && allCourses.length!==0)
        {
            allCourses.map((item,i)=>{
                if(getCourseLikeStatus(item.id)===true)
                {
                    console.log("Xet course duoc vao book mark");
                    console.log(item);
                    let temp=coursesBookmark;
                    console.log("Check before concat");
                    console.log(temp);
                    temp=temp.concat(item);
                    console.log("Check after concat");
                    console.log(temp);
                    setCoursesBookmark(temp);
                }
            })
            setFirst(false);

        }
        if(coursesBookmark.length>0)
        {
            console.log("Bookmark da co course roi");
            console.log(coursesBookmark);
        }
     
    })
    
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={onPressSetting}>
                    <Image
                        source={SettingIcon}
                        style={{width:30,height:30,marginRight:20}}
                    />
                </TouchableOpacity>
                /*<TouchableHighlight onPress={onPressSetting}>
                    <View>
                        <Text styles={{color:'white'}}>Setting</Text>
                    </View>
                </TouchableHighlight>*/
            ),
        });
    }, [props.navigation]);

    // useEffect(()=>{
    //     const getLikeStatus=async()=>{
    //         const tiDB="a395c845-506c-4d5d-82d8-a57fe9f80622"
    //         const res=await UserApi.getCourseLikeStatus(authentication,tiDB);
    //         console.log("Check like status of tidb");
    //         console.log(res.likeStatus);
    //     }
    //     getLikeStatus();
    // })
    return(
        <ScrollView>
            <View style={{backgroundColor:changeTheme.background}}>
                <SectionCourses navigation={props.navigation} title="New" isTopNew={true}/>
                <SectionCourses navigation={props.navigation} title="Trending" isTopSell={true}/>
                <SectionCoursesBookmark navigation={props.navigation} title="Bookmark"/>
            </View>
        </ScrollView>


    );
}

export default Home;