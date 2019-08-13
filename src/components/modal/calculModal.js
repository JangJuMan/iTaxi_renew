import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';
import { inject } from 'mobx-react';
import titleFont from '../../variable/assets';

/** 
*   @props onOkButton        press ok button
*   @props onCancelButton    press cancel button
*/

@inject('userStore')

export default class calculModal extends Component {
    state={
        modalVisible: false,
        person: "",
        price: "",
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    getresult(first, second) {
        const {userStore} = this.props;
        let result = 0;

        result = Math.round(second / first);
        //console.log('기업 ' + userStore.userId.phone + '으로 ' + result + '원 입금해주시면 됩니다.');
    }

    render() {
        return (
            <View style = {{height: vh(48), width: vw(75)}}>
                <View style = {styles.deviding}>
                    <Text style = {{fontSize: 25,fontFamily:'titleFont',fontWeight:"200"}}>더치페이</Text>
                </View>
                <View style = {styles.deviding}>
                    <Text style={{fontFamily:'titleFont',fontWeight:"200"}}>정산하시는 분에게 1원 단위에서 반올림하여 차익을 남기도록 하였습니다.</Text>
                </View>
                <View></View>
                <View style = {{justifyContent: 'flex-start', alignItems: 'stretch', padding: 20, paddingBottom: 5, margin:5 }}>
                    <TextInput
                        style = {{ borderBottomWidth:0.5, borderColor:'#bbb',fontFamily:'titleFont',fontWeight:"200"}}
                        placeholder = "탑승 인원수"
                        keyboardType={'numeric'}
                        returnKeyType='done'
                        blurOnSubmit = {false}
                        onChangeText={(person) => this.setState({person})}
                        onSubmitEditing = {() => { this.secondTextInput.focus(); }}
                    />
                </View>
                <View style = {{justifyContent: 'flex-start', alignItems:'stretch', padding: 20, paddingBottom: 5 , margin:5,}}>
                    <TextInput 
                        style = {{ borderBottomWidth:0.5, borderColor:'#bbb',fontFamily:'titleFont',fontWeight:"200"}}
                        ref={(input => {this.secondTextInput = input})}
                        placeholder = "결제 금액"
                        keyboardType={'numeric'}
                        blurOnSubmit = {false}
                        onChangeText={(price) => this.setState({price})}
                        returnKeyType='done'
                        onSubmitEditing = {() => {Keyboard.dismiss()}}
                    />
                </View>
                <View style = {{ flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <TouchableOpacity
                        onPress = {() => {
                            this.getresult(this.state.person, this.state.price);
                            this.props.onOkButton();
                        }}
                        style = {{padding: 15,}}>
                        <Text style = {{color: '#3FA9F5',fontFamily:'titleFont',fontWeight:"200"}}>확인</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => {
                            this.props.onCancelButton()}}
                        style = {{padding: 15}}>
                        <Text style = {{color: '#3FA9F5',fontFamily:'titleFont',fontWeight:"200"}}>취소</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    modalBackground: {
        position: 'absolute',
        width: vw(100),
        height: vh(100),
        backgroundColor: "#00000040",
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        position: 'absolute',
        alignSelf: 'center',
        top: vh(20),
        maxWidth: vw(80),
        maxHeight: vh(80),
        backgroundColor: '#FFFFFF',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor:'#999999',
        shadowOpacity:0.5,
        elevation: 2,
    },
    deviding: {
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        padding: 20,
        paddingBottom: 5,
    },
})
{/* <View style={{borderBottomWidth:1, borderBottomColor: '#CCCCCC', flexGrow: 1}}></View> */}