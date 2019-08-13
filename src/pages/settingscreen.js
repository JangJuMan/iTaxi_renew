import React, { Component } from 'react';
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert } from 'react-native';
import { ListItem } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { vw } from 'react-native-expo-viewport-units';
import { observer, inject } from 'mobx-react';
import titleFont from '../variable/assets';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Setting extends Component{
  
    render(){ 
      const list = [
      {
        title: '공지사항',
        icon: 'av-timer'
      },
      {
        title: '내정보',
        icon: 'mood'
      },
      {
        title: '버전정보/개발자',
        icon: 'info'
      },
      {
        title: '알림/버그제보',
        icon: 'alarm'
      },
      {
        title: '이용약관',
        icon: 'https'
      },
      ]
      
        return(
          <View style={styles.contain}>
            
            
              {
                list.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.title}
                    leftIcon={{ name: item.icon }}
                  />
                ))
              }
            
          </View>
        )
  
  
    }
  }
  
  

  const styles=StyleSheet.create({
    contain: {
  },
    
    })