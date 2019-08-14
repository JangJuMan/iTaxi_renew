import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, AppRegistry, Button, Alert, Switch } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { vw } from 'react-native-expo-viewport-units';
import { observer, inject } from 'mobx-react';
import titleFont from '../../variable/assets';


export default class alarm extends Component {
    constructor(props) {
        super(props);
    }
    state = { chattingSwitchValue: true }
    CHATtoggleSwitch = (Chatvalue) => {
        this.setState({ ChattingSwitchValue: Chatvalue })
    }

    state = { switchValue: true }
    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
    }

    render() {
        return (

            <View>
                <View style={styles.AlarmTop}>
                    <Text style={{fontSize:15,color:'#3FA9F5',fontFamily:titleFont,fontWeight:"200"}}>Alarm</Text>
                    <View style={{borderBottomWidth:1,margin:9, borderBottomColor: '#CCCCCC', flexGrow: 1,}}></View>
                </View>
                <View style={styles.AlarmBottom}>
                    <View style={styles.chatAlarm}>
                        <Text style={{ fontSize: 16, color: 'black', fontFamily: titleFont, fontWeight: "200", paddingTop: vw(3) }}>채팅 알람</Text>
                        {/* switch버튼 */}
                        <View style={styles.switch}>
                            <Switch
                                onValueChange={this.CHATtoggleSwitch}
                                value={this.state.ChattingSwitchValue} />
                        </View>
                    </View>
                    <View style = {{margin: vw(2)}}></View>
                    <View style={styles.alertAlarm}>
                        <Text style={{ fontSize: 16, color: 'black', fontFamily: titleFont, fontWeight: "200",paddingTop: vw(3)  }}>공지 알람</Text>
                        {/* switch버튼 */}
                        <View style={styles.switch}>
                            <Switch
                                onValueChange={this.toggleSwitch}
                                value={this.state.switchValue} />
                        </View>
                    </View>
                </View>

            </View>
        )


    }
}



const styles = StyleSheet.create({
    switch: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    AlarmTop: {
        height: vw(5),
        marginLeft: 10,
        marginTop: vw(2),
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    AlarmBottom: {
        flexDirection: 'column',
        marginTop: 20, 
        height: vw(30),
        justifyContent: 'center',
        alignContent: 'center',
    },
    chatAlarm: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        flexDirection: 'row',
    },
    alertAlarm: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        flexDirection: 'row',
    },
})