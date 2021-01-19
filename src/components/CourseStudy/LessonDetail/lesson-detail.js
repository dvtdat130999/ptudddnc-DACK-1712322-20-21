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
import YoutubePlayer from 'react-native-youtube-iframe';
import {Video} from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

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
    const [urlSplit,seturlSplit]=useState(null);
    const [url,setUrl]=useState(null);

    const [isYoutube,setIsYoutube]=useState(false);
    const [isMp4,setIsMp4]=useState(false);

    const [downloadProgress,setDownloadProgress]=useState(0);
    const [buttonTitle,setButtonTitle]=useState("Download");
    const [isDownloaded,setIsDownloaded]=useState(false);
    const [totalSize,setTotalSize]=useState(0);

    
    const formatBytes=(bytes,decimals=2)=>{
        if(bytes===0)
        {
            return '0 bytes';
        }
        const k=1024;
        const dm=decimals<0?0:decimals;
        const sizes=['Bytes','KB','MB','GB','TB','PB','EB','ZB','YB'];
        const i=Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes/Math.pow(k,i)).toFixed(dm))+" "+sizes[i];
    }
    const renderListLesson=()=>{
        return listLesson.map((item,i)=>{
            console.log("CHeck lesson for videoUrl");
            console.log(item);
            return <Lesson navigation={props.navigation} item={item} listLesson={listLesson} stt={i+1} key={i}/>
        })
    }
    
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
            console.log("Check video url:",item.videoUrl);
        }
        if(url!==null)
        {
            if(urlSplit!==null)
            {
                if(url.includes("youtube.com"))
                {
                    setIsYoutube(true);
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
                    if(url.includes(".mp4"))
                    {
                        setIsMp4(true);

                    }
                }
                
            }
            else
            {
                if(url.includes("youtube.com"))
                {
                    setIsYoutube(true);

                    if(url.includes("?v="))
                    {
                        seturlSplit(url.split("?v="));
               
                    }
                    if(url.includes("embed/"))
                    {
                        seturlSplit(url.split("embed/"));
               
                    }
                }
                
                if(url.includes(".mp4"))
                {
                    setIsMp4(true);

                }
            }
           
        }
        
          
    })
    const saveFile = async (fileUri) => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status === "granted") {
            const asset = await MediaLibrary.createAssetAsync(fileUri)
            await MediaLibrary.createAlbumAsync("Download", asset, false)
        }
    } 
    const downloadVideo=async()=>{
        setButtonTitle("Downloading");
        setIsDownloaded(true);
        const callback = downloadProgress => {
            setTotalSize(formatBytes(downloadProgress.totalBytesExpectedToWrite));
            let progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
            progress=progress.toFixed(2)*100;
            setDownloadProgress(progress.toFixed(0));
            
        };
          
        const downloadResumable = FileSystem.createDownloadResumable(
            url,
            FileSystem.documentDirectory +"plsDDNC1712322_"+"Lesson+"+ item.id+"_"+item.name+".mp4",
            {},
            callback
        ); 
        try {
            const { uri } = await downloadResumable.downloadAsync();

            console.log('Finished downloading to ', uri);
            saveFile(uri);
            setButtonTitle("Downloaded");
            setIsDownloaded(false);
          } catch (e) {
            console.error(e);
          } 
                       
    }
    return(

        <ScrollView style={{backgroundColor:changeTheme.background,flex:1}}>
            <View style={{flex:1}}>
               
                {urlSplit!==null && isYoutube===true?
                    <YoutubePlayer            
                    height={height/3} 
                    videoId={urlSplit[1]}
                    play={false} />:
                    <View></View>}
                {isMp4===true  ?  
                <Video
                    source={{uri:url}}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay={false}
                    isLooping={false}
                    useNativeControls
                    style={{ width: width, height: height/3 }}
                />
                :
                <View></View>
                                         
                }                
                
                {item? 
                    <Text style={themeStyle.text}>{item.content}</Text>:
                    <View></View>
                
                }
                {isMp4===true?
                    <View style={{flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                    <TouchableHighlight 
                                        onPress={downloadVideo}
                    >
                        <View>
                            <Text style={{color:'aqua'}}>{buttonTitle}</Text>
                        </View>
                    </TouchableHighlight>
                    {isDownloaded===true
                        ?
                    <View>
                        <Text style={themeStyle.text}>Size: {totalSize}</Text>

                        <Text style={themeStyle.text}>Progress: {downloadProgress}%</Text>
                    </View>    
                        :
                    <View></View>
                    }
                </View>
                    
                :
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