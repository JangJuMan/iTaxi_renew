import React, { Component } from 'react';
import{ StyleSheet, View, TouchableOpacity, FlatList, Text, ActivityIndicator, ScrollView } from 'react-native';
import { observer, inject } from 'mobx-react';
import moment from 'moment-timezone';
import ListEntry from '../components/carpoolElement';
import Icon from 'react-native-vector-icons/Ionicons';

import EmptyList from '../components/emptyList';
import EnterRoom from '../components/modal/enterRoom';
import MakeRoom from '../components/modal/MakeRoom';
import ModalControl from '../variable/modalControl';
import SearchMenu from '../components/searchMenu';
import Modal from '../elements/modal';

@inject('carpoolStore')
@observer
export default class CarpoolList extends Component{
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <TouchableOpacity
                    onPress={() => ModalControl.modalVisible_carpool=true}>
                    <Icon style={{marginRight:10, color:'dodgerblue'}}name="ios-add-circle-outline" size={35}/>
                </TouchableOpacity>
            ),
        };
    };

    state = {
        dataReceive: true,
        currentDate: moment(),
        modalVisible: false,
        delayedRender: false,
    }

    componentDidMount() {
        this.getCarpoolData(moment().tz('Asia/Seoul').format('YYYYMMDD'));
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    getCarpoolData(date) {
        const { carpoolStore } = this.props;
        this.setState({ dataReceive: false },
            () => {
                setTimeout(() => {
                    if (!this.state.dataReceive) this.setState({ delayedRender: true });
                }, 300);
                carpoolStore.getCarpoolList(date)
                    .then(() => this.setState({ dataReceive: true, delayedRender: false }));
            });
    }

    render(){
        const { carpoolStore } = this.props;
        return(
            <View style={styles.container}>
                <SearchMenu 
                    style={styles.search_menu}
                    onSearch={(departure, destination) => console.log(departure, destination)}
                    onDateChange={(date) => {
                        this.setState({ currentDate: date });
                        this.getCarpoolData(date.format('YYYYMMDD'));
                    }}
                    style={{marginTop: 10, marginBottom: 10}}/>
                <View style={styles.horizontal_divider} />

                {!this.state.dataReceive && this.state.delayedRender && 
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator
                            size="large"
                            color="blue" />
                    </View>
                }
                {this.state.dataReceive && carpoolStore.carpoolList.length == 0 &&
                    <View style={styles.log_contents}>
                        <View style={styles.log_container}>
                            <Text style={styles.date_of_logs}>{this.state.currentDate.locale('ko').format('YYYY-MM-DD dddd')}</Text>
                            <View style={styles.horizontal_date_bar}></View>
                        </View>
                        <EmptyList navigation={this.props.navigation}/>
                    </View>
                }
                {this.state.dataReceive && carpoolStore.carpoolList.length > 0 &&
                    <ScrollView>
                        <View style={styles.log_contents}>
                            <View style={styles.log_container}>
                                <Text style={styles.date_of_logs}>{this.state.currentDate.locale('ko').format('YYYY-MM-DD dddd')}</Text>
                                <View style={styles.horizontal_date_bar}></View>
                            </View>
                            <FlatList
                                data={carpoolStore.carpoolList}
                                keyExtractor={(item, index) => item._id.toString()}
                                renderItem = {({item}) => 
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        carpoolStore.carpool = item;
                                        this.setModalVisible(true);
                                    }}>
                                        <ListEntry
                                            style={[styles.list_entry, item.curr_people == item.num_people ? {backgroundColor: '#E6E6E6'} : null]}
                                            date={item.departure_date}
                                            time={item.departure_time}
                                            from={item.departure_place}
                                            to={item.arrival_place}
                                            seat={item.num_people}
                                            carrier={item.num_carrier}/>
                                    </TouchableOpacity>
                                </View>
                            }/>
                        </View>
                    </ScrollView>
                }

                <Modal
                    animationType={'fade'}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setModalVisible(false)}
                    render={
                        <EnterRoom
                            onOkButton={(carrier) => {
                                this.setModalVisible(false);
                                this.props.navigation.navigate('Chat', { Carrier: carrier });
                            }}
                            onCancelButton={() => this.setModalVisible(false)} />
                    } />

                <Modal
                    animationType={'fade'}
                    transparent={true}
                    visible={ModalControl.modalVisible_carpool}
                    onRequestClose={() => ModalControl.modalVisible_carpool=false}
                    render={
                        <MakeRoom 
                            navigation={this.props.navigation}
                            onOkButton = {() => {
                                ModalControl.modalVisible_carpool=false,
                                this.props.navigation.navigate('Chat');
                            }}
                            onCancelButton = {() => ModalControl.modalVisible_carpool=false}/>
                    }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
    },
        search_menu: {
            marginTop: 10,
            marginBottom: 10,
        },
        horizontal_divider:{
            borderBottomWidth: 1.0, 
            borderBottomColor: '#0b0b0b25',
        },

        log_container:{
            flexDirection: 'row', 
            alignItems: 'center', 
            paddingTop: 10
        },
            date_of_logs:{
                color: '#bbb',
                fontSize: 18,
                padding: 10,
                fontFamily:'titleFont',
                fontWeight:"200"
            },
            horizontal_date_bar:{
                borderBottomWidth: 1.0, 
                borderBottomColor: '#0b0b0b25',
                flexGrow: 1,
            },

        log_contents:{
            marginLeft: 24, 
            marginRight: 24, 
        },
            list_entry: {
                marginBottom: 20,
            },

    date_of_logs:{
        color: '#bbb',
        fontSize: 18,
        padding: 10,
        paddingLeft: 0,
    },
    horizontal_date_bar:{
        borderBottomWidth: 1.0, 
        borderBottomColor: '#0b0b0b25',
        flexGrow: 1,
    },
    log_container:{
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingTop: 10
    },
})