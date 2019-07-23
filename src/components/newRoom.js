import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import {plusImg} from '../variable/assets';
import Icon from 'react-native-vector-icons/Ionicons';


export default class NewRoom extends Component{
    render(){
        const plus_img = plusImg;
        return(
            <View style={[styles.container]}>
                <Icon name="ios-add" size={30} color="#4dabf7"/>

                    <Text style={styles.font_style}>새로 모집하기</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor:'gray',
        shadowOpacity:0.3,
        elevation: 3,
        padding: vw(2.4),
        paddingBottom: vw(3.6),
        borderRadius: 5,
        padding:30,
    },
    font_style:{
        color: '#777',
        marginTop: 10,
        fontSize: 16,
    }
});