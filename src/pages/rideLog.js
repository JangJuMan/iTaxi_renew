import React, { Component } from 'react';
import{ StyleSheet, Text, View, ScrollView, TouchableOpacity,FlatList, Button } from 'react-native';
import { inject, observer } from 'mobx-react';
import { observable, computed } from 'mobx';
import Swiper from 'react-native-swiper'
import List from '../components/list';

import ListEntry from '../components/taxiElement';

@inject('taxiStore')
@inject('carpoolStore')

@observer
export default class RiderLog extends Component{
    constructor(props) {
        super(props);
    }

    state = {
        check : 'taxi'
    }

    componentDidMount() {
        const { taxiStore } = this.props;
        const { carpoolStore } = this.props;
        taxiStore.getTaxiList();
        carpoolStore.getCarpoolList();
    }


    checkTaxi = () => {
        check = 'taxi';
        console.log(check);
    }
    
    checkCarpool = () => {
        check = 'carpool';
        console.log(check);
    }

    render(){
        // const check = 'taxi';
            return (
                <View style={{flex:1}}>
                {/* 곧 탑승예정 */}
                <Text style={styles.top_title}>곧 탑승 예정</Text>
                <TouchableOpacity
                    onPress = {() => {
                        this.props.navigation.navigate('pastRoom');
                    }}>
                    <View style={styles.top_highlighted_log}>
                        <ListEntry time = '13:00' from="한동대학교" to="포항역"/>
                    </View>
                </TouchableOpacity>

                {/* 중단 수평선 */}
                <View style={styles.past_log}>
                    <Text style={styles.past_log_title}>지난탑승내역</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                            style={{marginRight:10}}
                            onPress = {
                                this.checkTaxi}
                        >
                            <Text style={styles.taxi_carpool_font}>택시</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{marginRight:10}}
                            onPress = {
                                this.checkCarpool}
                        >
                            <Text style={styles.taxi_carpool_font}>카풀</Text>
                        </TouchableOpacity>   
                    </View>
                </View>
                {/* 지난 탑승 내역들 */}                
                <ScrollView>
                    <View style={styles.past_log_container}>
                        <Text style={styles.past_date_bar}>OO월 OO일 O요일</Text>
                        <View style={styles.horizontal_past_date_bar}></View>
                    </View>
                    <View style={styles.past_log_contents}>
                        <List check={this.state.check}/>
                    </View>
                    
                </ScrollView>
            </View>

            )
       
    }
}

const styles = StyleSheet.create({
    top_title:{
        color:'#89B2E9',
        fontSize:18, 
        fontWeight: 'bold', 
        margin: 10, 
        marginLeft: 24
    },
    top_highlighted_log:{
        marginRight: 24, 
        marginLeft:24,
        borderWidth:2, 
        borderColor: '#00BFFF',
    },
    past_log:{
        flexDirection: 'row', 
        alignItems:'center', 
        justifyContent:'space-between',
        borderBottomWidth: 1.0, 
        borderBottomColor: '#0b0b0b25', 
        padding: 5,
        marginTop: 5,
    },
    past_log_title:{
        fontSize: 16, 
        color: '#a0a0a0', 
        fontWeight: 'bold', 
        marginLeft:14,
    },
    taxi_carpool_font:{
        color:'#89B2E9', 
        fontSize:16, 
        padding:5,
        paddingRight:15,
        paddingLeft:15,
    },
    past_log_container:{
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingTop: 10
    },
    past_log_contents:{
        marginLeft: 24, 
        marginRight: 24, 
    },
    past_date_bar:{
        color:'#bbb',
        fontSize:18,
        padding:10,
    },
    horizontal_past_date_bar:{
        borderBottomWidth: 1.0, 
        borderBottomColor: '#0b0b0b25',
        flexGrow: 1,
    },
})
