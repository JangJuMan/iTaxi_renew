import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import {seatImgs} from '../variable/assets';

export default class NewRoom extends Component{
    render(){
        const seat_img = seatImgs[0];
        return(
            <View style={[styles.container, this.props.style]}>
                <Image
                    source={seat_img} />
                    <Text style={styles.font_style}>새로 모집하기</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        alignItems:'center',
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor:'gray',
        shadowOpacity:0.3,
        elevation: 3,

        padding: vw(2.4),
        paddingRight: 0,
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