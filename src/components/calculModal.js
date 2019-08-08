import React, { Component } from 'react';
import { Modal, View, TouchableWithoutFeedback, StyleSheet, Text, TextInput } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { inject } from 'mobx-react';

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
                    <Text style = {{fontSize: 25}}>더치페이</Text>
                </View>
                <View style = {styles.deviding}>
                    <Text>정산하시는 분에게 1원 단위에서 반올림하여 차익을 남기도록 하였습니다.</Text>
                </View>
                <View></View>
                <View style = {{justifyContent: 'flex-start', alignItems: 'flex-start', padding: 20, paddingBottom: 5 }}>
                    <TextInput
                        style = {{height: vh(5), width: vw(40)}}
                        placeholder = "탑승 인원수"
                        keyboardType={'numeric'}
                        onChangeText={(person) => this.setState({person})}
                    />
                </View>
                <View style = {{justifyContent: 'flex-start', alignItems: 'flex-start', padding: 20, paddingBottom: 5 }}>
                    <TextInput 
                        style = {{height: vh(5), width: vw(40)}}
                        placeholder = "결제 금액"
                        onChangeText={(price) => this.setState({price})}
                    />
                </View>
                <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.onCancelButton()}}
                        style = {{padding: 15}}>
                        <Text style = {{color: '#3FA9F5'}}>취소</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress = {() => {
                            this.getresult(this.state.person, this.state.price);
                            this.props.onOkButton();
                        }}
                        style = {{padding: 15}}>
                        <Text style = {{color: '#3FA9F5'}}>확인</Text>

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