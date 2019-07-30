import React, { Component } from 'react';
import{ StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Button,Modal } from 'react-native';
import {inject, observer} from 'mobx-react';
import SearchMenu from '../components/searchMenu';
import ListEntry from '../components/taxiElement';
import MakeRoom from './going_into_room';
import Icon from 'react-native-vector-icons/Ionicons';
import ModlaControl from '../variable/modalControl';



@inject('userStore')

@observer
export default class TaxiList extends Component{
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

    componentDidMount() {
        const { userStore } = this.props;
        userStore.getTaxiList()
        .then(() =>
        console.log(userStore.taxiList))
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
                                <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                    <ListEntry style = {{marginBottom: 20}}time = {item.departure_time.substring(7)} from = {item.departure_place} to = {item.arrival_place}/>
                                </TouchableOpacity>
                            </View>
                        
                        }/>

                    </View>

                    
                        <Modal
                            transparent={true}
                            // visible={this.state.modalVisible}
                            visible={ModlaControl.modalVisible}
                            onRequestClose={() => this.setModalVisible(false)}>
                            <View style={styles.modalBackground}> 
                                    <View style={styles.activityIndicatorWrapper}>
                                    <MakeRoom 
                                        navigation={this.props.navigation}
                                    />
                                    
                                </View>
                            </View>
                        </Modal>
                    
                    
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
                                    <ListEntry style = {{marginBottom: 20}}time = {item.departure_time.substring(7)} from = {item.departure_place} to = {item.arrival_place}/>
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
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityIndicatorWrapper: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    }
})




