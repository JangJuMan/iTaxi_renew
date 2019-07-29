import React, { Component } from 'react';
<<<<<<< HEAD
import{ StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
=======
import{ StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Button,Modal } from 'react-native';
>>>>>>> afdd4ed873ca82216d455b8694fbb6b0309fb41f
import axios from 'axios';
import {inject, observer} from 'mobx-react';
import SearchMenu from '../components/searchMenu';
import ListEntry from '../components/taxiElement';
import intoRoom from './going _into_room';
<<<<<<< HEAD
=======
import MakeRoom from '../pages/going _into_room';
import Icon from 'react-native-vector-icons/Ionicons';
import ModlaControl from '../variable/modalControl';

>>>>>>> afdd4ed873ca82216d455b8694fbb6b0309fb41f


@inject('userStore')

@observer
export default class TaxiList extends Component{
<<<<<<< HEAD
   constructor(props) {
       super(props);
       
   }
=======
    state={
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
        ModlaControl.modalVisible = visible;
    }

    constructor(props) {
        super(props);
    }

>>>>>>> afdd4ed873ca82216d455b8694fbb6b0309fb41f
    componentDidMount() {
        const { userStore } = this.props;
        userStore.getTaxiList()
        .then(() =>
        console.log(userStore.taxiList))
<<<<<<< HEAD
      }
=======
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('createTaxiRoomInfo')}>
                    <Icon style={{marginRight:10, color:'dodgerblue'}}name="ios-add-circle-outline" size={30}/>
                </TouchableOpacity>
            ),
        };
    };
>>>>>>> afdd4ed873ca82216d455b8694fbb6b0309fb41f

    render(){
        const {userStore} = this.props;

        return(
            
            <View style={styles.conatiner}>
                <View style={styles.horizontal_divider}>
                    <SearchMenu />
                </View>

                <ScrollView>
                    <View style={styles.log_container}>
                        <Text style={styles.date_of_logs}>OO월 OO일 O요일</Text>
                        <View style={styles.horizontal_date_bar}></View>
                    </View>
                    <View style={styles.log_contents}>
                    <FlatList
                            data = {userStore.taxiList}
                            keyExtractor={(item, index) => item.taxi_id.toString()}
                            renderItem = {({item}) => 
                            <View>
<<<<<<< HEAD
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('RoomDoor')}>
                                <ListEntry style = {{marginBottom: 20}}time = {item.departure_time.substring(7)} from = {item.departure_place} to = {item.arrival_place}/>
                            </TouchableOpacity>
                            
=======
                                <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                    <ListEntry style = {{marginBottom: 20}}time = {item.departure_time} from = {item.departure_place} to = {item.arrival_place}/>
                                </TouchableOpacity>
>>>>>>> afdd4ed873ca82216d455b8694fbb6b0309fb41f
                            </View>
                        
                        }/>

                    </View>

                    <View>
                        <Modal
                            transparent={false}
                            // visible={this.state.modalVisible}
                            visible={ModlaControl.modalVisible}
                            onRequestClose={() => this.setModalVisible(false)}>
                            <View style={{marginTop: 22}}>
                                <View>
                                    <MakeRoom 
                                        navigation={this.props.navigation}
                                    />
                                    <TouchableOpacity onPress={() => this.setModalVisible(false)}>
                                        <Text>Hide Modal</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    
                    <View style={styles.log_container}>
                        <Text style={styles.date_of_logs}>OO월 OO일 O요일</Text>
                        <View style={styles.horizontal_date_bar}></View>
                    </View>
                    
                    
                    <View style={styles.log_contents}>
                        <FlatList
                            data = {userStore.taxiList}
                            keyExtractor={(item, index) => item.taxi_id.toString()}
                            renderItem = {({item}) => 
                            <View>
                                <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                    <ListEntry style = {{marginBottom: 20}}time = {item.departure_time} from = {item.departure_place} to = {item.arrival_place}/>
                                </TouchableOpacity>
                            </View>
                        }/>
                    </View>
                    
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
    },
    
    horizontal_divider:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        borderBottomWidth: 1.0, 
        borderBottomColor: '#0b0b0b25', 
        padding: 5,
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
})




