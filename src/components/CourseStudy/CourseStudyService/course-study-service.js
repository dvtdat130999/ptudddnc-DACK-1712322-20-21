import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../globals/styles";
import BookmarkIcon from "../../../../assets/bookmarkicon.png"
import AddToChannelIcon from"../../../../assets/add-to-channel.png"
import DownloadIcon from "../../../../assets/downloadicon.jpg"
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {BookmarkContext} from "../../../provider/bookmark-provider";
const CourseStudyService=(props)=>{
    const {coursesBookmark,setCoursesBookmark}=useContext(BookmarkContext);
    const {authentication}=useContext(AuthenticationContext);
    const bookmark=()=>{
        let bookmark={
            user:authentication.user.fullname,
            course:props.item,
        };

        let courses=coursesBookmark;
        courses=courses.concat(bookmark);
        setCoursesBookmark(courses);
    };
    const addToChannel=()=>{
        console.log("Press add to channel")
    };
    const download=()=>{
        console.log("Press download")
    }

    return(
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={bookmark} >
                <Image
                    source={BookmarkIcon}
                    style={{width:50,height:50,borderRadius:50,marginLeft:20,marginTop:20,marginBottom:20, backgroundColor:'white'}}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={addToChannel} >
                <Image
                    source={AddToChannelIcon}
                    style={{width:50,height:50,borderRadius:50,marginLeft:20,marginTop:20,marginBottom:20, backgroundColor:'white'}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={download} >
                <Image
                    source={DownloadIcon}
                    style={{width:50,height:50,borderRadius:50,marginLeft:20,marginTop:20,marginBottom:20, backgroundColor:'white'}}
                />
            </TouchableOpacity>
        </View>
    );
}

export default CourseStudyService