import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,Modal,TouchableHighlight,TouchableOpacity} from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import {plusImg} from '../variable/assets';
import Icon from 'react-native-vector-icons/Ionicons';
import MakeRoom from '../pages/settingscreen';


export default class NewRoom extends Component{
    
    state={
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    
    render(){
        const plus_img = plusImg;
        return(
            <View style={[styles.container]}>
                <TouchableHighlight onPress={()=> this.setModalVisible(true)}>
                    <View style={styles.Icon_text}>
                        <Icon name="ios-add" size={30} color="#4dabf7"/>
                        <Text style={styles.font_style}>새로 모집하기</Text>
                    </View>
                </TouchableHighlight>
                        
                <Modal
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setModalVisible(false)}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <MakeRoom />
                            <TouchableOpacity onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                                <Text>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor:'gray',
        shadowOpacity:0.3,
        elevation: 3,
        padding: vw(2.4),
        paddingBottom: vw(3.6),
        borderRadius: 5,
        padding:30,
    },
    Icon_text:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'white',
    },
    font_style:{
        color: '#777',
        marginTop: 10,
        fontSize: 16,
    }
});

