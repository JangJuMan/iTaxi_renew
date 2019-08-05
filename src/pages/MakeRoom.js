import React, { Component } from 'react';
import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native';
import {seatImg} from '../variable/assets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OC from 'open-color';
import { vw }  from 'react-native-expo-viewport-units';
import SearchModal from '../components/searchModal';
/** 
*   @props onOkButton        press make room button (ok button)
*   @props onCancelButton    press cancel button
        출발,도착지도
*/
export default class setting extends Component{
    render(){
        return(
            
            <View style={styles.list}>
                <View style={styles.top}>
                    <Text style={{color:'black',fontSize:15 }}>모집</Text>
                </View>
                <View style={styles.fromTo}>
                    <View style={styles.location}>
                  {/* 출발지,도착지는 props로 받기 */}
                    <SearchModal />
                    </View>
                    <Icon style={styles.arrow} name="arrow-right" size={vw(7)} color="gray" />
                    <View style={styles.location}>
                    <SearchModal />
                    </View>
                </View>
                <View style={styles.time_person_bag}>
                    <View style={styles.flextwo}>
                        <Text style={{color:'gray' }}>시간</Text>
                    </View>
                    <View style={{flex:5,justifyContent:'center',alignItems:'center',}}>
                        <Text style={{color:'#4dabf7',fontSize:25,}}>16:25</Text>
                    </View>
                    <View style={{flex:1,}}></View>
                </View>
                <View style={styles.time_person_bag}>
                    <View style={styles.flextwo}>
                        <Text style={{color:'gray' }}>추가인원</Text>
                    </View>
                    <View style={{flex:5,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',}}>
                        <Icon name="numeric-1-circle-outline" size={30} color="#4dabf7"/>
                        <Icon name="numeric-2-circle-outline" size={30} color="#4dabf7"/>
                        <Icon name="numeric-3-circle-outline" size={30} color="#4dabf7"/>
                    </View>
                    <View style={{flex:1,}}></View>
                </View>
                <View style={styles.time_person_bag}>
                    <View style={styles.flextwo}>
                        <Text style={{color:'gray' }}>나의캐리어</Text>
                    </View>
                    <View style={{flex:5,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',}}>
                        <Icon name="numeric-1-circle-outline" size={30} color="#4dabf7"/>
                        <Icon name="numeric-2-circle-outline" size={30} color="#4dabf7"/>
                        <Icon name="numeric-3-circle-outline" size={30} color="#4dabf7"/>
                    </View>
                    <View style={{flex:1,}}></View>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => {
                        // ModalControl.modalVisible=false
                        this.props.onOkButton();
                        // this.props.navigation.navigate('CarpoolRoom')}}
                        }}>
                        <Text style={{color:'#4dabf7',fontSize:17 }}>방만들기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        // ModalControl.modalVisible=false
                        this.props.onCancelButton();
                        // this.props.navigation.goBack()}
                        }}>
                        <Text style={{color:'#4dabf7',fontSize:17 }}>취소</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    list:{
        height:vw(110),
        backgroundColor:'white',
        width:vw(80),
        shadowColor:'gray',
        shadowOpacity:0.3,
        elevation: 3,
        flexDirection:'column',
    },
    flextwo:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    top:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    fromTo:{
        flexDirection: 'row',
        padding: 10,
    },
            location: {
                borderRadius: 50,
                borderWidth: 1,
                borderColor: OC.gray[4],
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
        },
            locationText: {
                color: '#3FA9F5',
                fontSize:16
            },
    calendar:{
        flex:3,
        margin:5
    },
    time_person_bag:{
        flex:2,
        flexDirection:'row',
    },
    button:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    }
})
