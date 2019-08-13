import React, { Component } from 'react';
import { View, } from 'react-native';
import ChatRoomInfo from '../components/chatRoomInfo';
import Chatting from '../components/chatting';


export default class ChatRoom extends Component{
    static navigationOptions = ({navigation}) =>{
        return{
            title: 'OOO 방장 (O/O)',
        };
    };

    render(){
        return(
            <View style={{flex:1}}>
                <ChatRoomInfo navigation={this.props.navigation} />
                <Chatting />
            </View>
        );
    }
}
