import React, { Component } from 'react';
import{ StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import {inject, observer} from 'mobx-react';
import SearchMenu from '../components/searchMenu';
import ListEntry from '../components/taxiElement';
import EnterRoom from '../components/going_into_room';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalControl from '../variable/modalControl';
import MakeRoom from '../components/modal/MakeRoom';
import Modal from '../elements/modal';
import titleFont from '../variable/assets'

@inject('taxiStore')
@observer
export default class TaxiList extends Component{
    state={
        modalVisible: false,
        dataReceive: false,
        carrierNum : -1,
        personNum : -1,
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <TouchableOpacity
                    onPress={() => ModalControl.modalVisible_taxi=true}>
                    <Icon style={{marginRight:10, color:'dodgerblue'}}name="ios-add-circle-outline" size={30}/>
                </TouchableOpacity>
            ),
        };
    };

    componentDidMount() {
        this.getTaxiData();
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    getTaxiData = () => {
        this.setState({ dataReceive: false });
        const { taxiStore } = this.props;
        taxiStore.getTaxiList().then(() => this.setState({ dataReceive: true }));
    }

    render(){
        const { taxiStore } = this.props;

        if (!this.state.dataReceive) {
            return (
                <View style={styles.conatiner}>
                    <SearchMenu style={{marginTop: 10, marginBottom: 10,}} />
                    <View style={styles.horizontal_divider} />

                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator
                            size="large"
                            color="blue" />
                    </View>
                </View>
            )
        }

        return (
            <View style={styles.conatiner}>
                <SearchMenu
                    onSearch={(departure, destination) => console.log(departure, destination)}
                    style={styles.search_menu} />
                <View style={styles.horizontal_divider} />

                <ScrollView>
                    <View style={styles.log_contents}>
                        <View style={styles.log_container}>
                            <Text style={styles.date_of_logs}>2019-08-01</Text>
                            <View style={styles.horizontal_date_bar}></View>
                        </View>
                        <FlatList
                            data = {taxiStore.taxiList}
                            keyExtractor={(item, index) => item._id.toString()}
                            renderItem = {({item}) => 
                            <View>
                                <TouchableOpacity onPress={() => {
                                    taxiStore.taxiId = item;
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

                {/* going in to room */}
                <Modal
                    animationType = {'fade'}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setModalVisible(false)}
                    render={
                    <EnterRoom 
                        onOkButton = {(CarrierInputFromGoingIntoRoom) => {
                            this.setModalVisible(false)
                            this.props.navigation.navigate('Chat', {Carrier: CarrierInputFromGoingIntoRoom})
                        }}
                        onCancelButton = {() => this.setModalVisible(false)}/>
                }/>

                {/* make new room */}
                <Modal
                    animationType = {'fade'}
                    transparent={true}
                    visible={ModalControl.modalVisible_taxi}
                    onRequestClose={() => ModalControl.modalVisible_taxi=false}
                    render={
                    <MakeRoom 
                        navigation={this.props.navigation}
                        onOkButton = {() => {
                            ModalControl.modalVisible_taxi=false, 
                            this.props.navigation.navigate('Chat', {Carrier: CarrierInputFromMakeRoom, Person: PersonInputFromMakeRoom});
                        }}
                        onCancelButton = {() => ModalControl.modalVisible_taxi=false}/>
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




