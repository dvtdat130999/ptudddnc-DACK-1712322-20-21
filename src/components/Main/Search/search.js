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
import {SearchHistoryContext} from "../../../provider/search-history-provider";
import {LanguageContext} from "../../../provider/language-provider";

const Search=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let {changeLanguage}=useContext(LanguageContext);

    let {searchHistory,setSearchHistory}=useContext(SearchHistoryContext);
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
    const [totalCourse,setTotalCourse]=useState(0);
    const [isEmpty,setIsEmpty]=useState(false);
    const [emptySearchMessage,setEmptySearchMessage]=useState(null);
    const [isHidden,setIsHidden]=useState(false);
    
    const [tabBarBackground,setTabBarBackground]=useState(null);
    const [tabBarLabelColor,setTabBarLabelColor]=useState(null);
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
    
    useEffect(()=>{
        if(tabBarBackground===null)
        {
            if(themeStyle===DarkStyles)
            {
                setTabBarBackground("black");

            }
            if(themeStyle===LightStyles)
            {
                setTabBarBackground("white");

            }
        }
        if(tabBarLabelColor===null)
        {
            if(themeStyle===DarkStyles)
            {
                setTabBarLabelColor("white");

            }
            if(themeStyle===LightStyles)
            {
                setTabBarLabelColor("black");

            }
        }
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
        if(resultCoursesSearch.length===0 && isEmpty===true)
        {
            setIsClickSearch(false);
            setIsEmpty(false);
            setEmptySearchMessage(changeLanguage.EmptySearchMessage);
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
            setEmptySearchMessage(null);
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
        if(result.length!==0)
        {
            setResultCoursesSearch(result);

        }
        else
        {
            setIsEmpty(true);
        }

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
    const isExistedInHistory=(searchKeyWord)=>{
        console.log("Check list history:",searchHistory);
        let result=null;
        searchHistory.map((item,i)=>{
            console.log("Check item:",item);
            console.log("Check keyword:",searchKeyWord);

            if(item===searchKeyWord)
            {
                result=i;
            }
        });
        return result;
    }
    const onPressSearch=()=>{
        console.log("Check history:",searchHistory);
        console.log("Check search content");
        console.log(searchContent);
        let existed=isExistedInHistory(searchContent);
        if(existed===null)
        {
            console.log("Chuan bi them vao history");
            let temp=searchHistory;
            temp=temp.concat(searchContent);
            setSearchHistory(temp);
        }
        else
        {
            //delete search content in index
            searchHistory.splice(existed,1);
            let temp=searchHistory;
            temp=temp.concat(searchContent);
            setSearchHistory(temp);
        }
        setIsSearch(true);
        setIsClickSearch(true);
        setResultAuthorsSearch([]);
        setResultCoursesSearch([]);
        console.log("CHeck set result author search after click search");
        console.log(resultAuthorsSearch);
    };
    const changeIsHidden=()=>{
        setIsHidden(!isHidden);

    }
    const deleteHistorySearch=()=>{
        setSearchHistory([]);
        console.log("Delete history search");
    }

    const renderHistory=()=>{
        
        return searchHistory.reverse().map((item,i)=>{
            if(i<5)
            {
                return <TouchableHighlight key={i} style={{marginTop:10,marginLeft:10}} onPress={()=>setSearchContent(item)}>
                            <Text style={themeStyle.text}>
                                {item}
                            </Text>
                        </TouchableHighlight>
            }
            else
            {
                return <View key={i}></View>
            }
            
        })
       
        
    }


    return(
        <ScrollView style={{backgroundColor:changeTheme.background,flex:1}} >
            <View style={{flex:1}}>
                <View style={{fontColor:'white',flexDirection:'row',justifyContent:'space-between',marginTop:35}}>
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
                            <Text style={themeStyle.text}>{changeLanguage.Search}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.space}></View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>
                    <View style={{marginLeft:10}}>
                        <Text style={themeStyle.text}>{changeLanguage.RecenSearch}</Text>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        marginRight:10
                        }}>
                        {isHidden===true ?
                            <TouchableHighlight onPress={changeIsHidden}>
                                <Text style={{color:'aqua'}}>{changeLanguage.Show}</Text>
                            </TouchableHighlight>
                            :
                            <TouchableHighlight onPress={changeIsHidden}>
                                <Text style={{color:'aqua'}}>{changeLanguage.Hide}</Text>
                            </TouchableHighlight>

                        }
                        <Text>   </Text>
                        <TouchableHighlight onPress={deleteHistorySearch}>
                            <Text style={{color:'aqua'}}>{changeLanguage.Delete}</Text>
                        </TouchableHighlight>    
                    </View>
                                    

                </View>
                {isHidden===false ?
                    <View>
                        {renderHistory()}

                    </View>
                    :
                    <View></View>
                }
                <View style={styles.space}></View>

                {emptySearchMessage!==null?
                    <View>
                        <Text style={themeStyle.textError}>{emptySearchMessage}</Text>
                        <View style={styles.space}></View>
                    </View>
                    :
                    <View></View>
                }
                <View style={styles.space}></View>
            
                {isSearch===true  ? 
                <SearchTab.Navigator 
                    tabBarOptions={{
                        labelStyle: { fontSize: 12,
                                        color: tabBarLabelColor
                        },

                        style: { 
                            backgroundColor: tabBarBackground ,
                        },
                    }}
                >
                    <SearchTab.Screen name="All"

                    >
                        {()=><ResultAll resultCoursesSearch={resultCoursesSearch}
                                   resultAuthorsSearch={resultAuthorsSearch}
                                        navigation={props.navigation}
                        />}
                    </SearchTab.Screen>
                    <SearchTab.Screen name={navigationName.ListCourses} options={{title:changeLanguage.Course}}

                    >
                        {()=><ListCourses searchResult={resultCoursesSearch} navigation={props.navigation}/>}

                    </SearchTab.Screen>
                    
                    <SearchTab.Screen name={navigationName.Authors} options={{title:changeLanguage.Author}}

                    >
                        {()=><ListAuthors searchResult={resultAuthorsSearch} navigation={props.navigation}/>}

                    </SearchTab.Screen>

                </SearchTab.Navigator> : <View></View>}
            </View>
        </ScrollView>
    );
};

export default Search;