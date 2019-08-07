import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, Keyboard, Platform, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import OC from 'open-color';

const iosTextHeight = 13.5
const androidTextHeight = 13.5
const textHeight = Platform.OS === 'ios' ? iosTextHeight : androidTextHeight;

export default class ChatRoom extends Component {
    state = {
        text: '',
        sendingMsg: '',
        height: textHeight * 2,
        line : 1,
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.value === ''){ 
            this.setState({height: textHeight*2 , lines:1})
        }
    }
    onSubmitEdit = () => {
        this.setState({ sendingMsg: this.state.text })
        this.setState({ text: '' })
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='position' contentContainerStyle={{ flex: 1 }} keyboardVerticalOffset='80'>
                <View style={{ backgroundColor: '#EEEEEE', flex: 10, }}>
                    <ScrollView style={styles.chatting_scroll}>
                        <View style={styles.new_member_bar}>
                            <Text style={styles.new_member_text}>장주만 (님)이 입장하셨습니다.</Text>
                        </View>

                        <View style={styles.i_say}>
                            <View style={styles.flex_row}>
                                <Icon style={{}} name="ios-ribbon" size={20} />
                                <Text style={styles.myname_text}>장주만</Text>
                            </View>
                            <View style={styles.i_say_msg_container}>
                                <View style={styles.my_time_container}>
                                    <Text style={styles.mytime}>오후 3:17</Text>
                                </View>
                                <View style={styles.i_say_text}>
                                    <Text style={styles.white_text}>{this.state.sendingMsg}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.new_member_bar}>
                            <Text style={styles.new_member_text}>팀원1 (님)이 입장하셨습니다.</Text>
                        </View>

                        <View style={styles.they_say}>
                            <Text style={styles.their_name_text}>팀원1</Text>
                            <View style={styles.they_say_msg_container}>
                                <View style={styles.they_say_text}>
                                    <Text>{this.state.sendingMsg}</Text>
                                </View>
                                <View style={styles.they_time_container}>
                                    <Text style={styles.they_time}>오후 3:17</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.i_say}>
                            <View style={styles.flex_row}>
                                <Icon style={{}} name="ios-ribbon" size={20} />
                                <Text style={styles.myname_text}>장주만</Text>
                            </View>
                            <View style={styles.i_say_msg_container}>
                                <View style={styles.my_time_container}>
                                    <Text style={styles.mytime}>오후 3:17</Text>
                                </View>
                                <View style={styles.i_say_text}>
                                    <Text style={styles.white_text}>{this.state.sendingMsg}</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.they_say}>
                            <Text style={styles.their_name_text}>팀원1</Text>
                            <View style={styles.they_say_msg_container}>
                                <View style={styles.they_say_text}>
                                    <Text>{this.state.sendingMsg}</Text>
                                </View>
                                <View style={styles.they_time_container}>
                                    <Text style={styles.they_time}>오후 3:17</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.i_say}>
                            <View style={styles.flex_row}>
                                <Icon style={{}} name="ios-ribbon" size={20} />
                                <Text style={styles.myname_text}>장주만</Text>
                            </View>
                            <View style={styles.i_say_msg_container}>
                                <View style={styles.my_time_container}>
                                    <Text style={styles.mytime}>오후 3:17</Text>
                                </View>
                                <View style={styles.i_say_text}>
                                    <Text style={styles.white_text}>{this.state.sendingMsg}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.they_say}>
                            <Text style={styles.their_name_text}>팀원1</Text>
                            <View style={styles.they_say_msg_container}>
                                <View style={styles.they_say_text}>
                                    <Text>{this.state.sendingMsg}</Text>
                                </View>
                                <View style={styles.they_time_container}>
                                    <Text style={styles.they_time}>오후 3:17</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.i_say}>
                            <View style={styles.flex_row}>
                                <Icon style={{}} name="ios-ribbon" size={20} />
                                <Text style={styles.myname_text}>장주만</Text>
                            </View>
                            <View style={styles.i_say_msg_container}>
                                <View style={styles.my_time_container}>
                                    <Text style={styles.mytime}>오후 3:17</Text>
                                </View>
                                <View style={styles.i_say_text}>
                                    <Text style={styles.white_text}>{this.state.sendingMsg}</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.they_say}>
                            <Text style={styles.their_name_text}>팀원1</Text>
                            <View style={styles.they_say_msg_container}>
                                <View style={styles.they_say_text}>
                                    <Text>{this.state.sendingMsg}</Text>
                                </View>
                                <View style={styles.they_time_container}>
                                    <Text style={styles.they_time}>오후 3:17</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.i_say}>
                            <View style={styles.flex_row}>
                                <Icon style={{}} name="ios-ribbon" size={20} />
                                <Text style={styles.myname_text}>장주만</Text>
                            </View>
                            <View style={styles.i_say_msg_container}>
                                <View style={styles.my_time_container}>
                                    <Text style={styles.mytime}>오후 3:17</Text>
                                </View>
                                <View style={styles.i_say_text}>
                                    <Text style={styles.white_text}>{this.state.sendingMsg}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.new_member_bar}>
                            <Text style={styles.new_member_text}>팀원2 (님)이 입장하셨습니다.</Text>
                        </View>

                        <View style={styles.they_say}>
                            <Text style={styles.their_name_text}>팀원1</Text>
                            <View style={styles.they_say_msg_container}>
                                <View style={styles.they_say_text}>
                                    <Text>{this.state.sendingMsg}</Text>
                                </View>
                                <View style={styles.they_time_container}>
                                    <Text style={styles.they_time}>오후 3:17</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.i_say}>
                            <View style={styles.flex_row}>
                                <Icon style={{}} name="ios-ribbon" size={20} />
                                <Text style={styles.myname_text}>장주만</Text>
                            </View>
                            <View style={styles.i_say_msg_container}>
                                <View style={styles.my_time_container}>
                                    <Text style={styles.mytime}>오후 3:17</Text>
                                </View>
                                <View style={styles.i_say_text}>
                                    <Text style={styles.white_text}>{this.state.sendingMsg}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.they_say}>
                            <Text style={styles.their_name_text}>팀원1</Text>
                            <View style={styles.they_say_msg_container}>
                                <View style={styles.they_say_text}>
                                    <Text>{this.state.sendingMsg}</Text>
                                </View>
                                <View style={styles.they_time_container}>
                                    <Text style={styles.they_time}>오후 3:17</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.i_say}>
                            <View style={styles.flex_row}>
                                <Icon style={{}} name="ios-ribbon" size={20} />
                                <Text style={styles.myname_text}>장주만</Text>
                            </View>
                            <View style={styles.i_say_msg_container}>
                                <View style={styles.my_time_container}>
                                    <Text style={styles.mytime}>오후 3:17</Text>
                                </View>
                                <View style={styles.i_say_text}>
                                    <Text style={styles.white_text}>{this.state.sendingMsg}</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.message_container}>
                    <TextInput
                        {...this.props}
                        style={[styles.input_text_line, {height: this.state.height}]}
                        onChangeText={(input) => this.setState({ text: input })}
                        multiline={true}

                        // numberOfLines={5}
                        ref={ref => {
                            this.textInput = ref;
                        }}
                        onContentSizeChange = {(event) =>{
                            const height = Platform.OS === 'ios'
                                ? event.nativeEvent.contentSize.height
                                : event.nativeEvent.contentSize.height - androidTextHeight
                            const lines = Math.round(height / textHeight)
                            const visibleLines = lines < 5 ? lines : 5
                            const visibleHeight = textHeight * (visibleLines + 1)
                            this.setState({height: visibleHeight, lines:visibleLines})
                        }}
                        underlineColorAndroid='transparent'

                        placeholder='메시지를 입력해주세요' />
                    <TouchableOpacity
                        style={styles.send_btn}
                        onPress={() => {
                            this.textInput.clear();
                            //TODO: 임시방편임. textinput 자체가 빠르게 이어쓰면 이전에 있던 결과값에서 이어붙여지는 거 같아. 너무 에바임.. 더 좋은 방법이 필요함...
                            Keyboard.dismiss();
                            this.onSubmitEdit();
                        }}>
                        <Icon style={{}} name="ios-paper-plane" size={27} color="skyblue" />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
        flex: 1
    },
    chatting_container: {
        backgroundColor: '#EEEEEE',
        flex: 10,
    },
    chatting_scroll: {
        paddingBottom: 5,
    },
    new_member_bar: {
        alignItems: 'center',
        backgroundColor: OC.cyan[3],
        borderRadius: 20,
        margin: 10,
        marginHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 5,
        borderColor: '#ccc',
        borderWidth: 0.6,
    },
    new_member_text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    i_say: {
        alignItems: 'flex-end',
        marginRight: 10,
        marginVertical: 10,
    },
    flex_row: {
        flexDirection: 'row'
    },
    myname_text: {
        fontWeight: 'bold',
        color: 'blue',
        marginBottom: 5
    },
    my_time_container: {
        flexDirection: 'column-reverse',
        marginRight: 10,
    },
    mytime: {
        // nothing in here now..
    },
    i_say_text: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: OC.blue[5],
        borderWidth: 0.5,
        borderColor: OC.indigo[3],
    },
    they_say: {
        alignItems: 'flex-start',
        marginLeft: 10,
        marginVertical: 10,
    },
    they_say_text: {
        padding: 10,
        borderRadius: 20,
        borderColor: '#bbb',
        borderWidth: 0.5,
        backgroundColor: 'white',
    },
    their_name_text: {
        fontWeight: 'bold',
        color: 'blue',
        marginBottom: 5
    },
    they_time_container: {
        flexDirection: 'column-reverse',
        marginLeft: 10,
    },
    they_time: {
        // nothing in here now...
    },
    message_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 5,
        marginHorizontal: 20,
        borderRadius: 12,
    },
    input_text: {
        flex: 8
    },
    input_text_line: {
        alignContent: 'center',
        padding: 5,
        marginLeft: 10,
        flex: 8,
        borderRightColor: '#bbb',
        borderRightWidth: 0.5
    },
    send_btn: {
        alignItems: 'center',
        flex: 2,
        // borderWidth:1,
        padding:5,
    },
    send_icon: {
        alignItems: 'center',
        marginLeft: 20,
        borderWidth: 1,
    },
    white_text: {
        color: 'white',
    },
    blue_text: {
        color: OC.blue[5],
    },
    i_say_msg_container: {
        flexDirection: 'row',
        marginLeft: 80,
    },
    they_say_msg_container: {
        flexDirection: 'row',
        marginRight: 80,
    }
})