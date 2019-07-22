import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import SearchMenu from '../components/searchMenu';
import {seatImgs} from '../variable/assets';


export default class setting extends Component{
    render(){
        const seat1 = seatImgs[0];
        const seat2 = seatImgs[1];
        const seat3 = seatImgs[2];
        return(
            
            <View style={styles.list}>
                <View style={styles.flexone}>
                    <Text style={{color:'gray',fontSize:15 }}>택시모집</Text>
                </View>
                <View style={{flex:3,margin:5}}>
                    <SearchMenu/>
                </View>
                <View style={{flex:2,flexDirection:'row',}}>
                    <View style={styles.flexone}>
                        <Text style={{color:'gray' }}>시간</Text>
                    </View>
                    <View style={{flex:5,justifyContent:'center',alignItems:'center',}}>
                        <Text style={{color:'#4dabf7',fontSize:25,}}>16:25</Text>
                    </View>
                    <View style={{flex:1,}}></View>
                </View>
                <View style={{flex:2,flexDirection:'row',}}>
                    <View style={styles.flexone}>
                        <Text style={{color:'gray' }}>인원</Text>
                    </View>
                    <View style={{flex:5,justifyContent:'center',alignItems:'center',flexDirection:'row',}}>
                        <Image source ={seat1} style={styles.site}/>
                        <Image source ={seat2} style={styles.site}/>
                        <Image source ={seat3} style={styles.site}/>
                    </View>
                    <View style={{flex:1,}}></View>
                </View>
                <View style={styles.flexone}>
                    <Text style={{color:'#4dabf7',fontSize:17 }}>확인</Text>
                </View>
            </View>
        )
  
  
    }
  }
  
  const styles=StyleSheet.create({
    list:{
        height:400,
        backgroundColor:'white',
        width:300,
        margin:20,
        marginLeft:37,
        shadowColor:'gray',
        shadowOpacity:0.3,
        elevation: 3,
        flexDirection:'column',
      },
      flexone:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
      site:{
        width:30,
        height:30,
        margin:10
      }
    })