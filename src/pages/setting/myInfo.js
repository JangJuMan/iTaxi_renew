import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, AppRegistry, Button, Alert, Switch } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { vw } from 'react-native-expo-viewport-units';
import { observer, inject } from 'mobx-react';



class Profile_info extends Component {
    render() {
        return (
            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 16, color: '#999999', fontFamily: "titleFont", fontWeight: "200" }}>{this.props.info} {'\n'}</Text>
            </View>
        );
    }
}

class Profile_my extends Component {
    render() {
        return (
            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 16, color: 'black', fontFamily: "titleFont", fontWeight: "200" }}>{this.props.info} {'\n'}</Text>
            </View>
        );
    }
}

@inject('userStore')
@observer
export default class myInfo extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { userStore } = this.props;
        userStore.getUserId();
    }

    render() {
        const { userStore } = this.props;
        const data = userStore.userId;
        return (
            <View>
                <View style={styles.profileTop}>
                    <Text style={{ fontSize: 15, color: '#3FA9F5', fontFamily: "titleFont", fontWeight: "200" }}>Profile</Text>
                    <View style={{ borderBottomWidth: 1, margin: 9, borderBottomColor: '#CCCCCC', flexGrow: 1 }}></View>
                </View>
                <View style={styles.profileBottom}>
                    <View style={{ flex: 3 }}>
                        <Profile_info info='학번' />
                        <Profile_info info='한글이름' />
                        <Profile_info info='Email' />
                        <Profile_info info='휴대폰 번호' />
                        <Profile_info info='계좌 은행' />
                        <Profile_info info='계좌 번호' />
                    </View>

                    <View style={{ flex: 5 }}>
                        <Profile_my info={data.student_id} />
                        <Profile_my info={data.name} />
                        <Profile_my info={data.student_id + '@handong.edu'} />
                        <Profile_my info={data.phone} />
                        <Profile_my info='기업' />
                        <Profile_my info={data.phone} />
                    </View>

                </View>
                <View style={styles.profileButton}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Update',
                            {
                                student_id: data.student_id,
                                // name: data.name,
                                // user_id: data.user_id,
                                // phone: data.phone
                            })
                    }}>
                        <View style={styles.changeInfo}>
                            <Text style={styles.changeInfoText}>개인정보 수정</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )


    }
}



const styles = StyleSheet.create({
    changeInfo: {
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#3FA9F5',
        paddingLeft: 10,
        paddingRight: 10,
        flex: 0.9,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    changeInfoText: {
        color: '#3FA9F5',
        fontFamily: "titleFont",
        fontWeight: "200"
    },
    switch: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileTop: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 10,
        height: vw(5),
        alignItems: 'flex-start'
    },
    profileBottom: {
        flexDirection: 'row',
        marginTop: 20,
        height: vw(80),
        justifyContent: 'center',
        alignContent: 'center'
    },
    profileButton: {
        height: vw(15),
        justifyContent: 'center',
        alignItems: 'center'
    },
})