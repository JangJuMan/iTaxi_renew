import React, { Component } from 'react';
import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalControl from '../variable/modalControl';
import OC from 'open-color';
import { vw, vh }  from 'react-native-expo-viewport-units';
import { observer, inject } from 'mobx-react';

/**
 * @props onOkButton      press enter room button (ok button)
 * @props onCancelButton  press cancel button
 */
@inject('taxiStore')

@observer
export default class intoRoom extends Component{
  constructor(props){
      super(props);
  }

  componentDidMount() {
    const { taxiStore } = this.props;
    taxiStore.getTaxiList();
  }
    render(){
      const { taxiStore }  = this.props;
      const data = taxiStore.taxiId;
        return(
            <View style={styles.list}>
                <View style={styles.top}>
                    <Text style={{color:'black',fontSize:15 }}>방들어가기</Text>
                </View>
              
                <View style={styles.fromTo}>
                  <View style={styles.location}>
                  {/* 출발지,도착지는 props로 받기 */}
                      <Text style={styles.locationText}>{data.departure_place}</Text>
                      
                  </View>
                      <Icon style={styles.arrow} name="arrow-right" size={vw(7)} color="gray" />
                  <View style={styles.location}>
                            <Text style={styles.locationText}>{data.arrival_place}</Text>
                  </View>
                </View>
                <View style={styles.time_person_bag}>
                    <View style={styles.flextwo}>
                        <Text style={{color:'gray' }}>시간</Text>
                    </View>
                    <View style={{flex:5,justifyContent:'center',alignItems:'center',}}>
                        <Text style={{color:'#3FA9F5',fontSize:25,}}>{data.departure_time.substring(7)}</Text>
                    </View>
                    <View style={{flex:1,}}></View>
                </View>

         
                <View style={styles.time_person_bag}>
                    <View style={styles.flextwo}>
                        <Text style={{color:'gray' }}>캐리어</Text>
                    </View>
                    <View style={{flex:5,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',}}>
                      <TouchableOpacity>
                        <Icon name="numeric-1-circle-outline" size={30} color="#3FA9F5"/>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Icon name="numeric-2-circle-outline" size={30} color="#3FA9F5"/>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Icon name="numeric-3-circle-outline" size={30} color="#3FA9F5"/>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex:1,}}></View>
                </View>
                <View style={styles.button}>
                  <TouchableOpacity onPress={() => {
                      // ModalControl.modalVisible=false;
                      this.props.onOkButton();
                      this.props.navigation.navigate('TaxiRoom');

                    }}>
                    <Text style={{color:'#3FA9F5',fontSize:17 }}>확인</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                      this.props.onCancelButton();
                      // ModalControl.modalVisible=false;
                      // this.props.navigation.goBack();
                    }}>
                    <Text style={{color:'#3FA9F5',fontSize:17 }}>취소</Text>
                  </TouchableOpacity>
                </View>
            </View>
        )
    }
  }
  
  const styles=StyleSheet.create({
    list:{
        height:vw(90),
        backgroundColor:'white',
        width:vw(80),
        shadowColor:'gray',
        shadowOpacity:0.3,
        elevation: 3,
        flexDirection:'column',
      },
      flextwo:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
      },
      fromTo:{
        flexDirection: 'row',
        padding: 10,
      },
          location: {
            borderRadius: 50,
            borderWidth: 1,
            borderColor: OC.gray[4],
            paddingLeft: 10,
            paddingRight: 10,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },
            locationText: {
                color: '#3FA9F5',
                fontSize:14
            },
      top:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      
      time_person_bag:{
        flex:2,
        flexDirection:'row',
      },
      button:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginHorizontal: 50,
      }
    })



