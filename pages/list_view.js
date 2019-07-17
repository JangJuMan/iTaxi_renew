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
            // 생성된 방들 표시
            <ScrollView>
                <View style={styles.container}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.date_bar}>오늘</Text>
                        <View style={{height: 1, borderColor: "#0b0b0b25", borderWidth: 1, flexGrow: 1,}}></View>
                    </View>
                    <View style={styles.item_list}>
                        <ListEntry />
                        <ListEntry />
                        <ListEntry />
                        <ListEntry />
                        <ListEntry />
                    </View>
                </View>
            </ScrollView>
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
    hrizontal_date_bar:{
        flexGrow: 1,
        borderBottomWidth: 1.0, 
        borderBottomColor: '#bbb',
        padding: 10,
        height: 24,
    },
    item_list:{
        marginRight: 20,
        marginLeft: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})