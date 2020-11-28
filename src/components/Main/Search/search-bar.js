import React, { Component,useState,useEffect } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList ,Button} from 'react-native';
import styles from "../../styles";

const SearchBar=(props)=>{
    const [searchContent,setSearchContent]=useState("");

    return(
      <View style={{fontColor:'white',flexDirection:'row',marginTop:10}}>
          <TextInput style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:30,color:'white',marginLeft:10 }}
                     onChangeText={text=>setSearchContent(text)}
                     value={searchContent}
          >
          </TextInput>
          <TouchableHighlight  onPress={()=>{
              console.log(searchContent)
          }}  >
              <View style={{
                  alignItems: "center",
                  padding: 10,}}>
                  <Text style={{color:'white'}}>Search</Text>
              </View>
          </TouchableHighlight>
      </View>
    );
}

export default SearchBar;
