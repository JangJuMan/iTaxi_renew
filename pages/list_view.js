import React, { Component } from 'react';
import{
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class List_view extends Component{
    render(){
        return(
            // 생성된 방들 표시
            <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.date_bar}>오늘</Text>
                    <Text style={styles.hrizontal_date_bar}></Text>
                </View>
                <View style={styles.item_list}>
                    <Text style={styles.item}>HI Mr.</Text>
                    <Text style={styles.item}>HI Mr.</Text>
                    <Text style={styles.item}>HI Mr.</Text>
                    <Text style={styles.item}>HI Mr.</Text>
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
    hrizontal_date_bar:{
        flexGrow: 1,
        borderBottomWidth: 1.0, 
        borderBottomColor: '#bbb',
        padding: 10,
        height: 24,
    },
    item_list:{
        marginRight: 34,
        marginLeft: 10,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})