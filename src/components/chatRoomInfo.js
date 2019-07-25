import React, { Component } from 'react';
import { StyleSheet, Text, View,Button, TouchableOpacity,ScrollView } from 'react-native';
import TaxiElement from '../components/taxiElement';


function userinfo(){
    <Text style={{color:'#4D8ECF',margin:5}}>방나가기</Text>
};
export default class ChatRoom extends Component{

    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:1,}}>
                    <View style={styles.taxiinfo_twoButton}>
                        <View style={styles.taxiinfo}>
                            <View style={styles.day}>
                                <Text style={{ color: 'gray'}}>5월 30일</Text>
                            </View>
                            <View style={styles.taxi_element}>
                                <TaxiElement time="13:20" from="한동대학교" to="포항역"/>
                            </View>
                        </View>
                        <View style={styles.twoButton}>
                            <View style={styles.roomExit_button}>
                                <TouchableOpacity style = {styles.button}>
                                    <Text style={{color:'#4D8ECF'}}>방나가기</Text>
                                </TouchableOpacity>     
                            </View>
                            <View style={styles.charge_button}>
                                <TouchableOpacity style = {styles.button}>
                                    <Text style={{color:'#4D8ECF'}}>정산하기</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.roommates}>
                        <ScrollView horizontal={true}>
                            <TouchableOpacity style = {styles.mates}>
                                
                                <Button
                                    title="Learn More"
                                    color="#4D8ECF"
                                    onPress={userinfo()}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.mates}>
                                <Text style={{color:'#4D8ECF',margin:5}}>팀원2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.mates}>
                                <Text style={{color:'#4D8ECF',margin:5}}>팀원3</Text>
                            </TouchableOpacity>
                            
                        
                        </ScrollView>
                    </View>
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
    
    taxiinfo_twoButton:{
        flex:5,
        flexDirection:'row',
    },
        taxiinfo:{
            flex:4,
        },
            day:{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
            },
            taxi_element:{
                flex:4, 
            },
        twoButton:{
            flex:1,
        },
            roomExit_button:{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
            },
            charge_button:{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
            },
    roommates:{
        flex:2,
        flexDirection:'row'
    },
        mates: {
            fontSize:10,
            justifyContent:'center',
            alignItems:'center',
            flex:1,
            flexDirection:'row'
        },
    
})
