import React, { Component } from 'react';
import{ StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import SearchMenu from '../components/searchMenu';
import ListEntry from '../components/taxiElement';
import intoRoom from './going _into_room';

export default class TaxiList extends Component{
    
    render(){
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('RoomDoor')}>
                            <ListEntry style={{marginBottom:20}}time="13:20" from="한동대학교" to="포항역"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListEntry style={{marginBottom:20}}time="13:20" from="한동대학교" to="포항역"/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.log_container}>
                        <Text style={styles.date_of_logs}>OO월 OO일 O요일</Text>
                        <View style={styles.horizontal_date_bar}></View>
                    </View>
                    <View style={styles.log_contents}>
                        <TouchableOpacity>
                            <ListEntry style={{marginBottom:20}}time="13:20" from="한동대학교" to="포항역"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListEntry style={{marginBottom:20}}time="13:20" from="한동대학교" to="포항역"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListEntry style={{marginBottom:20}}time="13:20" from="한동대학교" to="포항역"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListEntry style={{marginBottom:20}}time="13:20" from="한동대학교" to="포항역"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListEntry style={{marginBottom:20}}time="13:20" from="한동대학교" to="포항역"/>
                        </TouchableOpacity>
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




