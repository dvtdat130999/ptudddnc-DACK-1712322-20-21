import React, {Component, useContext,useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,
    TouchableHighlight,Dimensions ,SectionList,FlatList,ActivityIndicator } from 'react-native';

import styles from "../../../globals/styles";
import ListCoursesItem from "../../Courses/ListCoursesItem/list-courses-item";
import {navigationName} from "../../../globals/constants";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {ThemeContext} from "../../../provider/theme-provider";
import {MyCoursesContext} from "../../../provider/mycourses-provider";
import PaymentApi from "../../../api/paymentApi";
import CourseApi from "../../../api/courseApi";
const MyCourses=(props)=>{
    const {authentication}=useContext(AuthenticationContext);
    const {myCourses,setMyCourses}=useContext(MyCoursesContext);
    const params={
        limit:20,
        page:1
    };
    const getAllCourse=async()=>{
        const response=await CourseApi.topSell(params);
         setAllCourse(response.payload);
         setIsLoading(false);
    }
    const [allCourse,setAllCourse]=useState([]);
    //const [myCourses,setMyCourses]=useState([]);
    // const [DATA,setDATA]=useState([]);
    // const [topNew,setTopNew]=useState([]);
    // const [topSell,setTopSell]=useState([]);
    // const [topRate,setTopRate]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
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
    
    
    const onPressListCoursesItem=(item,data,navigation)=>{
        props.navigation.navigate(navigationName.CourseStudy,{item,data,navigation});

    }
    const [DATA,setDATA]=useState([]);
    const [totalCourseBought,setTotalCourseBought]=useState([]);
    const [status,setStatus]=useState(false);
    
    const renderItem=()=>{
        
        return DATA.map((item,i)=>{
            //console.log("Check item");
            //console.log(item);
            
            //return <View key={i}></View>
            
            if(item && item!==null)
            {
                return <ListCoursesItem navigation={props.navigation} item={item} key={i} 
                data={allCourse} onPressListCoursesItem={onPressListCoursesItem}
            />
            }
            else{
                return <View key={i}></View>
            }
            
            
        })

    };
    
        
    
    const [first,setFirst]=useState(true);
    useEffect(()=>{
        if(allCourse.length===0)
        {

            getAllCourse();
        }
        if(allCourse.length>0)
        {

            let promises=allCourse.map(async(item,i)=>{
                const res=await PaymentApi.getCourseInfo(item.id,authentication);
                if(res.didUserBuyCourse===true)
                {
                    let existed=false;
                    if(DATA.map((dataItem,j)=>{
                        if(dataItem===item)
                        {
                            existed=true;
                        }
                    }))
                    if(existed===false)
                    {
                        return item;
                    }
                    else
                    {
                        return null;
                    }

                }
            })
            
            Promise.all(promises)
            .then(res=>{
               
                setDATA(res);
            })
            
            // let promises=allCourse.map(async(item,i)=>{
            //     const res=await PaymentApi.getCourseInfo(item.id,authentication);
            //     if(res.didUserBuyCourse===true)
            //     {
            //         let existed=false;
            //         DATA.map((dataItem,j)=>{
            //             if(dataItem===item)
            //             {
            //                 existed=true;
            //             }
                    
            //         })
            //         if(existed===false)
            //         {
            //             setDATA(DATA.concat(item));
                        
            //         }

            //     }
            // });
            
        }
  
    });

    return(
        <ScrollView style={{backgroundColor:changeTheme.background,flex:1}}>
            { isLoading && <ActivityIndicator size="large" color="red"/> }

            <View style={{marginTop:60,flex:1}}>
                    <Text style={themeStyle.sectionTitle}>{props.title}</Text>
                    {renderItem()}
            </View>
        </ScrollView>

    );

}


export default MyCourses;