import 'react-native-gesture-handler';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import Login from "./src/components/Authentication/login"
import Register from "./src/components/Authentication/register";
import First from "./src/components/Authentication/first";
import ListCourses from "./src/components/Courses/ListCourses/list-courses";
import styles from "./src/globals/styles";

import Home from "./src/components/Main/Home/home";
import Browse from "./src/components/Main/Browse/browse";
import ListAuthors from "./src/components/Authors/ListAuthors/list-authors";

import VideoPlayer from "./src/components/CourseStudy/VideoPlayer/video-player";
import CourseStudy from "./src/components/CourseStudy/course-study";
import CourseStudyService from "./src/components/CourseStudy/CourseStudyService/course-study-service";
import Lesson from "./src/components/CourseStudy/ListOfLessons/Lesson/lesson";
import ListLessons from "./src/components/CourseStudy/ListOfLessons/list-lessons";
import Account from "./src/components/AccountManagement/Account/account";
import Setting from "./src/components/AccountManagement/Setting/setting";
import ChangeThemes from "./src/components/AccountManagement/ChangeThemes/change-themes";
import {navigationName} from "./src/globals/constants"
import ForgetPassword from "./src/components/Authentication/forget-password";
import Download from "./src/components/Main/Download/list-download";

const MainStack = createStackNavigator();
const AfterLoginStack = createStackNavigator();
const DownloadStack=createStackNavigator();
const FirstStack = createStackNavigator();

const CourseStack = createStackNavigator();
const BottomTab=createBottomTabNavigator();
const HomeStack=createStackNavigator();
const BrowseStack=createStackNavigator();

const BrowseNavigation=()=>{
    return(
        <BrowseStack.Navigator>
            <BrowseStack.Screen name={navigationName.Browse} component={Browse} />
            <BrowseStack.Screen name={navigationName.CourseStudy} component={CourseStudy} />
            <BrowseStack.Screen name={navigationName.ListCourses} component={ListCourses} />

        </BrowseStack.Navigator>
    );
}
const HomeNavigation=()=>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name={navigationName.Home} component={Home} />

            <HomeStack.Screen name={navigationName.CourseStudy} component={CourseStudy} />

        </HomeStack.Navigator>
    );
}
const ListDownloadStack=()=>{
    return(
        <DownloadStack.Navigator>


            <DownloadStack.Screen name={navigationName.ListCourses} component={Download} options={{title:'Downloads'}}/>
            <DownloadStack.Screen name={navigationName.CourseStudy} component={CourseStudy} />

        </DownloadStack.Navigator>
    );
}
const ListCoursesStack=()=>{
    return(
        <CourseStack.Navigator>


            <CourseStack.Screen name={navigationName.ListCourses} component={ListCourses} options={{title:'List Courses'}}/>
            <CourseStack.Screen name={navigationName.CourseStudy} component={CourseStudy} />

        </CourseStack.Navigator>

    );
}
const AuthenticationStack=()=>{
    return(
        <FirstStack.Navigator mode="modal">
            <FirstStack.Screen name={navigationName.First} component={First}  options={{ headerShown: false }}/>
            <FirstStack.Screen name={navigationName.Login} component={Login}  options={{ headerShown: false }}/>
            <FirstStack.Screen name={navigationName.Register} component={Register}  options={{ headerShown: false }}/>
            <FirstStack.Screen name={navigationName.ForgetPassword} component={ForgetPassword}  options={{ headerShown: false }}/>

        </FirstStack.Navigator>
    );
}
const AfterLogin=()=>{
    return(
        <BottomTab.Navigator  >

            <BottomTab.Screen name={navigationName.Home} component={HomeNavigation}/>
            <BottomTab.Screen name={navigationName.Browse} component={BrowseNavigation}/>
            <BottomTab.Screen name={navigationName.ListDownload} component={ListDownloadStack} />
            <BottomTab.Screen name={navigationName.ListCourses} component={ListCoursesStack}/>

        </BottomTab.Navigator>
    );
}
const MainStackApp=()=>{
    return(
        <MainStack.Navigator>
            <MainStack.Screen name={navigationName.Authentication} component={AuthenticationStack} options={{ headerShown: false }}/>
            <MainStack.Screen name={navigationName.AfterLogin} component={AfterLogin} options={{ headerShown: false }}/>

        </MainStack.Navigator>
    );
}
export default function App() {
  return (
      <NavigationContainer >
          <MainStackApp/>

      </NavigationContainer>

      /*<View style={styles.container}>
            <Download/>

      </View>*/
  );
}

