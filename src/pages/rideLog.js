import React, { Component } from 'react';
import{ StyleSheet, Text, View, ScrollView, TouchableOpacity,FlatList } from 'react-native';
import { inject, observer } from 'mobx-react';

import ListEntry from '../components/taxiElement';

@inject('userStore')
@observer
export default class RiderLog extends Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const { userStore } = this.props;
        userStore.getLog();
    }
    render(){
        const { userStore } = this.props;
        return(
            <View style={{flex:1}}>
                {/*  곧 탑승예정 */}
                <Text style={styles.top_title}>곧 탑승 예정</Text>
                <TouchableOpacity>
                    <View style={styles.top_highlighted_log}>
                        <ListEntry time="13:20" from="한동대학교" to="포항역"/>
                    </View>
                </TouchableOpacity>
                {/* 중단 수평선 */}
                <View style={styles.past_log}>
                    <Text style={styles.past_log_title}>지난탑승내역</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={{marginRight:10}}>
                            <Text style={styles.taxi_carpool_font}>택시</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginRight:10}}>
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
                    <FlatList
                            data = {userStore.taxiList}
                            
                            renderItem = {({item}) => 
                            <View>
                            <TouchableOpacity>
                                <ListEntry style = {{marginBottom: 20}}time = {item.departure_time} from = {item.departure_place} to = {item.arrival_place}/>
                            </TouchableOpacity>
                            
                            </View>
                        
                        }/>
                    </View>
                    <View style={styles.past_log_container}>
                        <Text style={styles.past_date_bar}>OO월 OO일 O요일</Text>
                        <View style={styles.horizontal_past_date_bar}></View>
                    </View>
                    <View style={styles.past_log_contents}>
                    <FlatList
                            data = {userStore.taxiList}
                            
                            renderItem = {({item}) => 
                            <View>
                            <TouchableOpacity>
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
