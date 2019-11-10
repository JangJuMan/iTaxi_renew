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
                <View style={styles.there_is_no_result}>
                    <Text style={styles.date_of_logs}>네트워크 연결에 실패하였습니다.</Text>
                </View>
                {/* <View style={styles.log_contents}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('TaxiList')}>
                        <Text>Reload</Text>
                    </TouchableOpacity>
                </View> */}
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
            // fontFamily: "titleFont",
            fontWeight:"200"
        },

    log_contents:{
        // marginLeft: 24, 
        // marginRight: 24, 
    },
})