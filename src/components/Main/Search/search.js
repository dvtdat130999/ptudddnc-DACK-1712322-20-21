import React, { Component,useState,useEffect } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const SearchTab = createMaterialTopTabNavigator();
import styles from "../../../globals/styles"
import ListCourses from "../../Courses/ListCourses/list-courses";
import ListAuthors from "../../Authors/ListAuthors/list-authors";
import {navigationName} from "../../../globals/constants";

const Search=(props)=>{
    const [searchContent,setSearchContent]=useState("");
    const [isSearch,setIsSearch]=useState(false);
    const onPressSearch=()=>{
        setIsSearch(true);
        console.log(isSearch);
    };
    const resultAll=()=>{
        return(
            <View>
                <View>
                    <ListCourses navigation={props.navigation} title="Courses"/>
                    <ListCourses navigation={props.navigation} title="Paths"/>
                    <ListAuthors navigation={props.navigation} title="Authors"/>

                </View>
            </View>
        );
    }
  /*  if(isSearch)
    {
        return(
            <View style={{fontColor:'white',flexDirection:'row',marginTop:10}}>
                <TextInput style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:30,color:'white',marginLeft:10 }}
                           onChangeText={text=>setSearchContent(text)}
                           value={searchContent}
                >
                </TextInput>
                <TouchableHighlight  onPress={onPressSearch}  >
                    <View style={{
                        alignItems: "center",
                        padding: 10,}}>
                        <Text style={{color:'white'}}>Search</Text>
                    </View>
                </TouchableHighlight>
                <SearchTab.Navigator>
                    <SearchTab.Screen name="All" component={resultAll} />
                    <SearchTab.Screen name={navigationName.ListCourses} component={ListCourses} options={{title:'Courses'}} />
                    <SearchTab.Screen name={navigationName.ListCourses} component={ListCourses} options={{title:'Paths'}} />
                    <SearchTab.Screen name={navigationName.Authors} component={ListAuthors} options={{title:'Authors'}} />

                </SearchTab.Navigator>
                <View/>
        );
    }*/

    return(
        <ScrollView >
            <View style={{fontColor:'white',flexDirection:'row',marginTop:10}}>
                <TextInput style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:30,color:'white',marginLeft:10 }}
                           onChangeText={text=>setSearchContent(text)}
                           value={searchContent}
                >
                </TextInput>
                <TouchableHighlight  onPress={onPressSearch}  >
                    <View style={{
                        alignItems: "center",
                        padding: 10,}}>
                        <Text style={{color:'white'}}>Search</Text>
                    </View>
                </TouchableHighlight>
            </View>

            {isSearch ? <SearchTab.Navigator>
                <SearchTab.Screen name="All" component={resultAll} />
                <SearchTab.Screen name={navigationName.ListCourses} component={ListCourses} options={{title:'Courses'}} />
                <SearchTab.Screen name={navigationName.Paths} component={ListCourses} options={{title:'Paths'}} />
                <SearchTab.Screen name={navigationName.Authors} component={ListAuthors} options={{title:'Authors'}} />

            </SearchTab.Navigator> : <View></View>}
        </ScrollView>
    );
};

export default Search;