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
    const [isBookmarked,setIsBookmarked]=useState(false);
    const bookmark=()=>{
        let bookmark={
            user:authentication.id,
            course:props.item,
            isBookmarked:true,
        };
        let isExisted=false;
        coursesBookmark.map((item,i)=>{
           if(item.user===bookmark.user && item.course.id===bookmark.course.id)
           {
               isExisted=true;
           }
        });
        if(!isExisted)
        {
            let courses=coursesBookmark;
            courses=courses.concat(bookmark);
            setCoursesBookmark(courses);
        }

    };


    const addToChannel=()=>{
        console.log("Press add to channel")
    };
    const download=()=>{
        console.log("Press download")
    }

    return(
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
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
            <View style={componentStyles.viewImage} >
                <TouchableOpacity onPress={addToChannel} >
                        <Image
                            source={AddToChannelIcon}
                            style={componentStyles.image}
                        />

                </TouchableOpacity>
                <View>
                    <Text style={themeStyle.text}>Add to Channel</Text>
                </View>
            </View>
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
        marginRight:35,
        alignItems:'center',
        justifyContent:'center'


    },


});
export default CourseStudyService