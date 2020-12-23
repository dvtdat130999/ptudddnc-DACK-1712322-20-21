import {Text, View} from "react-native";
import styles from "../../globals/styles";
import React, {useContext} from "react";
import {ThemeContext} from "../../provider/theme-provider";
import {themes} from "../../globals/themes";
import DarkStyles from "../../globals/dark-style";
import LightStyles from "../../globals/light-style";


const AuthorReadInfo=(props)=>{
    let {changeTheme}=useContext(ThemeContext);
    let themeStyle;
    if(changeTheme===themes.dark)
    {

        themeStyle=DarkStyles;
    }
    else
    {
        themeStyle=LightStyles;
    }
    return(
        <View style={themeStyle.author}>
            <Text style={themeStyle.authorText}>{props.item["user.name"]}</Text>
            <Text style={themeStyle.authorText}>{props.item["user.phone"]}</Text>

        </View>
    );
}

export default AuthorReadInfo;