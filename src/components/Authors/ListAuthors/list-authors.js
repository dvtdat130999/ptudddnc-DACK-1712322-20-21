import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../globals/styles";
import ListAuthorsItem from "../ListAuthorsItem/list-authors-item";
const ListAuthors=(props)=>{
    const DATA = [
        {
            id: '1',
            name:'Dat'
        },
        {
            id: '2',
            name:'Doan'
        },
        {
            id: '3',
            name:'Dong'
        },
        {
            id: '4',
            name:'Hay'
        },
        {
            id: '5',
            name:'Tien'
        },
        {
            id: '6',
            name:'Nhan'
        },



    ];

    const renderItem=()=>{
        return DATA.map((item,i)=>{
            return <ListAuthorsItem name={item.name} key={item.id}/>
        })
    };
    return(
        <View style={{marginTop:30}}>
            <Text style={styles.sectionCoursesTitle}>{props.title}</Text>
            {renderItem()}

        </View>
    );

}

export default ListAuthors;