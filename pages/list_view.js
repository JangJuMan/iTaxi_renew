import React, { Component } from 'react';
import{
    StyleSheet,
    Button,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

import ListEntry from './firstList';
import Calendar from './calender';

export default class List_view extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                {/* 중단 수평선 */}
                <View style={[styles.horizontal_divider]}>
                    <Calendar />
                </View>

                {/* 조회된 기록들 */}
                <ScrollView>
                    <View style={styles.log_container}>
                        <Text style={styles.date_of_logs}>OO월 OO일 O요일</Text>
                        <View style={styles.horizontal_date_bar}></View>
                    </View>
                    <View style={styles.log_contents}>
                        <ListEntry style={{marginBottom:20}}time="13:20" from="한동대학교" to="포항역"/>
                        <ListEntry style={{marginBottom:20}}time="13:20" from="한동대학교" to="포항역"/>
                    </View>
                    <View style={styles.log_container}>
                        <Text style={styles.date_of_logs}>OO월 OO일 O요일</Text>
                        <View style={styles.horizontal_date_bar}></View>
                    </View>
                    <View style={styles.log_contents}>
                        <ListEntry style={{marginBottom:20}}time="13:20" from="한동대학교" to="포항역"/>
                        <ListEntry style={{marginBottom:20}}time="13:20" from="한동대학교" to="포항역"/>
                        <ListEntry style={{marginBottom:20}}time="13:20" from="한동대학교" to="포항역"/>
                        <ListEntry style={{marginBottom:20}}time="13:20" from="한동대학교" to="포항역"/>
                        <ListEntry style={{marginBottom:20}}time="13:20" from="한동대학교" to="포항역"/>
                        <ListEntry style={{marginBottom:20}}time="13:20" from="한동대학교" to="포항역"/>
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
    horizontal_divider:{
        flexDirection: 'row', 
        alignItems:'center', 
        justifyContent:'space-between',
        borderBottomWidth: 1.0, 
        borderBottomColor: '#0b0b0b25', 
        padding: 5,
        // marginTop: 5,
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
        // For Debug
        // borderWidth:2,
    },
    log_container:{
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingTop: 10
    },
    log_contents:{
        marginLeft: 24, 
        marginRight: 24, 
    },
    date_of_logs:{
        color:'#bbb',
        fontSize:18,
        padding:10,
    },
    horizontal_date_bar:{
        borderBottomWidth: 1.0, 
        borderBottomColor: '#0b0b0b25',
        flexGrow: 1,
    },
})