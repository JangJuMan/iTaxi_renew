import React, { Component } from 'react';
import { View, Text, Button,StyleSheet,ScrollView,TouchableOpacity,Input,TextInput, KeyboardAvoidingView, Keyboard, Platform} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { vw, vh }  from 'react-native-expo-viewport-units';
import KeyboardSpaceView from 'react-native-keyboard-spacer-view';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class Info extends Component{
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    
    render() {
        return (
            <View style={styles.info}>
                <Text style={{fontSize:14,marginLeft:9,color:'gray'}}>{this.props.info}{'\n'}</Text>
                <TextInput
                    style={{height: 40, borderBottomWidth:1, borderBottomColor: '#CCCCCC', flexGrow: 1}}
                    placeholder="정보를 입력하시오"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
            </View>
        )
    }
}
export default class changeInfo extends Component {
    state={
        visibleHeight : 216,
    }

    componentWillMount(){
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this))
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove()
    }

    keyboardDidShow(e){
        let newSize = e.endCoordinates.height
        console.log(`keyboard size : ${newSize}`);
        this.setState({
            visibleHeight: newSize,
        })
    }

    render() {
        const keyboardHeight = Platform.OS === 'ios' ? this.state.visibleHeight*0.33 : this.state.visibleHeight*0.31
        return (
<KeyboardAvoidingView style={styles.container} behavior='padding' contentContainerStyle={{ flex: 1 }} keyboardVerticalOffset={keyboardHeight} >  
        <ScrollView>
            <View>
                <Info info='학번' private='21900398'/>
                <Info info='이름' private='홍길동'/>
                <Info info='번호' private='010-1234-5687'/>
                <Info info='이메일' private='2190000@handong.edu'/>
                <Info info='계좌은행' private='기업'/>
                <Info info='계좌번호' private='000000'/>
            </View>
            <View style={styles.profileButton}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Update')}>
                <View style={styles.changeInfo}>
                    <Text style={styles.changeInfoText}>개인정보 수정</Text>
                </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
</KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
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
});
