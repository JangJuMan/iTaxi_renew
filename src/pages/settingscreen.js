import React, { Component } from 'react';
import { View, Text,StyleSheet,Image} from 'react-native';
import SearchMenu from '../components/searchMenu';
import {seatImg} from '../variable/assets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalControl from '../variable/modalControl';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { vw } from 'react-native-expo-viewport-units';

export default class setting extends Component{
  constructor(props){
    super(props);
}
    render(){  
        const seat_img=seatImg;
        return(
            <View style={styles.container}>
                <View style={{flexDirection:'row', alignItems:'center' }}>
                    <Text style={{fontSize:'15',color:'#3FA9F5'}}>profile</Text>
                    <View style={{borderBottomWidth: 3.0, borderBottomColor: '#CCCCCC', flexGrow: 1,}}></View>
                </View>
                
                <View style={{height:vw(50),flexDirection:'row',alignItems:'center' }}>
                    <Text style={{fontSize:'15',color:'#3FA9F5'}}>alarm</Text>
                    <View style={{borderBottomWidth: 3.0, borderBottomColor: '#CCCCCC', flexGrow: 1,}}></View>
                </View>

                <View style={{height:vw(30),borderWidth:0.5,flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:'15',color:'#3FA9F5'}}>contact</Text>
                    <View style={{borderBottomWidth: 3.0, borderBottomColor: '#CCCCCC', flexGrow: 1,}}></View>
                </View>

                <View style={{height:vw(20),borderWidth:0.5,}}></View>
                <View>

                </View>

            </View>
        )
  
  
    }
  }
  
  

  const styles=StyleSheet.create({
    container:{
        // flex:1,
      },
    })