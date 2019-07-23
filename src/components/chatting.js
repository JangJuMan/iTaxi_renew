import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableHighlight, Dimensions, KeyboardAvoidingView ,Platform, ScrollView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class ChatRoom extends Component{
    state={
        inputText:'',
    }

    render(){
        return(
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'flex-end',}} behavior="padding" enabled   keyboardVerticalOffset={100}>
                <ScrollView>
                    <View >
                        <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                            <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                            <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                            <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                            <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                            <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                        <TextInput
                            placeholder='first'/>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
                
        );
    }
}

