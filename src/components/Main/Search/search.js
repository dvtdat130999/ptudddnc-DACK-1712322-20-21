import React, {Component, useState, useEffect, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const SearchTab = createMaterialTopTabNavigator();
import styles from "../../../globals/styles"
import ListCourses from "../../Courses/ListCourses/list-courses";
import ListAuthors from "../../Authors/ListAuthors/list-authors";
import {navigationName} from "../../../globals/constants";
import ResultAll from "./ResultAll/result-all";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {ThemeContext} from "../../../provider/theme-provider";
import CourseApi from "../../../api/courseApi";
import InstructorApi from "../../../api/instructorApi";
import {CoursesContext} from "../../../provider/courses-provider";
const Search=(props)=>{
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
    const [searchContent,setSearchContent]=useState("");
    const [isSearch,setIsSearch]=useState(false);
    const [isClickSearch,setIsClickSearch]=useState(false);
    const [resultCoursesSearch,setResultCoursesSearch]=useState([]);
    const [resultAuthorsSearch,setResultAuthorsSearch]=useState([]);
    const [instructors,setInstructors]=useState([]);
    const [allCourses,setAllCourses]=useState([]);
    const [topNew,setTopNew]=useState([]);
    const [topSell,setTopSell]=useState([]);
    const [topRate,setTopRate]=useState([]);
    
    const getAllInstructor=async()=>{
        const res=await InstructorApi.getAll();
        setInstructors(res.payload);
        
    }

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
        //get all courses
        if(totalCourse===0)
        {
            const getTotal=async()=>{
                const res=await CourseApi.getTotalNumber();
                setTotalCourse(res.payload);
            }
            getTotal();
        }
        if(totalCourse>0&& allCourses.length<totalCourse)
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
                    allCourses.map((itemDATA,j)=>{
                        if(itemDATA.id===item.id)
                        {
                                    
                            isExisted=true;
                        }
                    })
                    if(isExisted===false)
                    {
                        let temp=allCourses;
                        temp=temp.concat(item);
                        setAllCourses(temp);
                    }
                                
                });
            }
            if(topNew.length>0)
            {
                topNew.map((item,i)=>{
                    let isExisted=false;
                    allCourses.map((itemDATA,j)=>{
                        if(itemDATA.id===item.id)
                        {
                        
                            isExisted=true;
                        }
                    })
                    if(isExisted===false)
                    {
                        let temp=allCourses;
                        temp=temp.concat(item);
                        setAllCourses(temp);
                    }
                    
                });
            }
            if(topRate.length>0)
            {
                topRate.map((item,i)=>{
                    let isExisted=false;
                    allCourses.map((itemDATA,j)=>{
                        if(itemDATA.id===item.id)
                        {
                        
                            isExisted=true;
                        }
                    })
                    if(isExisted===false)
                    {
                        let temp=allCourses;
                        temp=temp.concat(item);
                        setAllCourses(temp);
                    }
                    
                });
            }                        
        }        
        //get all instructor
        if(instructors.length===0)
        {
            getAllInstructor();
        }
        if(resultCoursesSearch.length===0)
        {
            if(isClickSearch)
            {
                listCoursesSearch();

            }
        }
        if(resultAuthorsSearch.length===0 && resultCoursesSearch.length>0)
        {
            if(isClickSearch)
            {
                listAuthorsSearch(resultCoursesSearch);
            }
        }
        if(resultAuthorsSearch.length!==0 && resultCoursesSearch.length!==0)
        {
            setIsClickSearch(false);
        }
        


    })
    const existed=(id,list)=>{
        let result=null;
        list.map((item,i)=>{
            if(item.id===id)
            {
                result= item;
            }

        });
        return result;
    }

    const listCoursesSearch=()=>{
        let result=[];
        allCourses.map((item,i)=>{
            let title=item.title;
            let searchContentFixed=searchContent.toLowerCase();
            title=title.toLowerCase();
            if(title.includes(searchContentFixed))
            {
                result=result.concat(item);
            }
        });
        setResultCoursesSearch(result);

    }
    const listAuthorsSearch=(courses)=>{
        let result=[];
        courses.map((item,i)=>{
            let newInstructor=existed(item.instructorId,instructors);
            if(newInstructor)
            {
                if(!existed(newInstructor.id,result))
                {

                    result=result.concat(newInstructor);
                }
            }

        });

        setResultAuthorsSearch(result);
    }
    const onPressSearch=()=>{
        console.log("Check search content");
        console.log(searchContent);
        setIsSearch(true);
        setIsClickSearch(true);
        setResultAuthorsSearch([]);
        setResultCoursesSearch([]);
        console.log("CHeck set result author search after click search");
        console.log(resultAuthorsSearch);
    };



    return(
        <ScrollView style={{backgroundColor:changeTheme.background,flex:1}} >
            <View style={{flex:1}}>
                <View style={{fontColor:'white',flexDirection:'row',marginTop:35}}>
                    {changeTheme===themes.dark ?
                        <TextInput style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:30,color:'white',marginLeft:10 }}
                                   onChangeText={text=>setSearchContent(text)}
                                   value={searchContent}
                        >
                        </TextInput> :
                        <TextInput style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:30,color:'black',marginLeft:10 }}
                                   onChangeText={text=>setSearchContent(text)}
                                   value={searchContent}
                        >
                        </TextInput>
                    }

                    <TouchableHighlight  onPress={onPressSearch}  >
                        <View style={{
                            alignItems: "center",
                            padding: 10,}}>
                            <Text style={themeStyle.text}>Search</Text>
                        </View>
                    </TouchableHighlight>
                </View>


                {isSearch  ? <SearchTab.Navigator>
                    <SearchTab.Screen name="All"

                    >
                        {()=><ResultAll resultCoursesSearch={resultCoursesSearch}
                                   resultAuthorsSearch={resultAuthorsSearch}
                                        navigation={props.navigation}
                        />}
                    </SearchTab.Screen>
                    <SearchTab.Screen name={navigationName.ListCourses} options={{title:'Course'}}

                    >
                        {()=><ListCourses searchResult={resultCoursesSearch} navigation={props.navigation}/>}

                    </SearchTab.Screen>
                    
                    <SearchTab.Screen name={navigationName.Authors} options={{title:'Author'}}

                    >
                        {()=><ListAuthors searchResult={resultAuthorsSearch} navigation={props.navigation}/>}

                    </SearchTab.Screen>

                </SearchTab.Navigator> : <View></View>}
            </View>
        </ScrollView>
    );
};

export default Search;