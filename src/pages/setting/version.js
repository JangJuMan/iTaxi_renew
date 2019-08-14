import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, AppRegistry, Button, Alert, Switch } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { vw } from 'react-native-expo-viewport-units';
import { observer, inject } from 'mobx-react';
import titleFont from '../variable/assets';


export default class Setting extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (

            <View style={{ marginTop: vw(10) }}>
                <View style={styles.versionTop}>
                    <Text style={{ fontSize: 15, color: '#3FA9F5', fontFamily: titleFont, fontWeight: "200" }}>Version</Text>
                    <View style={{ borderBottomWidth: 1, margin: 9, borderBottomColor: '#CCCCCC', flexGrow: 1, }}></View>
                </View>
                <View style={styles.versionBottom}>
                    <Text style={{ fontSize: 16, color: 'black', fontFamily: titleFont, fontWeight: "200" }}>2.0.0-alpha</Text>
                </View>
                <View style={styles.versionTop}>
                    <Text style={{ fontSize: 15, color: '#3FA9F5', fontFamily: titleFont, fontWeight: "200" }}>Developer</Text>
                    <View style={{ borderBottomWidth: 1, margin: 9, borderBottomColor: '#CCCCCC', flexGrow: 1, }}></View>
                </View>
                <View style={styles.versionBottom}>
                    <Text style={{ fontSize: 16, color: 'black', fontFamily: titleFont, fontWeight: "200" }}>CRA</Text>
                </View>
            </View>
        )


    }
}



const styles = StyleSheet.create({
    versionTop: {
        height: vw(5),
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    versionBottom: {
        flexDirection: 'row',
        marginTop: 20,
        height: vw(10),
        justifyContent: 'center',
        alignContent: 'center'
    },
})