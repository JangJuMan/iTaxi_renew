import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, AppRegistry, Button, Alert, Switch } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { vw } from 'react-native-expo-viewport-units';
import { observer, inject } from 'mobx-react';
import titleFont from '../../variable/assets';


export default class version extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        const {navigation}=this.props;
        const date= navigation.getParam('date','');
        const title =navigation.getParam('title','');
        return (

            <View style={{ marginTop: vw(2) }}>
                <View style={styles.versionTop}>
                    <Text style={{ fontSize: vw(5), color: '#999999', fontFamily: titleFont, fontWeight: "200" }}>{date}</Text>
                    <View style={{ borderBottomWidth: 1, margin: 9, borderBottomColor: '#CCCCCC', flexGrow: 1, }}></View>
                </View>
                <View style={styles.versionBottom}>
                    <Text style={{ fontSize:vw(6), color: 'black', fontFamily: titleFont, fontWeight: "200" }}>#{title}</Text>
                </View>
                <View style={styles.box}>
                    <Text style={{ fontSize:vw(5), color: '#999999', fontFamily: titleFont, fontWeight: "200",textAlign:'center' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
                </View>

            </View>
        )


    }
}



const styles = StyleSheet.create({
    versionTop: {
        height: vw(8),
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    versionBottom: {
        flexDirection: 'row',
        marginTop: 20,
        height: vw(10),
        justifyContent: 'center',
        alignContent: 'center'
    },
    box:{
        width:vw(90),
        marginLeft:vw(4.5),

    }
})