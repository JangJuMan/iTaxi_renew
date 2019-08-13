import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,Image,} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { vw } from 'react-native-expo-viewport-units';
import {carrIcon,emptycarrImg,fullcarrImg,fromtoIcon} from '../variable/assets';
import { observer, inject } from 'mobx-react';
import CalculModal from './modal/calculModal';
import Modal from '../elements/modal';
import {Linking} from 'react-native';
import Communications from 'react-native-communications';
import titleFont from '../variable/assets';

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

    getCarrier() {
        const { taxiStore } = this.props;
        const data = taxiStore.taxiId;
        // 이것처럼 꺼내서 쓸 수 있습니다.
        // console.log(`carier info: ${this.props.navigation.state.params.Carrier}`);
        // console.log(`person info :${this.props.navigation.state.params.Person}`);
        const full = data.num_carrier;
        let empty = 4 - full;
        const list = [];
        
        for(let i = 0; i < full ; i++) {
            list.push(
                <View>
                    <Image style={styles.carrImg} source={fullcarrImg} />
                </View>
            )
        }
        for(let j = 0; j < empty ; j++) {
            list.push(
                <View>
                    <Image style={styles.carrImg} source={emptycarrImg} />
                </View>
            )
        }
        return list;
    }


    render(){
        const { taxiStore } = this.props;
        const data = taxiStore.taxiId;
        console.log(data);

        return(
        <View>
            <View style={styles.chatInfo_Top}>
                <View style={styles.chatInfo_Left}>
                    <View style={styles.calendar_time}>
                        <View style={styles.calendar}>
                            <Icon name="calendar" color='#3FA9F5' size={20}></Icon>
                            <Text style={{fontSize:vw(4),fontFamily:titleFont,fontWeight:"200"}}>  {data.departure_date.substring(5)}</Text>
                        </View>
                        <View style={styles.clock}>
                            <Icon name="clockcircleo" color='#3FA9F5' size={20}></Icon>
                            <Text style={{fontSize:vw(4),fontFamily:titleFont,fontWeight:"200"}}>  {data.departure_time}</Text>
                        </View>
                    </View>
                    <View style={styles.destination}>
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
                    <View style={styles.carrier}>
                        <View style={{flexDirection:'row',padding:3}}>
                            <Image style={styles.carrIcon} source={carrIcon} />
                            <Text style={{padding:5,fontFamily:titleFont,fontWeight:"200"}}>캐리어</Text>
                        </View>
                        <View style={{flexDirection:'row',margin:5}}>
                            {this.getCarrier()}
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
                            animationType = {'fade'}
                            transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => this.setModalVisible(false)}
                            render={
                                // 스크롤 뷰에서는 키보드가 다른 곳 클릭하면 자동으로 dismiss 되네 ..?
                                <ScrollView>
                                    <CalculModal 
                                        onOkButton = {() => this.setModalVisible(false)}
                                        onCancelButton = {() => this.setModalVisible(false)}/>
                                </ScrollView>
                            }/>
                    </View>
                </View>
            </View>
            <ScrollView horizontal={true} >
                <View style={styles.profileButton}>
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileText}>신영현    </Text>
                            <TouchableOpacity style={{paddingRight:10}} onPress={()=>Linking.openURL(`tel: 010-5480-9072`)}>
                                <Icon name="phone" color='#3FA9F5' size={vw(4)}>   </Icon>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight:10}} onPress={() => Communications.text('010-5480-9072')}>
                                <Icon name="mail" color='#3FA9F5' size={vw(4)}></Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileText}>신영현    </Text>
                            <TouchableOpacity style={{paddingRight:10}} onPress={()=>Linking.openURL(`tel: 010-5480-9072`)}>
                                <Icon name="phone" color='#3FA9F5' size={vw(4)}>   </Icon>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight:10}} onPress={() => Communications.text('010-5480-9072')}>
                                <Icon name="mail" color='#3FA9F5' size={vw(4)}></Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileText}>신영현    </Text>
                            <TouchableOpacity style={{paddingRight:10}} onPress={()=>Linking.openURL(`tel: 010-5480-9072`)}>
                                <Icon name="phone" color='#3FA9F5' size={vw(4)}>   </Icon>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight:10}} onPress={() => Communications.text('010-5480-9072')}>
                                <Icon name="mail" color='#3FA9F5' size={vw(4)}></Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileText}>신영현    </Text>
                            <TouchableOpacity style={{paddingRight:10}} onPress={()=>Linking.openURL(`tel: 010-5480-9072`)}>
                                <Icon name="phone" color='#3FA9F5' size={vw(4)}>   </Icon>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight:10}} onPress={() => Communications.text('010-5480-9072')}>
                                <Icon name="mail" color='#3FA9F5' size={vw(4)}></Icon>
                            </TouchableOpacity>
                        </View>
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
    calendar_time:{
        width:vw(17),
        flexDirection:'column',
        marginLeft:5,
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
        width:vw(28),
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
        fontFamily:titleFont,
        fontWeight:"200"
    },

    destination_text: {
        color: 'gray',
        flexDirection:'row',
        fontFamily:titleFont,
        fontWeight:"200"
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
        fontSize:vw(4),
        fontFamily:titleFont,
        fontWeight:"200"
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
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginRight: 5,
    },
    profileText: {
        color: '#3FA9F5',
        fontFamily:titleFont,
        fontWeight:"200"
    },
    realModal: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
