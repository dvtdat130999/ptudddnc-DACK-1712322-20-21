import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions  } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
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
    logo:{
        width:'20%',
        height:'20%',

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
    }
});

export default styles;