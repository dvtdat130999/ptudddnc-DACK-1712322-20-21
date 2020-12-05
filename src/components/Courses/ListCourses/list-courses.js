import React, {Component, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../globals/styles";
import ListCoursesItem from "../ListCoursesItem/list-courses-item";
import {navigationName} from "../../../globals/constants";
import {CoursesContext} from "../../../provider/courses-provider";
const ListCourses=(props)=>{
    let DATA;
    let path;
    let category;
    let author;
    let skill;
    let skillRelated;
    let isRelated=false;
    if(props.relatedWithCourse)
    {
        isRelated=true;
        skillRelated=props.relatedWithCourse.skill;
    }
    console.log("Check props of list courses");
    console.log(props);
    if(props.searchResult)
    {
        DATA=props.searchResult;
    }
    else
    {
        const coursesData=useContext(CoursesContext);
        DATA=coursesData.listCourses;



    }
    if(props.route && props.route.params && props.route.params.path)
    {
        path=props.route.params.path;

    }
    if(props.route && props.route.params && props.route.params.category)
    {
        category=props.route.params.category;


    }
    if(props.route && props.route.params && props.route.params.author)
    {
        author=props.route.params.author;


    }
    if(props.route && props.route.params && props.route.params.skill)
    {
        skill=props.route.params.skill;

    }
    const onPressListCoursesItem=(item,data,navigation)=>{
        props.navigation.navigate(navigationName.CourseStudy,{item,data,navigation});

    }
    const renderItem=()=>{
        return DATA.map((item,i)=>{
            if(category)
            {
                if(category.name===item.category)
                {
                    return <ListCoursesItem navigation={props.navigation} item={item} key={i} data={DATA} onPressListCoursesItem={onPressListCoursesItem}/>

                }
                else
                {
                    return <View key={i}/>

                }
            }
            if(path)
            {
                if(path.name===item.path)
                {
                    return <ListCoursesItem navigation={props.navigation} item={item} key={i} data={DATA} onPressListCoursesItem={onPressListCoursesItem}/>

                }
                else
                {
                    return <View key={i}/>

                }
            }

            if(author)
            {
                if(author.name===item.author)
                {
                    return <ListCoursesItem navigation={props.navigation} item={item} key={i} data={DATA} onPressListCoursesItem={onPressListCoursesItem}/>

                }
                else
                {
                    return <View key={i}/>

                }
            }
            if(skill)
            {
                if(skill.name===item.skill)
                {
                    return <ListCoursesItem navigation={props.navigation} item={item} key={i} data={DATA} onPressListCoursesItem={onPressListCoursesItem}/>

                }
                else
                {
                    return <View key={i}/>

                }
            }
            if(skillRelated)
            {
                if(skillRelated===item.skill)
                {
                    return <ListCoursesItem navigation={props.navigation} item={item} key={i} data={DATA} onPressListCoursesItem={onPressListCoursesItem}/>

                }
                else
                {
                    return <View key={i}/>

                }
            }
            else if(isRelated)
            {
                return <View key={i}/>

            }
            return <ListCoursesItem navigation={props.navigation} item={item} key={i} data={DATA} onPressListCoursesItem={onPressListCoursesItem}/>

        })
    };
    return(
        <ScrollView style={{marginTop:60}}>
            <Text style={styles.sectionCoursesTitle}>{props.title}</Text>
            {renderItem()}

        </ScrollView>
    );

}

export default ListCourses;