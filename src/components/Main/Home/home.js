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
import {MyCoursesContext} from "../../../provider/mycourses-provider";
import {BookmarkContext} from "../../../provider/bookmark-provider";
import PaymentApi from "../../../api/paymentApi";
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
    const [allCourses,setAllCourses]=useState([]);
    const {myCourses,setMyCourses}=useContext(MyCoursesContext);
    const [detail,setDetail]=useState(null);
    const [search,setSearch]=useState([]);
    const [beforeDetail,setBeforeDetail]=useState([]);
    const [first,setFirst]=useState(true);
    useEffect(()=>{
        if(search.length!==0)
        {
            console.log("After detail:");
            console.log(search);
            setFirst(false);
        }
        if(beforeDetail.length===0)
        {
            const getSearchResult=async()=>{
                const res=await CourseApi.searchByKeyword("java");
                
                setBeforeDetail(res.payload.rows);
            }
            getSearchResult();

        }
        if(search.length===0 && beforeDetail.length!==0)
        {
            const getDetail=async()=>{
                for(let i=0;i<beforeDetail.length;i++)
                {
                    let course=beforeDetail[i];
                    const detail=await CourseApi.courseDetailWithLesson(course.id,authentication);
                    console.log("Check detail in loop:",detail);
                    let temp=search;
                    temp=temp.concat(detail.payload);
                    setSearch(search.concat(detail.payload));

                }
            }
            getDetail();

           
            
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
                
            ),
        });
    }, [props.navigation]);

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