import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Login from "./src/components/Authentication/login"
import Register from "./src/components/Authentication/register";
import First from "./src/components/Authentication/first";
import ListCourses from "./src/components/Courses/ListCourses/list-courses";
import SearchBar from "./src/components/Main/Search/search-bar";
import styles from "./src/components/styles";

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
export default function App() {
  return (
    <View style={styles.container}>

        <ChangeThemes/>
        <StatusBar style="auto" />
    </View>
  );
}

