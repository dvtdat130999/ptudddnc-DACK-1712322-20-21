import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput,TouchableHighlight,Dimensions  } from 'react-native';
import { Card,Form,Row } from 'react-bootstrap';

import styles from "../styles";
import OnlineCourse from "../image/online-course.jpg";
const Course=(props)=>{
    return (
        /*<Card style={{ width: '5rem' }}>
            <Card.Img variant="top" src={OnlineCourse} />
            <Card.Body>
                <Card.Title>Online Course</Card.Title>
                <Card.Text>
                    <Form>
                        <Form.Group as={Row} >
                            <Form.Label >
                                Author
                            </Form.Label>

                        </Form.Group>
                        <Form.Group as={Row} >
                            <Form.Label >
                                Level
                            </Form.Label>

                        </Form.Group>
                        <Form.Group as={Row} >
                            <Form.Label >
                                Created Date
                            </Form.Label>

                        </Form.Group>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>*/
    <View style={styles.course}>
        <Image source={OnlineCourse} style={{width:200,height:200}}/>
        <Text style={styles.courseText}>{props.title}</Text>
        <Text style={styles.courseText}>{props.author}</Text>
        <Text style={styles.courseText}>{props.level}</Text>
        <Text style={styles.courseText}>{props.createdDate}</Text>
    </View>
    );
}

export default Course;