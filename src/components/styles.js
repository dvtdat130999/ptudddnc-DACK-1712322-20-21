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
        color:'white'
    },
    course:{
        flexDirection:'column',
        marginLeft:30,
        marginRight:30,
        height:300,

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
    authorText:{
        color:'white',
        alignSelf:'center'
    },
    courseOfList:{

    }
});

export default styles;