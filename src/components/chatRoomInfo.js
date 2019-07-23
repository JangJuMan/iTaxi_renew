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
                <View style={{flex:1,borderWidth:0.5}}>
                    <View style={{flex:5,flexDirection:'row',borderWidth:0.5}}>
                        <View style={{flex:4,borderWidth:0.5}}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center',borderWidth:0.5}}>
                                <Text style={{ color: 'gray'}}>5월 30일</Text>
                            </View>
                            <View style={{flex:4, borderWidth:0.5}}>
                                <TaxiElement time="13:20" from="한동대학교" to="포항역"/>
                            </View>
                        </View>
                        <View style={{flex:1,borderWidth:0.5}}>
                            <View style={{flex:1,borderWidth:0.5}}>
                                <TouchableOpacity style = {styles.button}>
                                    <Text style={{color:'#4D8ECF'}}>방나가기</Text>
                                </TouchableOpacity>     
                            </View>
                            <View style={{flex:1,borderWidth:0.5}}>
                                <TouchableOpacity style = {styles.button}>
                                    <Text style={{color:'#4D8ECF'}}>정산하기</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:2,borderWidth:0.5,flexDirection:'row'}}>
                        <ScrollView horizontal={true}>
                            <TouchableOpacity style = {styles.button}>
                                
                                <Button
                                    title="Learn More"
                                    color="#4D8ECF"
                                    onPress={userinfo()}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.button}>
                                <Text style={{color:'#4D8ECF',margin:5}}>팀원2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.button}>
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
    button: {
        fontSize:10,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        flexDirection:'row'
    },
    slide: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
        text: {
            color: '#4dabf7',
            fontSize: 14,
            fontWeight: 'bold'
        },
})
