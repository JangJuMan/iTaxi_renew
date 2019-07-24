import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Dimensions, KeyboardAvoidingView ,Platform, ScrollView, Button} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/Ionicons';

export default class ChatRoom extends Component{
    state={
        text:'',
        sendingMsg:'',
    }

    render(){
        return(
            //TODO: text input 입력시 화면 가리는 문제 해결
            <View style={styles.container}>
                <View style={{backgroundColor:'#EEEEEE', flex:10,}}>
                    <ScrollView style={styles.chatting_scroll}>
                        <View style={styles.new_member_bar}>  
                            <Text style={styles.new_member_text}>장주만 (님)이 입장하셨습니다.</Text>
                        </View>
                        
                        <View style={styles.i_say}>
                            <View style={styles.flex_row}>
                                <Icon style={{}} name="ios-ribbon" size={20} />
                                <Text style={styles.myname_text}>장주만</Text> 
                            </View>
                            <View style={styles.flex_row}>
                                <Text style={styles.mytime}>오후 3:17</Text>
                                <Text style={styles.i_say_text}>{this.state.sendingMsg}</Text>
                            </View>
                        </View>

                        <View style={styles.new_member_bar}>  
                            <Text style={styles.new_member_text}>팀원1 (님)이 입장하셨습니다.</Text>
                        </View>

                        <View style={styles.they_say}>
                            <Text style={styles.their_name_text}>팀원1</Text>
                            <View style={styles.flex_row}>
                                <Text style={styles.they_say_text}>{this.state.sendingMsg}</Text>
                                <Text style={styles.they_time}>오후 3:17</Text>
                            </View>
                        </View>

                        <View style={styles.i_say}>
                            <View style={styles.flex_row}>
                                <Icon style={{}} name="ios-ribbon" size={20} />
                                <Text style={styles.myname_text}>장주만</Text> 
                            </View>
                            <View style={styles.flex_row}>
                                <Text style={styles.mytime}>오후 3:17</Text>
                                <Text style={styles.i_say_text}>{this.state.sendingMsg}</Text>
                            </View>
                        </View>


                        <View style={styles.they_say}>
                            <Text style={styles.their_name_text}>팀원1</Text>
                            <View style={styles.flex_row}>
                                <Text style={styles.they_say_text}>{this.state.sendingMsg}</Text>
                                <Text style={styles.they_time}>오후 3:17</Text>
                            </View>
                        </View>

                        <View style={styles.i_say}>
                            <View style={styles.flex_row}>
                                <Icon style={{}} name="ios-ribbon" size={20} />
                                <Text style={styles.myname_text}>장주만</Text> 
                            </View>
                            <View style={styles.flex_row}>
                                <Text style={styles.mytime}>오후 3:17</Text>
                                <Text style={styles.i_say_text}>{this.state.sendingMsg}</Text>
                            </View>
                        </View>

                        <View style={styles.they_say}>
                            <Text style={styles.their_name_text}>팀원1</Text>
                            <View style={styles.flex_row}>
                                <Text style={styles.they_say_text}>{this.state.sendingMsg}</Text>
                                <Text style={styles.they_time}>오후 3:17</Text>
                            </View>
                        </View>

                        <View style={styles.i_say}>
                            <View style={styles.flex_row}>
                                <Icon style={{}} name="ios-ribbon" size={20} />
                                <Text style={styles.myname_text}>장주만</Text> 
                            </View>
                            <View style={styles.flex_row}>
                                <Text style={styles.mytime}>오후 3:17</Text>
                                <Text style={styles.i_say_text}>{this.state.sendingMsg}</Text>
                            </View>
                        </View>


                        <View style={styles.they_say}>
                            <Text style={styles.their_name_text}>팀원1</Text>
                            <View style={styles.flex_row}>
                                <Text style={styles.they_say_text}>{this.state.sendingMsg}</Text>
                                <Text style={styles.they_time}>오후 3:17</Text>
                            </View>
                        </View>

                        <View style={styles.i_say}>
                            <View style={styles.flex_row}>
                                <Icon style={{}} name="ios-ribbon" size={20} />
                                <Text style={styles.myname_text}>장주만</Text> 
                            </View>
                            <View style={styles.flex_row}>
                                <Text style={styles.mytime}>오후 3:17</Text>
                                <Text style={styles.i_say_text}>{this.state.sendingMsg}</Text>
                            </View>
                        </View>

                        <View style={styles.new_member_bar}>  
                            <Text style={styles.new_member_text}>팀원2 (님)이 입장하셨습니다.</Text>
                        </View>

                        <View style={styles.they_say}>
                            <Text style={styles.their_name_text}>팀원1</Text>
                            <View style={styles.flex_row}>
                                <Text style={styles.they_say_text}>{this.state.sendingMsg}</Text>
                                <Text style={styles.they_time}>오후 3:17</Text>
                            </View>
                        </View>

                        <View style={styles.i_say}>
                            <View style={styles.flex_row}>
                                <Icon style={{}} name="ios-ribbon" size={20} />
                                <Text style={styles.myname_text}>장주만</Text> 
                            </View>
                            <View style={styles.flex_row}>
                                <Text style={styles.mytime}>오후 3:17</Text>
                                <Text style={styles.i_say_text}>{this.state.sendingMsg}</Text>
                            </View>
                        </View>

                        <View style={styles.they_say}>
                            <Text style={styles.their_name_text}>팀원1</Text>
                            <View style={styles.flex_row}>
                                <Text style={styles.they_say_text}>{this.state.sendingMsg}</Text>
                                <Text style={styles.they_time}>오후 3:17</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.message_container}>
                    <View style={styles.input_text} behavior="padding">
                        <TextInput
                            style = {styles.input_text_line}
                            placeholderTextColor = 'gray'
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            placeholder = '메시지를 입력해주세요' />
                    </View>
                    <TouchableOpacity style={styles.send_btn }
                        onPress = {() => {
                            this.setState({sendingMsg:this.state.text});
                            this.setState({text:''});
                            console.log(this.state.sendingMsg);
                        }}
                        >
                        <Icon style={ styles.send_icon} name="ios-paper-plane" size={27} color="skyblue"/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles=StyleSheet.create({
    container:{
        backgroundColor: '#EEEEEE', 
        flex:1
    },
    chatting_container:{
        backgroundColor:'#EEEEEE', 
        flex:10,
    },
    chatting_scroll:{
        paddingBottom:5,
    },
    new_member_bar:{
        alignItems: 'center', 
        borderWidth:0, 
        backgroundColor: '#50bcdf', 
        borderRadius: 20, 
        margin:10, 
        marginHorizontal:20, 
        paddingTop:5,
        paddingBottom:5,
        borderColor:'#ccc',
        borderWidth:0.6,
    },
    new_member_text:{
        fontSize: 15, 
        fontWeight:'bold',
    },
    i_say:{
        alignItems: 'flex-end', 
        marginRight:10
    },
    flex_row:{
        flexDirection:'row'
    },
    myname_text:{
        fontWeight:'bold', 
        color:'blue',
        marginBottom:5
    },
    mytime:{
        paddingTop:20, 
        marginRight:10
    },
    i_say_text:{
        borderWidth:0, 
        padding:10, 
        borderRadius: 20, 
        backgroundColor:'powderblue'
    },
    they_say:{
        alignItems: 'flex-start', 
        marginLeft:10
    },
    they_say_text:{
        borderWidth:0, 
        padding:10, 
        borderRadius: 20, 
        backgroundColor:'white',
        borderColor: '#bbb',
        borderWidth: 0.5,
    },
    their_name_text:{
        fontWeight:'bold', 
        color:'blue', 
        marginBottom:5
    },
    they_time:{
        paddingTop:20, 
        marginLeft:10
    },
    message_container:{
        backgroundColor:'white', 
        flex:1, 
        flexDirection:'row', 
        justifyContent: 'space-between', 
        margin:5, 
        marginHorizontal: 20, 
        borderRadius:12
    },
    input_text:{
        flex:8
    },
    input_text_line:{
        fontSize:20, 
        alignContent:'center', 
        padding: 5, 
        marginLeft:10,
        // borderWidth:1,
    },
    send_btn:{
        padding: 5, 
        paddingLeft: 10, 
        flex:2 ,
        borderLeftColor: '#bbb',
        borderLeftWidth: 0.5,
    },
    send_icon:{
        alignItems:'center', 
        marginLeft:20, 
    }
})
