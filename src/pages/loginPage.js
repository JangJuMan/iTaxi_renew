import React, { Component } from 'react';
import { Alert, Image,Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';
import { mainLogo } from '../variable/assets';
import { vw, vh } from 'react-native-expo-viewport-units';

export default class App extends Component {


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
            onChangeText={(email) => this.setState({ email })}
            placeholder='Hisnet ID'
            style={styles.input}
        />
        <TextInput
            onChangeText={(password) => this.setState({ password })}
            placeholder='Hisnet PW'
            secureTextEntry={true}
            style={styles.input}
        />
            
        
            <View style={styles.profileButton}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('Service')
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
        profileButton:{
            height:vw(15),
            justifyContent:'center',
            alignItems:'center'
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
});
