import React, {Component, useContext,useState,useEffect} from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,
    TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity,ActivityIndicator } from 'react-native';

import styles from "../../../globals/styles"
import {ThemeContext} from "../../../provider/theme-provider";
import DarkStyles from "../../../globals/dark-style";
import LightStyles from "../../../globals/light-style";
import {themes} from "../../../globals/themes";
import UserImage from "../../../../assets/user.jpg"
import SectionSkillsItem from "../../Main/Browse/SectionSkillsItem/section-skills-item";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import UserApi from "../../../api/userApi";
import CategoryApi from "../../../api/categoryApi";
const Account=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let themeStyle;
    const {authentication}=useContext(AuthenticationContext);
    const [user,setUser]=useState(null);
    const [favoriteCategories,setFavoritesCategories]=useState([]);
    const [category,setCategory]=useState(null);
    const [isLoading,setIsLoading]=useState(true);

    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
        
    }
    else
    {
        themeStyle=LightStyles;
    }
    console.log("Check background");
    console.log(changeTheme);
    let navigation=props.route.params.navigation;
    
    const renderFavorite=()=>{
        if(favoriteCategories.length>0)
        {
            return favoriteCategories.map((item,i)=>{
                return <SectionSkillsItem item={item} key={i} navigation={navigation}/>
            })
        }
        else{
            return <View></View>
        }
        
    }
    
    const getUser=async()=>{
        const res=await UserApi.getUser(authentication);
        
        setUser(res.payload);
        console.log("Check user account:",res.payload);
        setIsLoading(false);
    }
    const getCategory=async(id)=>{
        const response=await CategoryApi.get(id);
        console.log("Check category payload");
        console.log(response.payload);
        setCategory(response.payload);
    }
    const updateProfile=()=>{
        console.log("Update profile")
    }
    useEffect(()=>{
        if(user===null)
        {
            
            getUser();
            
        }
        if(user && user.favoriteCategories.length>0 && favoriteCategories.length===0)
        {
            for(let i=0;i<user.favoriteCategories.length;i++)
            {
                getCategory(user.favoriteCategories[i]);
                let categoryTemp=favoriteCategories;
                categoryTemp=categoryTemp.concat(category);
                setFavoritesCategories(categoryTemp);
            }
        }
        
      
     });
    return(
        <ScrollView style={{flex:1,backgroundColor:changeTheme.background}}>
            { isLoading && <ActivityIndicator size="large" color="red"/> }
            
            <View  style={{marginLeft:10,marginTop:10}}>

                <View styles={{justifyContent:'center',alignItems:'center',flexDirection:'column',flex:1}}>
                    {user && user.avatar ?
                        <Image source={{uri:user.avatar}} style={{height:200,width:200}}/>
                        :
                        <Image source={UserImage} style={{height:200,width:200}}/>

                    }
                    {user && user.email ? 
                        <Text style={themeStyle.text}>{`Email: ${user.email}`}</Text>
                        :
                        <View></View>                   
                    }
                    {user && user.name ? 
                        <Text style={themeStyle.text}>{`Name: ${user.name}`}</Text>
                        :
                        <View></View>                   
                    }
                    
                </View>
                <View style={styles.space}/>
                <View>
                    <Text style={themeStyle.textMedium}>Interested</Text>
                </View>
                <View style={{marginTop:20}}>
                    <Text style={styles.skillBrowse}>{props.title}</Text>
                    <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                        {renderFavorite()}
                    </ScrollView>
                </View>
                
        
            </View>
            <TouchableHighlight onPress={updateProfile}>
                <View style={themeStyle.button}>
                    <Text style={themeStyle.textButton}>Update</Text>
                </View>
            </TouchableHighlight>
        </ScrollView>
    );
   
}

export default Account;