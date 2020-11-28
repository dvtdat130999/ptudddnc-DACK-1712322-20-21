import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions  } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor:'black'
    },
    label:{
      color:'azure'
    },
    inputLogin:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:5,
        backgroundColor:'azure'
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    logo:{
        width:50,
        height:50,


    },
    space: {
        width: 20, // or whatever size you need
        height: 20,
    },
    textButton:{
      color:'white'
    },
    button: {
        backgroundColor: "dodgerblue",
        borderColor:'blue',
        alignItems: "center",
        padding: 20,

    },
    buttonLight: {
        backgroundColor: "black",
        borderColor:'dodgerblue',
        alignItems: "center",
        borderWidth:1,
        padding: 8,

    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    countText: {
        color: "#FF00FF"
    },
    homeBackground:{
        alignSelf:'stretch',
        fontWeight:'bold',
        marginTop:20,
        backgroundColor:'gray'

    },
    homeContent:{
      color:'white',
      alignSelf:'center',
      fontWeight:'bold',
      fontSize:25

    },
    courseText:{
        color:'white',
        padding:5

    },
    sectionCoursesTitle:{
        alignItems:'center'
        ,marginLeft:30
        ,fontWeight:'bold'
        ,fontSize:20
        ,color:'white'
    },
    course:{
        flexDirection:'column',
        marginLeft:30,
        marginRight:30,
        height:300,
        backgroundColor:'lightslategrey',
    },
    sectionCourseItem:{
        flexDirection:'column',
        marginTop:10,
        marginLeft:30,
        marginRight:30,
        height:300,
        backgroundColor:'lightslategrey',
    },
    sectionCourseItemText:{
        color:'white',
        padding:5

    },
    courseOfHome:{
        alignItems:'center'
        ,marginLeft:30
        ,fontWeight:'bold'
        ,fontSize:20
        ,color:'white'
    },
    imageAuthorHome:{
        width:100,
        height:100,
        borderRadius:50,
    },
    authorHome:{
        flexDirection:'column',
        marginLeft:30,
        marginRight:30,
        height:200,
    },

    courseOfList:{

    },
    imageButtonImageBackground:{
        height:100,
        marginTop:20,
        marginLeft:20,
        marginRight:20,
    },
    imageButtonTouch:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imageButtonText:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
    },
    imageAuthor:{
        width:100,
        height:100,
        borderRadius:50,
    },
    author:{
        flexDirection:'column',
        marginLeft:30,
        marginRight:30,
    },
    authorText:{
        color:'white',
        alignSelf:'center'
    },
    authorBrowse:{
        alignItems:'center'
        ,marginLeft:30
        ,fontWeight:'bold'
        ,fontSize:20
        ,color:'white'
    },
    sectionAuthorItem:{
        marginLeft:30,
        marginRight:30,
    },
    sectionSkillsItem:{
        justifyContent:'center',
        alignItems:'center',
        width:150,
        height:30,
        borderRadius:20,
        backgroundColor:'gray',
        marginTop:10,
        marginLeft:20,
        marginRight:20
    },
    sectionSkillsItemText:{
        color:'white',

    },
    skillBrowse:{
        alignItems:'center'
        ,marginLeft:30
        ,fontWeight:'bold'
        ,fontSize:20
        ,color:'white'
    },
    sectionCategoriesItem:{
        marginTop:10,
        marginLeft:30,
        marginRight:30,
        height:100,
        width:300


    },

    categoriesBrowse:{
        alignItems:'center'
        ,marginLeft:30
        ,fontWeight:'bold'
        ,fontSize:20
        ,color:'white'
    },
    listCoursesItem:{
        flexDirection:'row',
        marginTop:10,
        marginLeft:20,
        borderBottomColor:'white',
        borderBottomWidth:1,
    },
    listAuthorsItem:{
        flexDirection:'row',
        marginTop:10,
        marginLeft:20,
        borderBottomColor:'white',
        borderBottomWidth:1,
    }


});

export default styles;