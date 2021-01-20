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
import {LanguageContext} from "../../../provider/language-provider";

import PaymentApi from "../../../api/paymentApi";
import UserApi from "../../../api/userApi";
const Home=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let {changeLanguage}=useContext(LanguageContext);

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
    
     
    
    const {authentication}=useContext(AuthenticationContext);
    const {coursesBookmark,setCoursesBookmark}=useContext(BookmarkContext);
    const [allCourses,setAllCourses]=useState([]);
    const {myCourses,setMyCourses}=useContext(MyCoursesContext);
    const [detail,setDetail]=useState(null);
    const [search,setSearch]=useState([]);
    const [beforeDetail,setBeforeDetail]=useState([]);
    const [first,setFirst]=useState(true);
    
    useEffect(()=>{
        if(first===true)
        {
            // const rating=async()=>{
            //     const courseId="7844e73e-f61b-4f1b-82ce-f98f120a7c46";
            //     const formalityPoint=4;
            //     const contentPoint=5;
            //     const presentationPoint=4.8;
            //     const content="Hay";
            //     const res=await CourseApi.ratingCourse(authentication,courseId,formalityPoint,contentPoint,presentationPoint,content);
            //     console.log("Check res rating course:",res);
            //     const res=await CourseApi.courseInfo(courseId);
            //     console.log("Check res get course info:",res);
            // }
            // rating();


            const getDetail=async()=>{
                const courseId="7844e73e-f61b-4f1b-82ce-f98f120a7c46";
                const res=await CourseApi.courseDetail(courseId,null);

                console.log("Check res detail exercise:",res.payload);

                // res.payload.ratings.ratingList.map((item,i)=>{
                //     console.log("Check item detail:",item);
                // })

            }
            getDetail();
            setFirst(false);
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
                <SectionCourses navigation={props.navigation} title={changeLanguage.New} isTopNew={true}/>
                <SectionCourses navigation={props.navigation} title={changeLanguage.Trending} isTopSell={true}/>
                <SectionCoursesBookmark navigation={props.navigation} title={changeLanguage.Bookmark}/>
            </View>
        </ScrollView>


    );
}

export default Home;