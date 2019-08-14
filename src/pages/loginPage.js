import React, { Component } from 'react';
import{ StyleSheet, View, Text, Button,Image,TextInput,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { mainLogo } from '../variable/assets';
import { vw, vh } from 'react-native-expo-viewport-units';
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default class App extends Component {
    render() {
        return (
        // <KeyboardAvoidingView behavior='position' contentContainerStyle={{flex:1}} >
        <View>
            <View style={{height:vh(50),justifyContent:'center',alignItems:'stretch',flexDirection:'column',marginTop:vw(25)}}>
                <View style={styles.top}>
                <Image style={styles.logo} source={mainLogo}></Image>
                <View style={{flexDirection:'column'}}>
                    <Text style={styles.text}>iTaxi</Text>
                    <Text style={styles.cra}>Powered by CRA</Text>
                </View>
                </View>

                <View style={styles.info}>
                    <Text style={{fontSize:14,marginLeft:9,color:'gray',}}>Hisnet ID</Text>
                    <TextInput
                        style={{height: 40, borderBottomWidth:1, borderBottomColor: '#CCCCCC', flexGrow: 1,margin:10}}
                        placeholder="Your hisnet ID"
                        onChangeText={(text) => this.setState({id: text})}
                    />

                    <Text style={{fontSize:14,marginLeft:9,color:'gray',}}>Hisnet PW</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={{height: 40, borderBottomWidth:1, borderBottomColor: '#CCCCCC', flexGrow: 1,margin:10}}
                        placeholder="Your hisnet PW"
                        onChangeText={(text) => this.setState({pw: text})}
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
                <KeyboardSpacer topSpacing={0}/>
            </View>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    top:{
        flexDirection:'row',
        margin:15,
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

    info: {
        height:vh(15),
        padding:20,
        
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
})