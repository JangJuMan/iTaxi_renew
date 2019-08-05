import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, Platform, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import OC from 'open-color';

export default class ChatRoom extends Component {
    state = {
        text: '',
        sendingMsg: '',
        height: 0,
    }

    onSubmitEdit = () => {
        this.setState({ sendingMsg: this.state.text })
        this.setState({ text: '' })
    }

    render() {
        return (
            //TODO: 채팅 연속으로 입력할 시 이전 문자들이 나오는 오류 수정하기
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
                        style={styles.input_text_line}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                        // blurOnSubmit={true}
                        // caretHidden = {true}
                        // contextMenuHidden = {false}
                        // defaultValue ={'hihih'}
                        // multiline={true}
                        multiline={true}
                        // numberOfLines={3}
                        // onContentSizeChange={(event) => {
                        //     this.setState({height: event.nativeEvent.contentSize.height})
                        // }}
                        // returnKeyType = {'send'}
                        // selectTextOnFocus = {true}
                        // onContentSizeChange = {(event) => event.nativeEvent.contentSize.height}
                        // onSubmitEditing={ this.onSubmitEdit }
                        //TODO:  엔터를 눌러도 안꺼지게 하기 
                        //TODO:  연속적으로 입력할때 를 위해서 한번 화살표 버튼 누르면 메시지란을 초기화해야해

                        // multiline={true}
                        // maxLength = {80}
                        placeholder='메시지를 입력해주세요123' />
                    <TouchableOpacity
                        style={styles.send_btn}
                        onPress={() => {
                            this.onSubmitEdit();
                            console.log(`text: ${this.state.text} / sendingMsg: ${this.state.sendingMsg} / Textinput.text: ${TextInput.text}`);
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