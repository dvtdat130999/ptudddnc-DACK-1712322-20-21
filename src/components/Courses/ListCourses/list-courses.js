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
    const getAllCourse=async()=>{
        const response=await CourseApi.topSell(params);
         setAllCourse(response.payload);
    }
    const [allCourse,setAllCourse]=useState([]);
    const [DATA,setDATA]=useState([]);
    const [topNew,setTopNew]=useState([]);
    const [topSell,setTopSell]=useState([]);
    const [topRate,setTopRate]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [itemToRender,setItemToRender]=useState(10);
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
        if(DATA.length>0)
        {
            return DATA.map((item,i)=>{
                if(i<itemToRender)
                {
                    if(category!==null)
                    {
                        return <ListCoursesItem navigation={props.navigation} item={item} key={i} 
                                                data={DATA} onPressListCoursesItem={onPressListCoursesItem}
                                                searchedCourse={true}/>
        
                    }
                    else
                    {
                        return <ListCoursesItem navigation={props.navigation} item={item} key={i} data={DATA} 
                        onPressListCoursesItem={onPressListCoursesItem}/>
        
                    }
                }
                
            })
        }
        else{

            return allCourse.map((item,i)=>{
                if(i<itemToRender)
                {
                    if(instructor)
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
                }
                
            })
        }

        
       
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
        if(allCourse.length===0)
        {

            getAllCourse();
        }
        
        if(props.route && props.route.params && props.route.params.type)
        {
            let type=props.route.params.type;
            if(type==="new")
            {
                callApiTopNewCourse();
            }
            if(type==="sell")
            {
                callApiTopSellCourse();
            }
            if(type==="rate")
            {
                callApiTopRateCourse();
            }

        }
        if(topNew.length>0 && DATA!==topNew)
        {
            setDATA(topNew);
            setIsLoading(false);
        }
        if(topSell.length>0 && DATA!==topSell)
        {
            setDATA(topSell);
            setIsLoading(false);
        }
        if(topRate.length>0 && DATA!==topRate)
        {
            setDATA(topRate);
            setIsLoading(false);
        }
        if(props.searchResult && DATA!==props.searchResult)
        {
           
            setDATA(props.searchResult);
            setIsLoading(false);

        }
        if(props.instructor && instructor===null)
        {
            setInstructor(props.instructor);
            
        }
        if(props.route&& props.route.params && props.route.params.instructor && instructor!==props.route.params.instructor)
        {
            setInstructor(props.route.params.instructor);

        }
        if(props.route && props.route.params && props.route.params.category)
        {
            setCategory(props.route.params.category);
            const getAllCourseOfCategory=async()=>{
                const res=await CourseApi.searchByCategory(category.id);
                setDATA(res.payload.rows);
                setIsLoading(false);

            }
            if(category)
            {
                getAllCourseOfCategory();

            }
        }
      

            setIsLoading(false);           
            
    });

    return(
        <ScrollView style={{
                            backgroundColor:changeTheme.background,
                            flex:1
                            }}
                    onMomentumScrollEnd={(e)=>{
                        const scrollPosition=e.nativeEvent.contentOffset.y;
                        const scrollViewHeight=e.nativeEvent.layoutMeasurement.height;
                        const contentHeight=e.nativeEvent.contentSize.height;
                        const isScrolledToBottom=scrollViewHeight+scrollPosition;
                        if(isScrolledToBottom>=(contentHeight-50)&& 
                            (itemToRender<=DATA.length || itemToRender<=allCourse.length))
                            {
                                setItemToRender(itemToRender+10);
                            }
                    }}>
            { isLoading && <ActivityIndicator size="large" color="red"/> }

            <View style={{marginTop:60,flex:1}}>
                    <Text style={themeStyle.sectionTitle}>{props.title}</Text>
                    {renderItem()}
            </View>
        </ScrollView>

    );

}


export default ListCourses;