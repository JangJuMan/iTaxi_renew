import React, { Component } from 'react';
import{ StyleSheet, Text, View, ScrollView, TouchableOpacity, } from 'react-native';

import SearchMenu from './searchMenu';
import NewRoom from './newRoom';
import Icon from 'react-native-vector-icons/Ionicons';
import MakeRoom from '../pages/MakeRoom';
import Modal from '../elements/modal';


export default class EmptyList extends Component{
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         headerRight: (
    //             <TouchableOpacity
    //                 onPress={() => navigation.navigate('createCarpoolRoomInfo')}>
    //                 <Icon style={{marginRight:10, color:'dodgerblue'}}name="ios-add-circle-outline" size={30}/>
    //             </TouchableOpacity>
    //         ),
    //     };
    // };
    state={
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render(){
        return(
            <View style={styles.container}>
                {/* 중단 수평선 */}
                <SearchMenu 
                    style={{marginTop: 10, marginBottom: 10}}/>
                <View style={[styles.horizontal_divider]}>
                    
                </View>

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
    container:{
        flex:1,
    },
    top_title:{
        color:'#89B2E9',
        fontSize:18, 
        fontWeight: 'bold', 
        margin: 10, 
        marginLeft: 24
    },
    top_highlighted_log:{
        marginRight: 24, 
        marginLeft:24,
        borderWidth:2, 
        borderColor: '#00BFFF',
    },
    horizontal_divider:{
        borderBottomWidth: 1.0, 
        borderBottomColor: '#0b0b0b25', 
    },
    past_log_title:{
        fontSize: 16, 
        color: '#a0a0a0', 
        fontWeight: 'bold', 
        marginLeft:14,
    },
    taxi_carpool_font:{
        color:'#89B2E9', 
        fontSize:16, 
        padding:5,
        paddingRight:15,
        paddingLeft:15,
    },
    log_container:{
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingTop: 10
    },
    log_contents:{
        marginLeft: 24, 
        marginRight: 24, 
    },
    date_of_logs:{
        color:'#bbb',
        fontSize:20,
        padding:10,
    },
    horizontal_date_bar:{
        borderBottomWidth: 1.0, 
        borderBottomColor: '#0b0b0b25',
        flexGrow: 1,
    },
    there_is_no_result:{
        alignItems: 'center', 
        padding: 10,
        marginTop: 40,
        fontWeight: 'bold',
        marginBottom: 55,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    realModal: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})