import React, {useContext,useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,ImageBackground ,TouchableOpacity} from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';
import moment from 'moment';
import { format } from "date-fns";

import styles from "../../globals/styles"
import {ThemeContext} from "../../provider/theme-provider";
import {themes} from "../../globals/themes";
import DarkStyles from "../../globals/dark-style";
import LightStyles from "../../globals/light-style";
import CourseApi from "../../api/courseApi";
const CourseReadInfo=(props)=>{
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
   
    let date=null;
    if(props.searchedCourse)
    {
        date=new Date(props.item.updatedAt);
    }
    else
    {
        date=new Date(props.item.createdAt);

    }
    let dateToFormat=format(date,"dd/MM/yyyy");
    const [averagePoint,setAveragePoint]=useState(null);
    useEffect(()=>{
        if(averagePoint===null)
        {
            const getDetail=async()=>{
                const res=await CourseApi.courseDetail(props.item.id,null);
                setAveragePoint(Math.round(res.payload.averagePoint));
            }
            getDetail();
        }
    })
    return(
        <View style={{padding:5,height:250}}>
            <Text style={themeStyle.textBold}>{props.item.title}</Text>
            {props.searchedCourse ? 
                <Text style={themeStyle.sectionCourseItemText}>{props.item.name}</Text>:
                <Text style={themeStyle.sectionCourseItemText}>{props.item["instructor.user.name"]}</Text>

            }
            <Text style={themeStyle.sectionCourseItemText}>{dateToFormat}</Text>



            <Text style={themeStyle.sectionCourseItemText}>{`Total hours: ${props.item.totalHours}`}</Text>
            <Text style={themeStyle.sectionCourseItemText}>{`Average point: ${averagePoint}`}</Text>

        </View>
    );
}

export default CourseReadInfo;