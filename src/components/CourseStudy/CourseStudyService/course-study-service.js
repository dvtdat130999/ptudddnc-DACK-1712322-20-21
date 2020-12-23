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
import UserApi from "../../../api/userApi";
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
    const bookmark=async ()=>{
        const res=await UserApi.likeCourse(authentication,props.item.id);
        setBookmarkStatus(res.likeStatus);
        let temp=coursesBookmark;
        temp=temp.concat(props.item);
        setCoursesBookmark(temp);
    };
    const getIndex=(list,a)=>{
        list.map((item,i)=>{
            if(item===a)
            {
                return i;
            }
        })
        return -1;
    }
    const unbookmark=async ()=>{
        const res=await UserApi.likeCourse(authentication,props.item.id);
        setBookmarkStatus(res.likeStatus);
        let index=getIndex(coursesBookmark,props.item);
        let temp=coursesBookmark;
        temp.splice(index,1);
        setCoursesBookmark(temp);
    };
    const addToChannel=()=>{
        console.log("Press add to channel")
    };
    const download=()=>{
        console.log("Press download")
    };
    const [bookmarkStatus,setBookmarkStatus]=useState(null);

    const getCourseLikeStatus=async()=>{
        const res=await UserApi.getCourseLikeStatus(authentication,props.item.id);
        
        setBookmarkStatus(res.likeStatus);
    }

    useEffect(()=>{
        if(bookmarkStatus===null)
        {
            getCourseLikeStatus();

        }
        
        

    });

    return(
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            {bookmarkStatus ? 
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
                </View>:
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