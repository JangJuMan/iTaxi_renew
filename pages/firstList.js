import React, { Component } from 'react';
import {AppRegistry, Text, View,StyleSheet,Image} from 'react-native';

export default class List extends Component{
    render(){
      return(
        <View style={styles.container}>
            <View style={styles.list}>
                
                <View style={{flex:1,flexDirection:"column"}}>
                    <View style={styles.time_location}>
                        <Text style={{color:'gray',fontSize:20}}>13:00</Text>

                    </View>
                    <View style={styles.time_location}>
                        <Image source ={require('./site.png')} style={{width:30,height:30}}/>
                     </View>
                </View>


                <View style={{flex:3,flexDirection:'row'}}>
                    <View style={{flex:2,justifyContent:'center',alignItems:'flex-end',}}>
                        <Image source ={require('./len.png')} style={{width:20,height:80}}/>
                    </View>
                    
                    
                    <View style={{flex:9,flexDirection:'column'}}>
                        <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-start',}}>
                            <Text style={{marginTop:6,color:'gray',paddingTop:5}}>포항역</Text>
                        </View>
                        <View style={{flex:1,justifyContent:'flex-end',flexDirection:'row'}}>
                            <View style={{flex:1}}>
                                    <Text style={{marginTop:6,color:'gray',paddingBottom:10,}}>한동대학교</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row'}}>
                                    <Image source ={require('./carrier.png')} style={styles.carrier}/>
                                    <Image source ={require('./carrier.png')} style={styles.carrier}/>
                                    <Image source ={require('./carrier.png')} style={styles.carrier}/>
                                    <Image source ={require('./carrier.png')} style={styles.carrier}/>
                            </View>
                           

                        </View>
                    
                    
                    </View>


                </View>


                    
            
            </View>
        </View>
      )
  
  
    }
  }

  const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        marginBottom: 10,
    },
    list:{
        padding:20,
        paddingLeft: 5,

       
        backgroundColor:'white',
        elevation: 5,
       
        flexDirection:"row",
        shadowOffset:{width:6,height:6},
        shadowColor:'black',
        shadowOpacity:0.5,      
      },

     time_location:{
        flex:1 , 
        flexDirection: 'row', 
        justifyContent:'flex-end',
        alignItems:'center'

    },
     carrier:{
        width:20,
        height:30,
        marginRight:2

     }

    })
  
  
  
  AppRegistry.registerComponent('AwesomeProject', () =>list);