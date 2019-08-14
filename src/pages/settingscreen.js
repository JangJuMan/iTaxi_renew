import React, { Component } from 'react';
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert ,TouchableOpacity} from 'react-native';
import { ListItem } from 'react-native-elements';
import { observer, inject } from 'mobx-react';

export default class Setting extends Component{
    render(){ 
      const list = [
      {
        title: '공지사항',
        icon: 'list',
        next: "Notice",
      },
      {
        title: '내정보',
        icon: 'mood',
        next:"Myinfo",

      },
      {
        title: '버전정보/개발자',
        icon: 'info',
        next:"Version",

      },
      {
        title: '알림',
        icon: 'alarm',
        next:"Alarm",
      },
      {
        title: '버그제보',
        icon: 'bug-report',
        next: "Bug",
      },
      {
        title: '이용약관',
        icon: 'https',
        next: "TermsOfservice",

      },
      ]
      
        return(
          <View style={styles.contain}>
              {
                list.map((item, i) => (
                  <ListItem
                    // onPress = {() => {
                    //   this.props.navigation.navigate('Notice')
                    // }}
                    onPress={()=>this.props.navigation.navigate(`${item.next}`)}
                    style={styles.line}
                    Component={TouchableOpacity}
                    key={i}
                    title={item.title}
                    leftIcon={{ name: item.icon, color:'gray' }}
                    chevron
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