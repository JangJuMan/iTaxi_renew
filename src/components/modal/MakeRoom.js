import React, { Component } from 'react';
import { View, Text,StyleSheet,Image, TouchableOpacity} from 'react-native';
import {seatImg} from '../../variable/assets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OC from 'open-color';
import { vw, vh }  from 'react-native-expo-viewport-units';
import SearchModal from './searchModal';
import DatePicker from 'react-native-datepicker';
import { inject, observer } from 'mobx-react';
/** 
*   @props onOkButton        press make room button (ok button)
*   @props onCancelButton    press cancel button
*/
@inject('dateStore')
@observer
export default class MakeRoom extends Component{
    state={
        person:-1,
        carrier:-1,
        date: '',
        time: `${new Date().getHours()}:`+`${new Date().getMinutes()}`
    }

    constructor(props){
        super(props)
        const {dateStore} = this.props;
        this.dateStore = dateStore
        this.state.date = `${this.dateStore.date.getFullYear()}-`+`${this.dateStore.date.getMonth() + 1}-` + `${this.dateStore.date.getDate()}`
    }

    person_clicked(value){
        if(value === this.state.person){
            this.setState({person:-1})
        }
        else{
            this.setState({person:value})
            console.log(new Date().getTime)
        }
    }

    carrier_clicked(value){
        if(value === this.state.carrier){
            this.setState({carrier:-1})
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
                    <View style={styles.location}>
                  {/* 출발지,도착지는 props로 받기 */}
                        <SearchModal 
                            modalStyle={{top: vh(30)}} />
                    </View>
                        <Icon style={styles.arrow} name="arrow-right" size={vw(7)} color="gray" />
                    <View style={styles.location}>
                        <SearchModal 
                            modalStyle = {{top:vh(30)}} />
                    </View>
                </View>

                <View style={styles.time_person_bag}>
                    <View style={styles.flextwo}>
                        <Text style={{color:'gray', }}>출발날짜 :</Text>
                    </View>
                    <View style={{flex:6,justifyContent:'center',alignItems:'center',}}>
                        <DatePicker
                            date = {this.state.date}
                            mode = "date"
                            format = "YYYY-MM-DD"
                            confirmBtnText = "확인"
                            cancelBtnText = "취소"
                            showIcon = {false}
                            onDateChange = {(date) => {this.setState({date: date});}}
                            androidMode = "spinner"
                            customStyles = {{
                                dateInput: {
                                    borderWidth: 0,
                                },
                                dateText : {
                                    color: '#4dabf7',
                                    fontSize: 23,
                                }
                            }}
                        />
                    </View>
                </View>

                <View style={styles.time_person_bag}>
                    <View style={styles.flextwo}>
                        <Text style={{color:'gray' }}>출발시간 :</Text>
                    </View>
                    <View style={{flex: 6,justifyContent: 'center',alignItems:'center',}}>
                        <DatePicker
                            // style = {{margin: 10}}
                            customStyles = {{
                                dateInput: {
                                    borderWidth: 0,
                                },
                                dateText : {
                                    color: '#4dabf7',
                                    fontSize: 23,
                                }
                            }}
                            date = {this.state.time}
                            hideText = {false}
                            mode = "time"
                            format = "HH:mm"
                            confirmBtnText = "확인"
                            cancelBtnText = "취소"
                            minuteInterval = {1}
                            onDateChange = {(time) => {this.setState({time: time});}}
                            showIcon = {false}
                            androidMode = "spinner"
                        />
                    </View>
                </View>

                <View style={styles.time_person_bag}>
                    <View style={styles.flextwo}>
                        <Text style={{color:'gray' }}>추가인원 :</Text>
                    </View>
                    <View style={{flex: 6,justifyContent: 'space-evenly',alignItems:'center', flexDirection:'row'}}>
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
                </View>

                <View style={styles.time_person_bag}>
                    <View style={styles.flextwo}>
                        <Text style={{color:'gray' }}>나의캐리어 :</Text>
                    </View>
                    <View style={{flex: 6,justifyContent: 'space-evenly',alignItems:'center', flexDirection:'row'}}>
                        <TouchableOpacity style={{padding:5}}
                            onPress = {() => {
                                this.carrier_clicked(0);
                            }}
                        >
                            <Icon name="numeric-0-circle-outline" size={30} color={this.state.carrier === 0 ? 'blue' : '#4dabf7' } />
                        </TouchableOpacity>
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
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => {
                        this.props.onCancelButton();
                        }}>
                        <Text style={{color:'#4dabf7',fontSize:17 }}>취소</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.onOkButton(this.state.carrier, this.state.person);
                        }}>
                        <Text style={{color:'#4dabf7',fontSize:17 }}>방만들기</Text>
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
        alignItems:'flex-end',
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
        justifyContent:'space-between',
    },
    button:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    }
})
