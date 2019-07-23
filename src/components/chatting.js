import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Dimensions, KeyboardAvoidingView ,Platform, ScrollView, Button} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class ChatRoom extends Component{
    state={
        text:'',
        sendingMsg:'',
    }

    render(){
        return(
            <View style={{backgroundColor: '#707070', flex:1}}>
                <View style={{backgroundColor:'red', flex:11}}>
                    <ScrollView>
                        <Text style={{fontSize:20}}>{this.state.sendingMsg}</Text>
                    </ScrollView>
                </View>
                <View style={{backgroundColor:'skyblue', flex:1, flexDirection:'row', justifyContent: 'space-between' }}>
                    <View style={{borderWidth:1, flex:8}} behavior="padding">
                        <TextInput
                            style = {{ }}
                            placeholderTextColor = 'black'
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            placeholder = '메시지를 입력해주세요' />
                    </View>
                    
                    <TouchableOpacity style={{borderWidth:1, padding:9, paddingLeft:15, flex:1 }}
                        >
                        <Text style={{color:'blue'}}>Send</Text>
                    </TouchableOpacity>

                </View>
                
            </View>
            
            // <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'flex-end',}} behavior="padding" enabled   keyboardVerticalOffset={100}>
            //     <ScrollView>
            //         <View >
            //             <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //                 <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //                 <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //                 <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //                 <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //                 <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //             <TextInput
            //                 placeholder='first'/>
            //         </View>
            //     </ScrollView>
            // </KeyboardAvoidingView>
                
        );
    }
}

