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
                {/* TODO: 서버에러? 나서 지금 안들어가짐;; */}
                {/* <ChatRoomInfo /> */}
                <Chatting />
            </View>
        );
    }
}
