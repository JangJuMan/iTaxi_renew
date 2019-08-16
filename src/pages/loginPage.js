import React, { Component } from 'react';
import{ StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { mainLogo } from '../variable/assets';
import { vw, vh } from 'react-native-expo-viewport-units';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import * as FileSystem from 'expo-file-system';
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
    loginInfoFileUri = FileSystem.cacheDirectory + "loginInfo";
    termAgreeFileUri = FileSystem.cacheDirectory + "termInfo";

    componentDidMount() {
        this.autoLogin();
    }

    async autoLogin() {
        const info = await FileSystem.getInfoAsync(this.loginInfoFileUri);
        if (info.exists) {
            this.setState({ isLoading: true });
            FileSystem.readAsStringAsync(this.loginInfoFileUri)
                .then(content => {
                    const data = JSON.parse(content);
                    this.login(data.id, data.password);
                })
        }
    }

    async setAutoLogin() {
        const loginData = {
            "id": this.state.id,
            "password": this.state.pw
        }
        
        await FileSystem.writeAsStringAsync(this.loginInfoFileUri, JSON.stringify(loginData));
    }

    async resetAutoLogin() {
        await FileSystem.deleteAsync(this.loginInfoFileUri);
    }

    async checkTerms() {
        const info = await FileSystem.getInfoAsync(this.termAgreeFileUri);
        return info.exists;
    }
    
    login(id, pw) {
        const { userStore } = this.props;
        this.setState({ isLoading: true },
            () => {
                userStore.login(id, pw)
                    .then(() => {
                        this.setState({ isLoading: false }, () => {
                            if (this.checkTerms())
                                this.props.navigation.navigate('Service');
                            else
                                this.props.navigation.navigate('Home');
                        });
                    })
                    .catch(error => {
                        this.setState({ isLoading: false },
                            () => Alert.alert(
                                "Login Failed",
                                error.message
                            ));
                    })
            });
    }
    render() {
    return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Image style={styles.logo} source={mainLogo}></Image>
            <View style={{flexDirection:'column'}}>
                <Text style={styles.text}>iTaxi</Text>
                <Text style={styles.cra}>Powered by CRA</Text>
            </View>
        </View>
        <TextInput
            keyboardType = 'email-address'
            onChangeText={(id) => this.setState({ id })}
            placeholder='Hisnet ID'
            style={styles.input}
        />
        <TextInput
            onChangeText={(password) => this.setState({ password })}
            placeholder='Hisnet PW'
            secureTextEntry={true}
            style={styles.input}
        />
        <CheckBox
            center
            title="자동 로그인"
            onPress={() => this.setState({ isAutoLogin: !this.state.isAutoLogin })}
            checked={this.state.isAutoLogin} />
        <View style={styles.profileButton}>
            <TouchableOpacity onPress={() => {
                this.state.isAutoLogin ? this.setAutoLogin() : this.resetAutoLogin();
                this.login();
            }}>
                <View style={styles.changeInfo}>
                    <Text style={styles.changeInfoText}>Sign in(로그인)</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
    );
}
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'column',
        marginTop:vw(25)
    },
        top:{
            flexDirection:'row',
            margin:10,
            justifyContent:'center',
            alignItems:'center',
        },
            logo: {
                width:vw(30),
                height:vw(22),
                margin:15,
            },
                text:{
                    fontSize:vw(20),
                    color: '#3FA9F5',
                },
                cra:{
                    fontSize:vw(5),
                    color: '#3FA9F5',
                },
        input: {
            width: 200,
            fontFamily: 'Baskerville',
            fontSize: 20,
            height: 44,
            padding: 10,
            borderWidth: 1,
            borderColor: '#3FA9F5',
            marginVertical: 10,
        },
        profileButton:{
            height:vw(15),
            justifyContent:'center',
            alignItems:'center'
        },
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
                },
});
