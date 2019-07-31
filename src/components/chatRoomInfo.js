import React, { Component } from 'react';
import { StyleSheet, Text, View,Button, TouchableOpacity,ScrollView,Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import TaxiElement from '../components/taxiElement';
import { vw } from 'react-native-expo-viewport-units';
import { Directions } from 'react-native-gesture-handler';
import { carrierImgs, seatImg, fromtoImg, carrImg } from '../variable/assets';
import { observer, inject } from 'mobx-react';

// @inject('taxiStore')

// @observer
export default class ChatRoom extends Component{

    // componentDidMount() {
    //     const { taxiStore } = this.props;
    //     taxiStore.getTaxiList();
    // }
    render(){
        return(
        <View>
            <View style={styles.chatInfo_Top}>
                <View style={styles.chatInfo_Left}>
                    <View style={styles.chat_leftTop}>
                        <View style={styles.calendar}>
                            <Icon name="calendar" color='#3FA9F5' size={20}></Icon>
                            <Text>   2019 / 07 / 31</Text>
                        </View>
                        <View style={styles.clock}>
                            <Icon name="clockcircleo" color='#3FA9F5' size={20}></Icon>
                            <Text>  15:20</Text>
                        </View>
                    </View>
                    <View style={styles.chat_leftButt}>
                        <View style={styles.fromto}>
                            <View style={styles.destination_location}>
                                <Image
                                    style={styles.destination_image}
                                    source={fromtoImg} />
                                <View style={styles.destination_text_location}>
                                    <Text style={styles.destination_text}>
                                        {/* {this.props.from} */}
                                        한동대학교
                                    </Text>
                                    <Text style={styles.destination_text}>
                                        {/* {this.props.to} */}
                                        포항역
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.chat_leftButt_carrier}></View>
                    </View>
                </View>
                <View style={styles.chatInfo_Right}>
                    <View style={styles.Button}>
                        <TouchableOpacity style={{backgroundColor: '#3FA9F5',borderRadius: 10}}>
                            <View style={styles.ButtonInfo}>
                            <Text style={styles.ButtonText}>방나가기</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Button}>
                        <TouchableOpacity style={{backgroundColor: '#3FA9F5',borderRadius: 10}}>
                            <View style={styles.ButtonInfo}>
                            <Text style={styles.ButtonText}>정산하기</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView horizontal={true}>
                <View style={styles.profileButton}>
                    <TouchableOpacity style={{paddingRight:10}}>
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileText}>송민석    </Text>
                            <Icon name="phone" color='#3FA9F5' size={20}>   </Icon>
                            <Icon name="mail" color='#3FA9F5' size={20}></Icon>
                        </View>
                    </TouchableOpacity >
                    <TouchableOpacity style={{paddingRight:10}}>
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileText}>장주만    </Text>
                            <Icon name="phone" color='#3FA9F5' size={20}>   </Icon>
                            <Icon name="mail" color='#3FA9F5' size={20}></Icon>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingRight:10}}>
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileText}>최진아    </Text>
                            <Icon name="phone" color='#3FA9F5' size={20}>   </Icon>
                            <Icon name="mail" color='#3FA9F5' size={20}></Icon>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingRight:10}}>
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileText}>신영현    </Text>
                            <Icon name="phone" color='#3FA9F5' size={20}>   </Icon>
                            <Icon name="mail" color='#3FA9F5' size={20}></Icon>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
        )
    }
}

const styles=StyleSheet.create({
    chatInfo_Top: {
        height:vw(34),
        flexDirection:'row',
    },
        chatInfo_Left:{
            flex:3,
            borderColor:'gray',
            borderWidth:0.5,
        },
            chat_leftTop:{
                flex:1,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
            },
                calendar:{
                    flex:7,
                    flexDirection:'row',
                    justifyContent:'center'
                },
                clock:{
                    flex:4,
                    flexDirection:'row',
                    justifyContent:'flex-start'
                },
            chat_leftButt:{
                flex:2,
                flexDirection:'row'
            },
                fromto:{
                    flex:1,
                },
                    destination_location: {
                        flex: 3,
                        marginLeft: vw(3),
                        justifyContent: 'center',
                        flexDirection: 'row',
                    },
            
                        destination_image: {
                            width: vw(6),
                            height: vw(19.2),
                        },
            
                        destination_text_location: {
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                        },
            
                            destination_text: {
                                color: 'gray',
                                margin: vw(2.4),
                            },
                chat_leftButt_carrier:{
                    flex:1,
                    borderWidth:0.5,
                },
        chatInfo_Right:{
            flex:1.5,
            flexDirection:'column',
            borderColor:'gray',
            borderWidth:0.5,
            justifyContent:'space-around'
        },
            Button:{
                height:vw(12),
                justifyContent:'center',
                alignItems:'center',
            },
            ButtonInfo: {
                paddingHorizontal: 20,
                padding:10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            },
                ButtonText: {
                    color: 'white',
                    fontSize:15,
                },
    profileButton:{
        height:vw(13),
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:10,
        flexDirection:'row'
    },
    profileInfo: {
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#3FA9F5',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
        profileText: {
            color: '#3FA9F5',
        },
})
