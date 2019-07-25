import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,Modal,TouchableHighlight,TouchableOpacity} from 'react-native';
import axios from 'axios';
import {inject, observer} from 'mobx-react';
import SearchMenu from '../components/searchMenu';
import ListEntry from '../components/taxiElement';
import intoRoom from './going _into_room';
import MakeRoom from '../pages/settingscreen';

@inject('userStore')

@observer
export default class TaxiList extends Component{
   constructor(props) {
       super(props);
       
   }
    componentDidMount() {
        const { userStore } = this.props;
        userStore.getTaxiList()
        .then(() =>
        console.log(userStore.taxiList))
      }

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
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('RoomDoor')}>
                                <ListEntry style = {{marginBottom: 20}}time = {item.departure_time} from = {item.departure_place} to = {item.arrival_place}/>
                            </TouchableOpacity>
                            
                            </View>
                        
                        }/>

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
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('RoomDoor')}>
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



