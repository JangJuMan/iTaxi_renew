import React, { Component } from 'react';
import{ StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

import SearchMenu from './searchMenu';
import NewRoom from './newRoom';
import MakeRoom from './modal/MakeRoom';
import Modal from '../elements/modal';



export default class EmptyList extends Component{
    state={
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render(){
        return(
            <View style={this.props.style}>
                {/* 조회된 기록들 */}
                <View style={styles.there_is_no_result}>
                    <Text style={styles.date_of_logs}>검색 결과가 없습니다.</Text>
                </View>
                <View style={styles.log_contents}>
                    <TouchableOpacity onPress={()=> this.setModalVisible(true)}>
                        <NewRoom />
                    </TouchableOpacity>
                </View>

                <Modal
                    animationType = {'fade'}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setModalVisible(false)}
                    render={
                    <View style={styles.modalBackground}>
                        <View style={styles.realModal}>
                            <MakeRoom 
                                navigation={this.props.navigation}
                                onOkButton = {() => {
                                    this.setModalVisible(false),
                                    this.props.navigation.navigate('Chat')
                                }}                                
                                onCancelButton = {() => this.setModalVisible(false)}/>
                        </View>
                    </View>
                }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    there_is_no_result:{
        alignItems: 'center', 
        padding: 10,
        marginTop: 40,
        fontWeight: 'bold',
        marginBottom: 55,
    },
        date_of_logs:{
            color:'#bbb',
            fontSize:20,
            padding:10,
            fontFamily: "titleFont",
            fontWeight:"200"
        },

    log_contents:{
        // marginLeft: 24, 
        // marginRight: 24, 
    },
})