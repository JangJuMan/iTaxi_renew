import React, { Component } from 'react';
import{ StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Alert, Keyboard, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { mainLogo } from '../../variable/assets';
import { vw } from 'react-native-expo-viewport-units';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { inject } from 'mobx-react';
import Modal from '../elements/modal';

@inject('userStore')
export default class App extends Component {
    state = { 
        isAutoLogin: false,
        isLoading: false,
        id: "",
        pw: "",
    }

    async componentDidMount() {
        const { userStore } = this.props;
        let result = await userStore.autoLogin();
        if (result) {
            this.setState({ isAutoLogin: true, id: result.id, pw: result.password }, () => {
                this.login();
            })
        }
    }

    login() {
        const { userStore } = this.props;
        this.setState({ isLoading: true },
            () => {
                if (!(this.state.id && this.state.pw)) {
                    this.setState({ isLoading: false }, () =>
                        Alert.alert(
                            "로그인 오류",
                            "아이디와 비밀번호를 모두 입력해주세요"
                        ));
                    return;
                }

                userStore.login(this.state.id, this.state.pw)
                    .then(loginData => {
                        // Todo : encrypt id/pw data
                        if (this.state.isAutoLogin)
                            userStore.setAutoLogin({
                                'id': this.state.id,
                                'password': this.state.pw,
                            });
                        else
                            userStore.resetAutoLogin();

                        this.setState({ isLoading: false }, () => {
                            if (!loginData.term)
                                this.props.navigation.navigate('Service');
                            else
                                this.props.navigation.replace('Home');
                        });
                    })
                    .catch(error => {
                        this.setState({ isLoading: false },
                            () => Alert.alert(
                                "Login Failed",
                                error.message
                            ));
                        this.passwordInput.clear();
                    });
            });
    }

    render() {
        return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image style={styles.logo} source={mainLogo}></Image>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.text}>iTaxi</Text>
                        <Text style={styles.cra}>Powered by CRA</Text>
                    </View>
                </View>
                <View style={styles.textinput}>
                    <Text style={styles.label}>Hisnet ID</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Your hisnet ID"
                        onChangeText={(text) => this.setState({id: text})}
                    />

                    <Text style={styles.label}>Hisnet PW</Text>
                    <TextInput
                        ref={ref => {this.passwordInput = ref}}
                        secureTextEntry={true}
                        style={styles.input}
                        placeholder="Your hisnet PW"
                        onChangeText={(text) => this.setState({pw: text})}
                    />
                </View>
                <CheckBox
                    center
                    title="자동 로그인"
                    onPress={() => this.setState({ isAutoLogin: !this.state.isAutoLogin })}
                    checked={this.state.isAutoLogin}
                    size = {vw(6)}
                    />
                <View style={styles.profileButton}>
                    <TouchableOpacity onPress={() => {
                        this.login();
                    }}>
                        <View style={styles.changeInfo}>
                            <Text style={styles.changeInfoText}>Sign in(로그인)</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <KeyboardSpacer topSpacing={0}/>
                <Modal
                    transparent={true}
                    visible={this.state.isLoading}
                    modalStyle={styles.modalStyle}
                    render={
                    <ActivityIndicator
                        color='blue'
                        size='large' />
                    } />
            </View>
        </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: vw(17),
    },
        top: {
            flexDirection: 'row',
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
            logo: {
                width: vw(30),
                height: vw(22),
                margin: 15,
            },
            text: {
                fontSize: vw(20),
                color: '#3FA9F5',
            },
            cra: {
                fontSize: vw(5),
                color: '#3FA9F5',
            },

        textinput: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: vw(90),
        },
            label: {
                fontSize: 14,
                marginLeft: 9,
                color: 'gray',
            },
            input: {
                height: 40,
                borderBottomWidth:1,
                borderBottomColor: '#CCCCCC',
                width: vw(90),
                marginBottom: 10,
            },

        profileButton:{
            height: vw(15),
            justifyContent: 'center',
            alignItems: 'center',
            margin: vw(3),
        },
            changeInfo: {
                borderRadius: 30,
                padding: 15,
                backgroundColor:'#3FA9F5'
            },
                changeInfoText: {
                    color: 'white',
                },
        
        modalStyle: {
            padding: 15,
            borderRadius: 10,
        },
});
