<<<<<<< HEAD
=======
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert ,TouchableOpacity} from 'react-native';
import { ListItem } from 'react-native-elements';
import { vw } from 'react-native-expo-viewport-units';
import { observer, inject } from 'mobx-react';

export default class Setting extends Component{
  
    render(){ 
      const list = [
      {
        title: '공지사항',
        icon: 'list'
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
                    style={styles.line}
                    Component={TouchableOpacity}
                    key={i}
                    title={item.title}
                    leftIcon={{ name: item.icon, color:'gray' }}
                    chevron
                    badge={{ value: 3, textStyle: { color: 'white' } }}
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
    line: {
      borderBottomWidth: 0.5,
      borderBottomColor:'gray'
    },
})
>>>>>>> 09c987f76b90d3dcfaab3f9bc408513c19e2ea33
