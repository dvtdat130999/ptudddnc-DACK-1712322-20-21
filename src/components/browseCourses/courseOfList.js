import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions  } from 'react-native';
import { Card,Form,Row,Col } from 'react-bootstrap';

import styles from "../styles";
import OnlineCourse from "../image/online-course.jpg";

const CourseOfList=(props)=>{
    return(
        <View style={{flexDirection:'row',marginLeft:30,marginTop:30}}>
            <Image source={OnlineCourse} style={{width:100,height:100}}/>
            <View style={{flexDirection:'column',marginLeft:20,marginTop:10}}>
                <Text style={styles.courseText}>{props.title}</Text>
                <Text style={styles.courseText}>{props.author}</Text>
                <Text style={styles.courseText}>{props.level}</Text>
                <Text style={styles.courseText}>{props.createdDate}</Text>

            </View>
        </View>
       /* <Form>
            <Form.Group as={Row} >
                <Form.Label column sm="4">
                    <Image source={OnlineCourse} style={{width:60,height:60}}/>
                </Form.Label>
                <Col sm="8">
                    <Form.Control plaintext readOnly  >
                        <Form.Group as={Row}>
                            <Form.Label >
                                Title
                            </Form.Label>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label >
                                Level
                            </Form.Label>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label >
                                Created Date
                            </Form.Label>
                        </Form.Group>
                    </Form.Control>

                </Col>
            </Form.Group>


        </Form>*/
    );
}

export default CourseOfList;