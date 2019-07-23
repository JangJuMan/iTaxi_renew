import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ChatRoom extends Component{

    render(){
        return(
            <View style={{justifyContent:'center'}}>
                <View style={{ }}>
                    <Text style={{borderWidth:1, }}>[this is chat room infomation]</Text>
                </View>
            </View>
            
        );
    }
}
