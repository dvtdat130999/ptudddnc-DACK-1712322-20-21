import React, {Component, useContext,useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,
    TouchableHighlight,Dimensions ,SectionList,FlatList,ActivityIndicator } from 'react-native';

import styles from "../../../globals/styles";
import ListCoursesItem from "../ListCoursesItem/list-courses-item";
import {navigationName} from "../../../globals/constants";
import {CoursesContext} from "../../../provider/courses-provider";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {ThemeContext} from "../../../provider/theme-provider";
import CourseApi from "../../../api/courseApi";
const ListCourses=(props)=>{
    
    const [DATA,setDATA]=useState([]);
    const [topNew,setTopNew]=useState([]);
    const [topSell,setTopSell]=useState([]);
    const [topRate,setTopRate]=useState([]);
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
    const [instructor,setInstructor]=useState(null);
    const [category,setCategory]=useState(null);
    

    const onPressListCoursesItem=(item,data,navigation,searchedCourse)=>{
        props.navigation.navigate(navigationName.CourseStudy,{item,data,navigation,searchedCourse});

    }
    
    const renderItem=()=>{
        //return <View></View>
        return DATA.map((item,i)=>{
            if(instructor!==null)
            {
                
                if(item.instructorId===instructor.id)
                {

                    return <ListCoursesItem navigation={props.navigation} item={item} key={i} data={DATA} onPressListCoursesItem={onPressListCoursesItem}/>

                }
                else
                {
                    return <View key={i}></View>
                }
            }
            if(category!==null)
            {
                return <ListCoursesItem navigation={props.navigation} item={item} key={i} 
                                        data={DATA} onPressListCoursesItem={onPressListCoursesItem}
                                        searchedCourse={true}/>

            }
            else
            {
                return <ListCoursesItem navigation={props.navigation} item={item} key={i} data={DATA} onPressListCoursesItem={onPressListCoursesItem}/>

            }
        })
    };
    const params={
        limit:20,
        page:1
    };
    const callApiTopSellCourse=async()=>{
        const response=await CourseApi.topSell(params);
        setTopSell(response.payload);
        
    }
    const callApiTopNewCourse=async()=>{
        const response=await CourseApi.topNew(params);
        setTopNew(response.payload);

    }
    const callApiTopRateCourse=async()=>{
        const response=await CourseApi.topRate(params);
        setTopRate(response.payload);

    }
    
    const [totalCourse,setTotalCourse]=useState(0);
    useEffect(()=>{
        if(props.searchResult && DATA!==props.searchResult)
        {
           
            setDATA(props.searchResult);
            setIsLoading(false);
            console.log("Check data after = search result");
            console.log(DATA);

        }
        if(props.instructor && instructor!==props.instructor)
        {
            setInstructor(props.instructor);
        }
        if(props.route && props.route.params && props.route.params.category)
        {
            setCategory(props.route.params.category);
            const getAllCourseOfCategory=async()=>{
                const res=await CourseApi.searchByCategory(category.id);
                setDATA(res.payload.rows);
                setIsLoading(false);

            }
            if(category && DATA.length===0)
            {
                getAllCourseOfCategory();

            }
        }
        else
        {
            
            if(props.route && props.route.params && props.route.params.topRate===true)
            {
                if(topRate.length===0)
                {
                    callApiTopRateCourse();
    
                }
                setDATA(topRate);
                setIsLoading(false);
    
            }
            else
            {
                if(totalCourse===0)
                {
                        const getTotal=async()=>{
                            const res=await CourseApi.getTotalNumber();
                            setTotalCourse(res.payload);
                        }
                        getTotal();
                }
                if(totalCourse>0&& DATA.length<totalCourse)
                {
                    if(topSell.length===0)
                    {
                        
                        callApiTopSellCourse()
                    }
                    if(topNew.length===0)
                    {
                        
                        callApiTopNewCourse()
                    }
                    if(topRate.length===0)
                    {
                        
                        callApiTopRateCourse()
                    }
                    if(topSell.length>0)
                    {
                        topSell.map((item,i)=>{
                            let isExisted=false;
                            DATA.map((itemDATA,j)=>{
                                if(itemDATA.id===item.id)
                                {
                                
                                    isExisted=true;
                                }
                            })
                            if(isExisted===false)
                            {
                                let temp=DATA;
                                temp=temp.concat(item);
                                setDATA(temp);
                            }
                            
                        });
                    }
                    if(topNew.length>0)
                    {
                        topNew.map((item,i)=>{
                            let isExisted=false;
                            DATA.map((itemDATA,j)=>{
                                if(itemDATA.id===item.id)
                                {
                                
                                    isExisted=true;
                                }
                            })
                            if(isExisted===false)
                            {
                                let temp=DATA;
                                temp=temp.concat(item);
                                setDATA(temp);
                            }
                            
                        });
                    }
                    if(topRate.length>0)
                    {
                        topRate.map((item,i)=>{
                            let isExisted=false;
                            DATA.map((itemDATA,j)=>{
                                if(itemDATA.id===item.id)
                                {
                                
                                    isExisted=true;
                                }
                            })
                            if(isExisted===false)
                            {
                                let temp=DATA;
                                temp=temp.concat(item);
                                setDATA(temp);
                            }
                            
                        });
                    }
                }                    
                setIsLoading(false);
            }
            if(props.route&& props.route.params && props.route.params.instructor && instructor===null)
            {
                if(instructor===null)
                {
                    setInstructor(props.route.params.instructor);

                }
            }
            
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


export default ListCourses;