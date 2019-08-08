import React, { Component } from 'react';
import { StyleSheet, Text, View,Button, TouchableOpacity,ScrollView,Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import TaxiElement from '../components/taxiElement';
import { vw, vh } from 'react-native-expo-viewport-units';
import { Directions } from 'react-native-gesture-handler';
import {carrIcon,emptycarrImg,fullcarrImg,fromtoIcon} from '../variable/assets';
import { observer, inject } from 'mobx-react';
import CalculModal from '../components/calculModal';
import Modal from '../elements/modal';

@inject('taxiStore')
@inject('carpoolStore')

@observer
export default class ChatRoom extends Component{
    constructor(props) {
        super(props);
    }
    state={
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    componentDidMount() {
        const { taxiStore } = this.props;
        const { carpoolStore } = this.props;
        taxiStore.getTaxiList();
        carpoolStore.getCarpoolList();
    }
    render(){
        const { taxiStore } = this.props;
        const data = taxiStore.taxiId;

        // <View style={styles.calendar}>
        //                     <Icon name="calendar" color='#3FA9F5' size={20}></Icon>
        //                     <Text>   2019 / 07 / 31</Text>
        //                 </View>


        // <View style={styles.clock}>
        //                     <Icon name="clockcircleo" color='#3FA9F5' size={20}></Icon>
        //                     <Text>  {t_data.departure_time.substring(7)}</Text>
        //                 </View>


    //     <View style={styles.destination_location}>
    //     <Image
    //         style={styles.destination_image}
    //         source={fromtoIcon} />
    //     <View style={styles.destination_text_location}>
    //         <Text style={styles.destination_text}>
    //             {t_data.departure_place}
    //         </Text>
    //         <Text style={styles.destination_text}>
    //             {t_data.arrival_place}
    //         </Text>
    //     </View>
    // </View>

    
    // <View style={styles.chat_leftButt_carrier}>
    //                         <View style={{flexDirection:'row',padding:3}}>
    //                             <Image style={styles.carrIcon} source={carrIcon} />
    //                             <Text style={{padding:5}}>캐리어</Text>
    //                         </View>
    //                         <View style={{flexDirection:'row',margin:5}}>
    //                             <Image style={styles.carrImg} source={emptycarrImg} />
    //                             <Image style={styles.carrImg} source={emptycarrImg} />
    //                             <Image style={styles.carrImg} source={fullcarrImg} />
    //                             <Image style={styles.carrImg} source={fullcarrImg} />
    //                         </View>
    //                     </View>


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
                            <Text>  {data.departure_time}</Text>
                        </View>
                    </View>
                    <View style={styles.chat_leftButt}>
                        <View style={styles.fromto}>
                            <View style={styles.destination_location}>
                                <Image
                                    style={styles.destination_image}
                                    source={fromtoIcon} />
                                <View style={styles.destination_text_location}>
                                    <Text style={styles.destination_text}>
                                        {data.departure_place}
                                    </Text>
                                    <Text style={styles.destination_text}>
                                        {data.arrival_place}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.chat_leftButt_carrier}>
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
                </View>
                <View style={styles.chatInfo_Right}>
                    <View style={styles.Button}>
                        <TouchableOpacity  
                            onPress = {() => this.props.navigation.goBack()}
                            style={{backgroundColor: '#3FA9F5',borderRadius: 10}}>
                            <View style={styles.ButtonInfo}>
                            <Text style={styles.ButtonText}>방나가기</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Button}>
                        <TouchableOpacity 
                            onPress = {() => this.setModalVisible(true)}
                            style={{backgroundColor: '#3FA9F5',borderRadius: 10}}>

                            <View style={styles.ButtonInfo}>
                            <Text style={styles.ButtonText}>더치페이</Text>
                            </View>
                        </TouchableOpacity>
                        <Modal 
                            transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => this.setModalVisible(false)}
                            render={
                            <View style={styles.modalBackground}>
                                <View style={styles.realModal}>
                                    <CalculModal 
                                        navigation={this.props.navigation}
                                        onOkButton = {() => this.setModalVisible(false)}
                                        onCancelButton = {() => this.setModalVisible(false)}/>
                                </View>
                             </View>
            }/>
                    </View>
                </View>
            </View>
            <ScrollView horizontal={true} >
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
                            height: vw(22),
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
                    flexDirection:'column',
                },
                    carrIcon:{
                        width: vw(7),
                        height: vw(7),
                    },
                    carrImg:{
                        width: vw(5),
                        height: vw(10),
                        padding:10
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

        realModal: {
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
})
