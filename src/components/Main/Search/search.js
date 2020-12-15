import React, {Component, useState, useEffect, useContext} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const SearchTab = createMaterialTopTabNavigator();
import styles from "../../../globals/styles"
import ListCourses from "../../Courses/ListCourses/list-courses";
import ListAuthors from "../../Authors/ListAuthors/list-authors";
import {navigationName} from "../../../globals/constants";
import ListPaths from "../../Paths/ListPaths/list-paths";
import {courses} from "../../../data/courses";
import {paths} from "../../../data/paths";
import {authors} from "../../../data/authors"
import ResultAll from "./ResultAll/result-all";
import {themes} from "../../../globals/themes";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {ThemeContext} from "../../../provider/theme-provider";
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
    const [resultCoursesSearch,setResultCoursesSearch]=useState(null);
    const [resultAuthorsSearch,setResultAuthorsSearch]=useState(null);
    const [resultPathsSearch,setResultPathsSearch]=useState(null);
    useEffect(()=>{
        if(isClickSearch)
        {
            setResultCoursesSearch(listCoursesSearch());
            setResultAuthorsSearch(listAuthorsSearch(listCoursesSearch()));
            setResultPathsSearch(listPathsSearch(listCoursesSearch()));
            setIsClickSearch(false);
        }
    })
    const existed=(title,list)=>{
        let result=null;
        list.map((item,i)=>{
            if(item.name===title)
            {
                result= item;
            }

        });
        return result;
    }

    const listCoursesSearch=()=>{
        let result=[];
        courses.map((item,i)=>{
            let title=item.title;
            let searchContentFixed=searchContent.toLowerCase();
            title=title.toLowerCase();
            if(title.includes(searchContentFixed))
            {
                result=result.concat(item);
            }
        });
        return result;

    }
   const listPathsSearch=(listCourses)=>{
        let result=[];
        listCourses.map((item,i)=>{
            //check co trong list path data khong
            let newPath=existed(item.path,paths);
            if(newPath)
            {

                if(!existed(newPath.name,result))
                {
                    result=result.concat(newPath);

                }
            }

        });
       return result;
    };
    const listAuthorsSearch=(listCourses)=>{
        let result=[];
        listCourses.map((item,i)=>{
            let newAuthor=existed(item.author,authors);
            if(newAuthor)
            {
                if(!existed(newAuthor.name,result))
                {

                    result=result.concat(newAuthor);
                }
            }

        });
        return result;
    }
    const onPressSearch=()=>{
        setIsSearch(true);
        setIsClickSearch(true);

    };



    return(
        <ScrollView style={{backgroundColor:changeTheme.background,flex:1}} >
            <View style={{flex:1}}>
                <View style={{fontColor:'white',flexDirection:'row',marginTop:10}}>
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
                                   resultPathsSearch={resultPathsSearch}
                                   resultAuthorsSearch={resultAuthorsSearch}
                                        navigation={props.navigation}
                        />}
                    </SearchTab.Screen>
                    <SearchTab.Screen name={navigationName.ListCourses} options={{title:'Course'}}

                    >
                        {()=><ListCourses searchResult={resultCoursesSearch} navigation={props.navigation}/>}

                    </SearchTab.Screen>
                    <SearchTab.Screen name={navigationName.Paths} options={{title:'Path'}}

                    >
                        {()=><ListPaths searchResult={resultPathsSearch} navigation={props.navigation}/>}

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