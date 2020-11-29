import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList } from 'react-native';

import styles from "../../../../globals/styles";
import SectionAuthorsItem from "../SectionAuthorsItem/section-authors-item";

const SectionAuthors=(props)=>{
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
            return <SectionAuthorsItem item={item} key={item.id} navigation={props.navigation}/>
        })
    }
    return(
        <View style={{marginTop:60}}>
            <Text style={styles.authorBrowse}>{props.title}</Text>
            <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                {renderItem()}
            </ScrollView>
        </View>
    );
}

export default SectionAuthors;
