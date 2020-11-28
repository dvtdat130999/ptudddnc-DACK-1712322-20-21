import React, { Component } from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions ,SectionList,FlatList,TouchableOpacity } from 'react-native';

import styles from "../../../globals/styles"
import UserImage from "../../../../assets/user.jpg"
import SectionSkillsItem from "../../Main/Browse/SectionSkillsItem/section-skills-item";

const Account=(props)=>{
    const interested=['Java','React','C','MongoDB']
    const renderItem=()=>{
        return interested.map((item,i)=>{
            return <SectionSkillsItem name={item} key={i}/>
        })
    }
    return(
      <View >
            <View styles={{justifyContent:'center',alignItems:'center',flexDirection:'column',flex:1}}>
                <Image source={UserImage} style={{height:200,width:200}}/>
                <Text style={{color:'white'}}>Dat Doan</Text>
            </View>
          <View style={styles.space}/>
          <View>
              <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Interested</Text>
          </View>
          <View style={{marginTop:20}}>
              <Text style={styles.skillBrowse}>{props.title}</Text>
              <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
                  {renderItem()}
              </ScrollView>
          </View>
          <View style={styles.space}/>

          <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Activity insights(last 30 days)</Text>
          <Text style={{color:'white',fontSize:20}}>TOTAL ACTIVE DAYS</Text>
          <Text >
              <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>4</Text>
              <Text style={{color:'white'}}>  1 day streak</Text>

          </Text>
          <View style={styles.space}/>

          <Text style={{color:'white',fontSize:20}}>MOST ACTIVE OF DAY</Text>
          <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>21:00</Text>
          <View style={styles.space}/>

          <Text style={{color:'white',fontSize:20}}>MOST VIEWED SUBJECT</Text>
          <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Managerial Skills</Text>

      </View>
    );
}

export default Account;