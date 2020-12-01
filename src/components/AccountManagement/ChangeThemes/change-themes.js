import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';
import styles from "../../../globals/styles";


const ChangeThemes=(props)=>{
    const system=(props)=>{
        console.log("Theme system");
    }
    const light=(props)=>{
        console.log("Theme light");
    }
    const dark=(props)=>{
        console.log("Theme dark");
    }
    return(
        <View style={{marginLeft:10,marginRight:10}}>
            <TouchableOpacity
                style={{borderBottomColor: 'gray',
                    borderBottomWidth: 1,}}
                onPress={system}
            >
                <View>
                    <Text style={{color:'white',fontSize:20,marginTop:10,marginBottom:10}}>System</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={{borderBottomColor: 'gray',
                    borderBottomWidth: 1,}}
                onPress={light}
            >
                <View>
                    <Text style={{color:'white',fontSize:20,marginTop:10,marginBottom:10}}>Light</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{borderBottomColor: 'gray',
                    borderBottomWidth: 1,}}
                onPress={dark}
            >
                <View>
                    <Text style={{color:'white',fontSize:20,marginTop:10,marginBottom:10}}>Dark</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default ChangeThemes;