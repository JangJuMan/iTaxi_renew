import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OC from 'open-color';
import { vw }  from 'react-native-expo-viewport-units';
import { observer, inject } from 'mobx-react';

/**
 * @props onOkButton      press enter room button (ok button)
 * @props onCancelButton  press cancel button
 */
@inject('taxiStore')
@observer
export default class intoRoom extends Component{
    state={
        carrier:-1,
        carrier_flag : false,
    }

    carrier_clicked(value){
        if(value === this.state.carrier){
            this.setState({carrier:-1});
            this.setState({carrier_flag : false});

        }
        else{
            this.setState({carrier:value});
            this.setState({carrier_flag : true});
        }
    }

    render(){
        const { taxiStore }  = this.props;
        const data = taxiStore.taxi;
        const heightColor = '#4dabf7'
        const unheightColor = '#CCCCCC'
        return(
            <View style={styles.list}>
                <View style={styles.top}>
                    <Text style={{color:'black',fontSize:15 }}>방들어가기</Text>
                </View>

                <View style={styles.fromTo}>
                    <View style={styles.location}>
                        <Text style={styles.locationText}>{data.departure_place}</Text>
                    </View>
                        <Icon style={styles.arrow} name="arrow-right" size={vw(7)} color="gray" />
                    <View style={styles.location}>
                        <Text style={styles.locationText}>{data.arrival_place}</Text>
                    </View>
                </View>
                <View style={styles.time_person_bag}>
                    <View style={styles.flextwo}>
                        <Text style={{color:'gray' }}>시간</Text>
                    </View>
                    <View style={{flex:5,justifyContent:'center',alignItems:'center',}}>
                        <Text style={{color:'#3FA9F5',fontSize:25,}}>{data.departure_time}</Text>
                    </View>
                    <View style={{flex:1,}}></View>
                </View>
                <View style={styles.time_person_bag}>
                    <View style={styles.flextwo}>
                        <Text style={{color:'gray' }}>현재 캐리어</Text>
                    </View>
                    <View style={{flex:5,justifyContent:'center',alignItems:'center',}}>
                        <Text style={{color:'#3FA9F5',fontSize:25,}}>{data.num_carrier}</Text>
                    </View>
                    <View style={{flex:1,}}></View>
                </View>

                <View style={styles.time_person_bag}>
                    <View style={styles.flextwo}>
                        <Text style={{color:'gray' }}>내 캐리어</Text>
                    </View>
                    <View style={{flex:5,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',}}>
                        <TouchableOpacity style={{padding:5}}
                            onPress = {() => {
                                this.carrier_clicked(0);
                            }}
                        >
                            <Icon name="numeric-0-circle-outline" size={30} color={this.state.carrier === 0 ? heightColor : unheightColor } />
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:5}}
                            onPress = {() => {
                                this.carrier_clicked(1);
                            }}
                        >
                            <Icon name="numeric-1-circle-outline" size={30} color={this.state.carrier === 1 ? heightColor : unheightColor } />
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:5}}
                            onPress = {() => {
                                this.carrier_clicked(2);
                            }}
                        >
                            <Icon name="numeric-2-circle-outline" size={30} color={this.state.carrier === 2 ? heightColor : unheightColor } />
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:5}}
                            onPress = {() => {
                                this.carrier_clicked(3);
                            }}
                        >
                            <Icon name="numeric-3-circle-outline" size={30} color={this.state.carrier === 3 ? heightColor : unheightColor } />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,}}></View>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => {
                        this.props.onCancelButton();
                        }}>
                    <   Text style={{color:'#3FA9F5',fontSize:17 }}>취소</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        if(this.state.carrier_flag) {
                            this.props.onOkButton(this.state.carrier);
                        }
                        else {
                            alert('캐리어를 선택해주세요.');
                        }

                    }}>
                        <Text style={{color:'#3FA9F5',fontSize:17 }}>확인</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    list:{
        height:vw(100),
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
        fontSize:14
    },
    top:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
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
        marginHorizontal: 50,
    }
})



