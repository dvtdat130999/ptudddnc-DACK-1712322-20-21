import React, {Component, useContext, useEffect, useState} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,
    Dimensions ,SectionList,FlatList,TouchableOpacity ,Alert} from 'react-native';

import styles from "../../../globals/styles";
import BookmarkIcon from "../../../../assets/bookmarkicon.png"
import BuyIcon from "../../../../assets/buy.png"
import AddToChannelIcon from"../../../../assets/add-to-channel.png"
import DownloadIcon from "../../../../assets/downloadicon.jpg"
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {BookmarkContext} from "../../../provider/bookmark-provider";
import {MyCoursesContext} from "../../../provider/mycourses-provider";
import {ThemeContext} from "../../../provider/theme-provider";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";

import ListAuthorsItem from "../../Authors/ListAuthorsItem/list-authors-item";
import UserApi from "../../../api/userApi";
import PaymentApi from "../../../api/paymentApi";
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

    const buy=async()=>{
        const res=await PaymentApi.getFree(props.item.id,authentication);
        console.log("Check res after buy");
        const res2=await PaymentApi.getCourseInfo(props.item.id,authentication);
        if(res2.didUserBuyCourse===true)
        {
            setPaymentStatus(true);
            
            
        }
        else{
            Alert.alert("This course is not free");
        }
        // if(res.message!=="OK")
        // {
        //     Alert.alert("This course is not free");
        // }
        // else
        // {
        //     console.log("Khong cho mua");
        //     Alert.alert("This course is not free");
        // }
        
    };
    const bought=()=>{

        console.log("Press bought")
    };
    const [bookmarkStatus,setBookmarkStatus]=useState(null);
    const [paymentStatus,setPaymentStatus]=useState(null);
    const getCourseLikeStatus=async()=>{
        const res=await UserApi.getCourseLikeStatus(authentication,props.item.id);
        
        setBookmarkStatus(res.likeStatus);
    }
    const getCoursePaymentStatus=async()=>{
        const res=await PaymentApi.getCourseInfo(props.item.id,authentication);
        setPaymentStatus(res.didUserBuyCourse);
    }
    useEffect(()=>{
        if(bookmarkStatus===null)
        {
            getCourseLikeStatus();

        }
        if(paymentStatus===null)
        {
            getCoursePaymentStatus();
        }

        

    });

    return(
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            {bookmarkStatus===true ? 
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
          

            {paymentStatus===false ?
            <View style={componentStyles.viewImage} >
                <TouchableOpacity onPress={buy} >
                        <Image
                            source={BuyIcon}
                            style={componentStyles.image}
                        />

                </TouchableOpacity>
                <View>
                    <Text style={themeStyle.text}>Buy</Text>
                </View>
            </View>
            :
            <View style={componentStyles.viewImage} >
                <TouchableOpacity onPress={bought} >
                        <Image
                            source={BuyIcon}
                            style={componentStyles.image}
                        />

                </TouchableOpacity>
                <View>
                    <Text style={themeStyle.text}>Bought</Text>
                </View>
            </View>
            
            }
            
        </View>
    );
}
const componentStyles = StyleSheet.create({
    image:{
        width:50,
        height:50,
        borderRadius:50,
        
        backgroundColor:'white'
    },
    viewImage:{
        marginRight:30,
        justifyContent:'center',
        alignItems:'center'


    },


});
export default CourseStudyService