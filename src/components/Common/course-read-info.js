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
    /*console.log("Check props course read info");

    console.log(props);
    console.log("Check props.item course read info");
    console.log(props.item);*/
    // const [date,setDate]=useState(null);
    // const [dateToFormat,setDateToFormat]=useState(null);
    // useEffect(()=>{
    //     if(date===null)
    //     {
    //         setDate(new Date(props.item.createdAt));
    //         setDateToFormat(format(date,"dd/MM/yyyy"));
    //     }
    // })
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

    return(
        <View style={{padding:5,height:250}}>
            <Text style={themeStyle.textMedium}>{props.item.title}</Text>
            {props.searchedCourse ? 
                <Text style={themeStyle.sectionCourseItemText}>{props.item.name}</Text>:
                <Text style={themeStyle.sectionCourseItemText}>{props.item["instructor.user.name"]}</Text>

            }
            <Text style={themeStyle.sectionCourseItemText}>{dateToFormat}</Text>



            <Text style={themeStyle.sectionCourseItemText}>{`Total hours: ${props.item.totalHours}`}</Text>
        </View>
    );
}

export default CourseReadInfo;