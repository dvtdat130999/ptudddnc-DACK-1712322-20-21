import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions  } from 'react-native';
const DarkStyles = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight: "bold",
        color:'azure'
    },
    titleSmall:{
        fontSize:20,
        fontWeight: "bold",
        color:'azure'
    },
    related:{
        height:40,
        borderRadius:5,
        backgroundColor:'gray',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    label:{
        color:'azure'
    },
    text:{
        color:'white',
    },
    textSmall:{
        color:'white',
        fontSize:10
    },
    textBold:{
        color:'white',
        fontWeight:'bold'
    },
    textError:{
        color:'red',
        fontWeight: "bold",
        fontSize:18,

    },
    textSuccess:{
        color:'green',
        fontWeight: "bold",
        fontSize:18,

    },
    textMedium:{
        color:'white',
        fontSize:20,
    },
    textButton:{
        color:'white',
        fontSize:20,
    },
    textLightButton:{
        color:'white',
        fontSize:15,
    },
    sectionTitle:{
        alignItems:'center'
        ,marginLeft:30
        ,fontWeight:'bold'
        ,fontSize:20
        ,color:'white'
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
    sectionBackground:{
        alignSelf:'stretch',
        fontWeight:'bold',
        marginTop:20,
        backgroundColor:'gray'

    },
    sectionContent:{
        color:'white',
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:25
    },
    sectionText:{
        color:'white',
        padding:5

    },
    sectionCourseItem:{
        flexDirection:'column',
        marginTop:10,
        marginLeft:30,
        marginRight:30,
        width:300,
        backgroundColor:'lightslategrey',
    },
    sectionCourseItemText:{
        color:'white',
        padding:5,
    },
    author:{
        flexDirection:'column',
    },
    authorText:{
        color:'white',
        alignSelf:'center'
    },
    lessonItem:{
        backgroundColor:'gray',
        justifyContent:'center',
        alignItems:'center',
        width:70,
        marginLeft:5,
        marginRight:5,
        height:70
    }
});

export default DarkStyles;