import React, { Component } from 'react';
import{ StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import SearchMenu from '../components/searchMenu';
import ListEntry from '../components/taxiElement';
import NewRoom from '../components/newRoom';
import Icon from 'react-native-vector-icons/Ionicons';
import EmptyList from '../components/emptyList';


export default class ListView extends Component{
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <TouchableOpacity
                    onPress={() => navigation.navigate('createCarpoolRoomInfo')}>
                    <Icon style={{marginRight:10, color:'dodgerblue'}}name="ios-add-circle-outline" size={30}/>
                </TouchableOpacity>
            ),
        };
    };

    render(){
        return(
            <EmptyList 
                navigation={this.props.navigation}/>
        );
    }
}
