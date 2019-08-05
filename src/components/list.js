import React, { Component } from 'react';
import{ StyleSheet, Text, View, ScrollView, TouchableOpacity,FlatList, Button } from 'react-native';
import { inject, observer } from 'mobx-react';
import { observable, computed } from 'mobx';
import ListEntry from '../components/taxiElement';

@inject('taxiStore')
@inject('carpoolStore')
/**
 * @props check taxi or carpool
 */


export default class list extends Component {
    constructor(props) {
        super(props);
        console.log(`~~~~~~~~~~~~~~~${this.props.check}`);
    }


    render() {
        const { taxiStore } = this.props;
        const { carpoolStore } = this.props;
        if(this.props.check === 'taxi') {
            console.log(1);
            return (
                <View>
                    <FlatList
                                data = {taxiStore.taxi}
                                
                                keyExtractor={(item, index) => item.taxi_id.toString()}
                                renderItem = {({item}) => 
                                <View>
                                    <TouchableOpacity
                                        onPress = {() => {
                                            taxiStore.taxiId = item;
                                            this.props.navigation.navigate('pastRoom');
                                        }}>
                                        <ListEntry style = {{marginBottom: 20}}time = {item.departure_time.substring(7)} from = {item.departure_place} to = {item.arrival_place} seat={item.num_people} carrier={item.num_carrier}/>
                                    </TouchableOpacity>
                                </View>
                            
                            }/>
                </View>
            )
        }
        else if(this.props.check === 'carpool'){
            console.log(2);
            return (
                <View>
                    <FlatList
                                data = {carpoolStore.carpool}
                                
                                keyExtractor={(item, index) => item.carpool_id.toString()}
                                renderItem = {({item}) => 
                                <View>
                                    <TouchableOpacity
                                        onPress = {() => {
                                            carpoolStore.carpoolId = item;
                                            this.props.navigation.navigate('pastRoom');
                                        }}>
                                        <ListEntry style = {{marginBottom: 20}}time = {item.departure_time.substring(7)} from = {item.departure_place} to = {item.arrival_place} seat={item.num_people} carrier={item.num_carrier}/>
                                    </TouchableOpacity>
                                </View>
                            
                            }/>
                </View>
            )
        }
    }

}