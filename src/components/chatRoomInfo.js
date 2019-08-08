import React, { Component } from 'react';
import { StyleSheet, Text, View,Button, TouchableOpacity,ScrollView,Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import TaxiElement from '../components/taxiElement';
import { vw } from 'react-native-expo-viewport-units';
import { Directions } from 'react-native-gesture-handler';
import {carrIcon,emptycarrImg,fullcarrImg,fromtoIcon} from '../variable/assets';
import { observer, inject } from 'mobx-react';

@inject('taxiStore')
@inject('carpoolStore')

@observer
export default class ChatRoom extends Component{

    componentDidMount() {
        const { taxiStore } = this.props;
        const { carpoolStore } = this.props;
        taxiStore.getTaxiList();
        carpoolStore.getCarpoolList();
    }
    render(){
        const { taxiStore } = this.props;
        const { carpoolStore } = this.props;
        const t_data = taxiStore.taxiId;
        const c_data = carpoolStore.carpoolId;

       




    


        return(
        <View>
            <View style={styles.chatInfo_Top}>
                <View style={styles.chatInfo_Left}>
                    <View style={styles.calendar_time}>
                        <View style={styles.calendar}>
                            <Icon name="calendar" color='#3FA9F5' size={20}></Icon>
                            <Text style={{fontSize:15}}>  07 / 31</Text>
                        </View>
                        <View style={styles.clock}>
                            <Icon name="clockcircleo" color='#3FA9F5' size={20}></Icon>
                            <Text style={{fontSize:15}}>  {t_data.departure_time}</Text>
                        </View>
                    </View>
                    <View style={styles.destination}>
                        <View style={styles.destination_location}>
                            <Image
                                style={styles.destination_image}
                                source={fromtoIcon} />
                            <View style={styles.destination_text_location}>
                                <Text style={styles.destination_text}>
                                    {t_data.departure_place}
                                </Text>
                                <Text style={styles.destination_text}>
                                    {t_data.arrival_place}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.carrier}>
                        <View style={{flexDirection:'row',padding:3}}>
                            <Image style={styles.carrIcon} source={carrIcon} />
                            <Text style={{padding:5}}>캐리어</Text>
                        </View>
                        <View style={{flexDirection:'row',margin:5}}>
                            <Image style={styles.carrImg} source={emptycarrImg} />
                            <Image style={styles.carrImg} source={emptycarrImg} />
                            <Image style={styles.carrImg} source={fullcarrImg} />
                            <Image style={styles.carrImg} source={fullcarrImg} />
                        </View>
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
            flex:5,
            borderColor:'gray',
            borderWidth:0.5,
            flexDirection:'row',
        },
            calendar_time:{
                flex:2,
                flexDirection:'column',
                margin:5,
                paddingLeft:7,
                justifyContent:'space-evenly',
                alignItems:'center',
            },
                calendar:{
                    flexDirection:'row',
                },
                clock:{
                    flexDirection:'row',
                },
                
            destination:{
                flex:4,
            },
                destination_location: {
                    flex: 3,
                    marginLeft: vw(3),
                    justifyContent: 'center',
                    flexDirection: 'row',
                },
        
                    destination_image: {
                        width: vw(6),
                        height: vw(30),
                        margin:5,
                    },
        
                    destination_text_location: {
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                    },
        
                        destination_text: {
                            color: 'gray',
                            flexDirection:'row'
                        },
            carrier:{
                flex:3,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            },
                carrIcon:{
                    width: vw(7),
                    height: vw(7),
                },
                carrImg:{
                    width: vw(5),
                    height: vw(10),
                },
        chatInfo_Right:{
            flex:2,
            flexDirection:'column',
            borderColor:'gray',
            borderWidth:0.5,
            justifyContent:'space-around'
        },
            Button:{
                height:vw(10),
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
