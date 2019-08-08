import React, { Component } from 'react';
import{ StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Button,} from 'react-native';
import {inject, observer} from 'mobx-react';
import SearchMenu from '../components/searchMenu';
import ListEntry from '../components/taxiElement';
import EnterRoom from './going_into_room';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalControl from '../variable/modalControl';
import { vw }  from 'react-native-expo-viewport-units';
import MakeRoom from '../pages/MakeRoom';
import Modal from '../elements/modal'


@inject('taxiStore')

@observer
export default class TaxiList extends Component{
    state={
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { taxiStore } = this.props;
        taxiStore.getTaxiList();
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

    render(){
        const {taxiStore} = this.props;

        return(
            
            <View style={styles.conatiner}>
                <SearchMenu
                    style={{marginTop: 10, marginBottom: 10,}} />
                <View style={styles.horizontal_divider} />

                <ScrollView>
                    <View style={styles.log_container}>
                        <Text style={styles.date_of_logs}>OO월 OO일 O요일</Text>
                        <View style={styles.horizontal_date_bar}></View>
                    </View>
                    <View style={styles.log_contents}>
                    <FlatList
                            data = {taxiStore.taxiList}
                            keyExtractor={(item, index) => item._id.toString()}
                            renderItem = {({item}) => 
                            <View>
                                <TouchableOpacity onPress={() => {
                                    taxiStore.taxiId = item;
                                    this.setModalVisible(true);
                                }}>
                                    <ListEntry style = {{marginBottom: 20}}time = {item.departure_time} from = {item.departure_place} to = {item.arrival_place} seat={item.num_people} carrier={item.num_carrier}/>
                                </TouchableOpacity>
                            </View>
                        }/>

                    </View>

                    
                        <Modal
                            transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => this.setModalVisible(false)}
                            render={
                            <View style={styles.modalBackground}> 

                                <View style={styles.realModal}>
                                    <EnterRoom 
                                        navigation={this.props.navigation}
                                        onOkButton = {() => this.setModalVisible(false)}
                                        onCancelButton = {() => this.setModalVisible(false)}/>
                                </View>
                            </View>
                            }/>
                    
                    
                    <View style={styles.log_container}>
                        <Text style={styles.date_of_logs}>OO월 OO일 O요일</Text>
                        <View style={styles.horizontal_date_bar}></View>
                    </View>
                    
                    
                    <View style={styles.log_contents}>
                        <FlatList
                            data = {taxiStore.taxiList}
                            keyExtractor={(item, index) => item._id.toString()}
                            renderItem = {({item}) => 
                            <View>
                                <TouchableOpacity 
                                    onPress={() => {
                                        this.setModalVisible(true);
                                        taxiStore.taxiId = item;
                                    }}>
                                    <ListEntry style = {{marginBottom: 20}}time = {item.departure_time} from = {item.departure_place} to = {item.arrival_place}  seat={item.num_people} carrier={item.num_carrier}/>
                                </TouchableOpacity>
                            </View>
                        }/>
                    </View>
                    
                </ScrollView>

                <Modal
                    transparent={true}
                    visible={ModalControl.modalVisible_taxi}
                    onRequestClose={() => ModalControl.modalVisible_taxi=false}
                    render={
                    <View style={styles.modalBackground}>
                        <View style={styles.realModal}>
                            <MakeRoom 
                                navigation={this.props.navigation}
                                onOkButton = {() => {
                                    ModalControl.modalVisible_taxi=false, 
                                    this.props.navigation.navigate('TaxiRoom');
                                }}
                                onCancelButton = {() => ModalControl.modalVisible_taxi=false}/>
                        </View>
                    </View>
                    }/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
    },
    
    horizontal_divider:{
        borderBottomWidth: 1.0, 
        borderBottomColor: '#0b0b0b25',
    },

    log_contents:{
        marginLeft: 24, 
        marginRight: 24, 
    },
    date_of_logs:{
        color: '#bbb',
        fontSize: 18,
        padding: 10,
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
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    realModal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})




