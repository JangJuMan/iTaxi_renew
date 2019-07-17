import React, { Component } from 'react';
import{
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

import ListEntry from './firstList';

export default class List_view extends Component{
    render(){
        return(
            <View style={{flex:1, flexDirection: 'column'}}>
                <View style={{flex:1}}>
                    <View style={{flexGrow: 1, flex: 1}}>
                        <View style={{flex: 1,paddingTop: 15,marginLeft : 24,}}>
                            <View style={styles.item_list}>
                                <Text>Something in here</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.horizontal_bar} />
                {/* 차량정보 나타내는 스크롤 뷰 */}
                <View style={{flex:3}}>
                    <ScrollView style={{flexGrow: 1, flex: 3}}>
                        <View style={{flex: 3,paddingTop: 15,marginLeft : 24,}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.date_bar}>OO월 OO일 O요일</Text>
                                <View style={styles.horizontal_date_bar}></View>
                            </View>
                            <View style={styles.item_list}>
                                <ListEntry style={{marginBottom:10}}time="13:20" from="한동대학교" to="포항역"/>
                                <ListEntry style={{marginBottom:10}}time="13:20" from="한동대학교" to="포항역"/>
                                <ListEntry style={{marginBottom:10}}time="13:20" from="한동대학교" to="포항역"/>
                                <ListEntry style={{marginBottom:10}}time="13:20" from="한동대학교" to="포항역"/>
                                <ListEntry style={{marginBottom:10}}time="13:20" from="한동대학교" to="포항역"/>
                                <ListEntry style={{marginBottom:10}}time="13:20" from="한동대학교" to="포항역"/>
                                <ListEntry style={{marginBottom:10}}time="13:20" from="한동대학교" to="포항역"/>
                                <ListEntry style={{marginBottom:10}}time="13:20" from="한동대학교" to="포항역"/>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        marginLeft : 24,
    },
    activity_indicator:{
        flex:1,
        justifyContent: "center",
    },
    date_bar:{
        color: '#bbb',
        fontSize: 18,
        padding: 10,
    },
    horizontal_bar:{
        borderBottomWidth: 1.0, 
        borderBottomColor: '#0b0b0b25',
        padding: 10,
        height: 24,
    },
    horizontal_date_bar:{
        borderColor: "#0b0b0b25", 
        borderWidth: 1, 
        flexGrow: 1,
    },
    horizontal_date_bar:{
        borderBottomWidth: 1.0, 
        borderBottomColor: '#0b0b0b25',
        flexGrow: 1,
    },
    item_list:{
        marginRight: 30,
        marginLeft: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
})
