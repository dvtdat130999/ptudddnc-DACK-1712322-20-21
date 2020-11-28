import {Text, View} from "react-native";
import styles from "../../globals/styles";
import React from "react";


const AuthorReadInfo=(props)=>{
    return(
        <View style={styles.author}>
            <Text style={styles.authorText}>{props.name}</Text>
        </View>
    );
}

export default AuthorReadInfo;