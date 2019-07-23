import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaxiElement from '../components/taxiElement';

export default class ChatRoom extends Component{

    render(){
        return(
            <View style={styles.container}>
                <View style={{height:160,borderWidth:0.5}}>
                    <View style={{flex:2,flexDirection:'row',borderWidth:0.5}}>
                        <View style={{flex:3,borderWidth:0.5}}>
                            <View style={{flex:1,borderWidth:0.5}}></View>
                            <View style={{flex:3,padding:5, borderWidth:0.5}}>
                                <TaxiElement/>
                            </View>
                        </View>
                        <View style={{flex:1,borderWidth:0.5}}>
                            <View style={{flex:1,borderWidth:0.5}}></View>
                            <View style={{flex:1,borderWidth:0.5}}></View>
                        </View>
                    </View>
                    <View style={{flex:1,borderWidth:0.5}}></View>
                </View>
                
            </View>
            
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        
    },
})
