import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView , ScrollView, TextInput} from 'react-native';
import ChatRoomInfo from '../components/chatRoomInfo';
import Chatting from '../components/chatting';

// /**
//  * @props carrier       number of carrier
//  */

export default class ChatRoom extends Component{
    static navigationOptions = ({navigation}) =>{
        return{
            title: 'OOO 방장 (O/O)',
            carrierNum : navigation.getParam('carrier', 0),
        };
    };

    render(){
        console.log(carrierNum);
        return(
            <View style={{flex:1}}>
                <ChatRoomInfo />
                <Chatting />
            </View>
        );
    }
}
