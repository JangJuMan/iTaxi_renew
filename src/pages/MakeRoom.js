import React, { Component } from 'react';
import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native';
import {seatImg} from '../variable/assets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OC from 'open-color';
import { vw }  from 'react-native-expo-viewport-units';
import FromTo from '../components/searchModal';
import IconArrow from 'react-native-vector-icons/AntDesign';
/** 
*   @props onOkButton        press make room button (ok button)
*   @props onCancelButton    press cancel button
        출발,도착지도
*/
export default class setting extends Component{
    state={
        person:0,
        carrier:0,
    }

    person_clicked(value){
        if(value === this.state.person){
            this.setState({person:0})
        }
        else{
            this.setState({person:value})
        }
    }

    carrier_clicked(value){
        if(value === this.state.carrier){
            this.setState({carrier:0})
        }
        else{
            this.setState({carrier:value})
        }
    }

    render(){
        const heightColor = 'blue'
        const unheightColor = '#4dabf7'

        return(
            <View style={styles.list}>
                <View style={styles.top}>
                    <Text style={{color:'black',fontSize:15 }}>모집</Text>
                </View>
                <View style={styles.fromTo}>
                    <FromTo />
                    <IconArrow name="arrowright" size={35} color="gray" />
                    <FromTo />
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
                        <TouchableOpacity style={{padding:5}}
                            onPress = {() => {
                                this.person_clicked(1);
                            }}
                        >
                            <Icon name="numeric-1-circle-outline" size={30} color={this.state.person === 1 ? heightColor : unheightColor } />
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:5}}
                            onPress = {() => {
                                this.person_clicked(2);
                            }}
                        >
                            <Icon name="numeric-2-circle-outline" size={30} color={this.state.person === 2 ? heightColor : unheightColor } />
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:5}}
                            onPress = {() => {
                                this.person_clicked(3);
                            }}
                        >
                            <Icon name="numeric-3-circle-outline" size={30} color={this.state.person === 3 ? heightColor : unheightColor } />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,}}></View>
                </View>
                <View style={styles.time_person_bag}>
                    <View style={styles.flextwo}>
                        <Text style={{color:'gray' }}>나의캐리어</Text>
                    </View>
                    <View style={{flex:5,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',}}>
                        <TouchableOpacity style={{padding:5}}
                            onPress = {() => {
                                this.carrier_clicked(1);
                            }}
                        >
                            <Icon name="numeric-1-circle-outline" size={30} color={this.state.carrier === 1 ? 'blue' : '#4dabf7' } />
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:5}}
                            onPress = {() => {
                                this.carrier_clicked(2);
                            }}
                        >
                            <Icon name="numeric-2-circle-outline" size={30} color={this.state.carrier === 2 ? 'blue' : '#4dabf7' } />
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:5}}
                            onPress = {() => {
                                this.carrier_clicked(3);
                            }}
                        >
                            <Icon name="numeric-3-circle-outline" size={30} color={this.state.carrier === 3 ? 'blue' : '#4dabf7' } />
                        </TouchableOpacity>
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
            paddingLeft: 10,
            paddingRight: 10,
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
