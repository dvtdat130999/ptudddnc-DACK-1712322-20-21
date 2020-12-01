import {Image, Text, View,TouchableOpacity} from "react-native";
import AuthorImage from "../../../../../assets/author.jpg"
import styles from "../../../../globals/styles"
import React from "react";
import AuthorReadInfo from "../../../Common/author-read-info";
import {navigationName} from "../../../../globals/constants";


const SectionAuthorsItem=(props)=>{
    const onPress=()=>{
        props.navigation.navigate(navigationName.ListCourses);
    }
    return (
        <TouchableOpacity style={styles.sectionAuthorItem} onPress={onPress}>
            <Image source={AuthorImage} style={styles.imageAuthor}/>
            <AuthorReadInfo name={props.item.name}/>

        </TouchableOpacity>
    );
}

export default SectionAuthorsItem;