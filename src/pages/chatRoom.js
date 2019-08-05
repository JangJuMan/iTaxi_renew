import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView , ScrollView, TextInput} from 'react-native';
import ChatRoomInfo from '../components/chatRoomInfo';
import Chatting from '../components/chatting';

export default class ChatRoom extends Component{
    static navigationOptions = ({navigation}) =>{
        return{
            title: 'OOO 방장 (O/O)'
        }
    };

    render(){
        return(
            <View style={{flex:1}}>
                {/* <ChatRoomInfo /> */}
                <Chatting />
            </View>
        );
    }
}
