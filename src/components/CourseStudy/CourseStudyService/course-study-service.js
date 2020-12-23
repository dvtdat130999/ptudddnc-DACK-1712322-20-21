import React, {Component, useContext, useEffect, useState} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../globals/styles";
import BookmarkIcon from "../../../../assets/bookmarkicon.png"
import AddToChannelIcon from"../../../../assets/add-to-channel.png"
import DownloadIcon from "../../../../assets/downloadicon.jpg"
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {BookmarkContext} from "../../../provider/bookmark-provider";
import {ThemeContext} from "../../../provider/theme-provider";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";

import ListAuthorsItem from "../../Authors/ListAuthorsItem/list-authors-item";

const CourseStudyService=(props)=>{
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
    const {coursesBookmark,setCoursesBookmark}=useContext(BookmarkContext);
    const {authentication}=useContext(AuthenticationContext);
    //const [isBookmarked,setIsBookmarked]=useState(false);
    const course={
        user:authentication.id,
        course:props.item,
    };
    const [isExisted,setIsExisted]=useState(-1);
    const [firstCheckExisted,setFirstCheckExisted]=useState(false);
    const [addCourse,setAddCourse]=useState(false);
    const onChangeAddCourse=()=>{
        setAddCourse(!addCourse);
    };
    //let isExisted=-1;//giu index tien cho viec unbookmark
    //let isBookmark=false;
    /*coursesBookmark.map((item,i)=>{
        if(item.user===course.user && item.course.id===course.course.id)
        {
            //setIsExisted(i);
            isExisted=i;
            //isBookmark=true;

        }
    });*/

    const bookmark=()=>{

        if(isExisted===-1)
        {
            let courses=coursesBookmark;
            courses=courses.concat(course);
            setCoursesBookmark(courses);
            setIsExisted(0);
            //isBookmark=true;
            //setIsBookmarked(true);
        }



    };
    const unbookmark=()=>{
        coursesBookmark.map((item,i)=>{
            if(item.user===course.user && item.course.id===course.course.id)
            {
                setIsExisted(i);
                //isBookmark=true;

            }
        });
        const listCourseBookmarked=coursesBookmark;
        listCourseBookmarked.splice(isExisted,1);
        setCoursesBookmark(listCourseBookmarked);
        //isExisted=-1;
        //isBookmark=false;
        setIsExisted(-1);
        setFirstCheckExisted(false);
        //setIsBookmarked(false);
        console.log("Unbookmark");
    }

    const addToChannel=()=>{
        console.log("Press add to channel")
    };
    const download=()=>{
        console.log("Press download")
    };
    useEffect(()=>{
        if(!firstCheckExisted)
        {
            coursesBookmark.map((item,i)=>{
                if(item.user===course.user && item.course.id===course.course.id)
                {
                    setIsExisted(i);
                    //isBookmark=true;

                }
            });
            setFirstCheckExisted(true);
        }
        /*if(addCourse)
        {
            setIsExisted(-1);
            coursesBookmark.map((item,i)=>{
                if(item.user===course.user && item.course.id===course.course.id)
                {
                    setIsExisted(i);
                    //isBookmark=true;

                }
            });


            if(isExisted===-1)
            {
                let courses=coursesBookmark;
                courses=courses.concat(course);

                setCoursesBookmark(courses);
                setIsExisted(0);
                //isBookmark=true;
                //setIsBookmarked(true);
            }
            setAddCourse(false);
        }*/

    });

    return(
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            {isExisted!==-1 ?
                <View style={componentStyles.viewImage} >
                    <TouchableOpacity onPress={unbookmark} >
                        <Image
                            source={BookmarkIcon}
                            style={componentStyles.image}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={themeStyle.text}>Unbookmark</Text>
                    </View>
                </View> :
                <View style={componentStyles.viewImage} >
                    <TouchableOpacity onPress={bookmark} >
                        <Image
                            source={BookmarkIcon}
                            style={componentStyles.image}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={themeStyle.text}>Bookmark</Text>
                    </View>
                </View>
            }

            {/* <View style={componentStyles.viewImage} >
                <TouchableOpacity onPress={addToChannel} >
                        <Image
                            source={AddToChannelIcon}
                            style={componentStyles.image}
                        />

                </TouchableOpacity>
                <View>
                    <Text style={themeStyle.text}>Add to Channel</Text>
                </View>
            </View> */}
            <View style={componentStyles.viewImage} >
                <TouchableOpacity onPress={download} >
                        <Image
                            source={DownloadIcon}
                            style={componentStyles.image}
                        />

                </TouchableOpacity>
                <View>
                    <Text style={themeStyle.text}>Download</Text>
                </View>
            </View>
        </View>
    );
}
const componentStyles = StyleSheet.create({
    image:{
        width:50,
        height:50,
        borderRadius:50,
        marginLeft:20,
        marginTop:20,
        marginBottom:20,
        backgroundColor:'white'
    },
    viewImage:{
        marginRight:10,
        alignItems:'center',
        justifyContent:'center'


    },


});
export default CourseStudyService