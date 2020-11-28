import {Image, Text, View} from "react-native";
import AuthorImage from "../../../../../assets/author.jpg"
import styles from "../../../../globals/styles"
import React from "react";
import AuthorReadInfo from "../../../Common/author-read-info";


const SectionAuthorsItem=(props)=>{
    return (
        <View style={styles.sectionAuthorItem}>
            <Image source={AuthorImage} style={styles.imageAuthor}/>
            <AuthorReadInfo name={props.name}/>

        </View>
    );
}

export default SectionAuthorsItem;