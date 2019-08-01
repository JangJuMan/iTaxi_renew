import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView , ScrollView, TextInput} from 'react-native';
import ChatRoomInfo from '../components/chatRoomInfo';
import Chatting from '../components/chatting';
import { KeyboardAwareScrollView, } from 'react-native-keyboard-aware-scroll-view';

// flex 있는 버전
export default class ChatRoom extends Component{
    static navigationOptions = ({navigation}) =>{
        return{
            title: 'OOO 방장 (O/O)'
        }
    };

    render(){
        return(
            <View style={{flex:1}}>
                <ChatRoomInfo />
                {/* <KeyboardAvoidingView style={{ }} behavior='position' contentContainerStyle={{}} keyboardVerticalOffset='80'> */}
                    <Chatting style={{}}/>
                {/* </KeyboardAvoidingView> */}
            </View>
            // <View style={{flex:1 }}>

            //     <View style={{flex:3}}>
            //         <ChatRoomInfo style={{}}/>    
            //     </View> 

                // <KeyboardAvoidingView style={{ flex:6.5 }} behavior='position' contentContainerStyle={{flex:1}} keyboardVerticalOffset='80'>
                //     <Chatting style={{flex:1}}/>
                // </KeyboardAvoidingView>

                
            // </View>
        );
    }
}
