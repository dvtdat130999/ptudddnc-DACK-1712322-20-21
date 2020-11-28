import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../globals/styles";
import BookmarkIcon from "../../../../assets/bookmarkicon.png"
import AddToChannelIcon from"../../../../assets/add-to-channel.png"
import DownloadIcon from "../../../../assets/downloadicon.jpg"
const CourseStudyService=(props)=>{
    const bookmark=(props)=>{
        console.log("Press bookmark")
    };
    const addToChannel=(props)=>{
        console.log("Press add to channel")
    };
    const download=(props)=>{
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