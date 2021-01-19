import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions  } from 'react-native';
const LightStyles = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight: "bold",
        color:'black'
    },
    titleSmall:{
        fontSize:20,
        fontWeight: "bold",
        color:'black'
    },
    related:{
        height:40,
        borderRadius:5,
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    label:{
        color:'black'
    },
    text:{
        color:'black',
    },
    textSmall:{
        color:'black',
        fontSize:10
    },
    textBold:{
        color:'black',
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
        color:'black',
        fontSize:20,
    },
    textButton:{
        color:'black',
        fontSize:20,
    },
    textLightButton:{
        color:'black',
        fontSize:15,
    },
    sectionTitle:{
        alignItems:'center'
        ,marginLeft:30
        ,fontWeight:'bold'
        ,fontSize:20
        ,color:'black'
    },
    button: {
        backgroundColor: "dodgerblue",
        borderColor:'blue',
        alignItems: "center",
        padding: 20,

    },
    buttonLight: {
        backgroundColor: "azure",
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
        color:'black',
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:25
    },
    sectionText:{
        color:'black',
        padding:5

    },
    sectionCourseItem:{
        flexDirection:'column',
        marginTop:10,
        marginLeft:30,
        marginRight:30,
        width:300,
        backgroundColor:'white',
    },
    sectionCourseItemText:{
        color:'black',
        padding:5,
    },
    author:{
        flexDirection:'column',
        marginLeft:30,
        marginRight:30,
    },
    authorText:{
        color:'black',
        alignSelf:'center'
    },
    lessonItem:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        width:70,
        marginLeft:5,
        marginRight:5,
        height:70,
        borderWidth:1,
        borderColor:'black'
    }
});

export default LightStyles;