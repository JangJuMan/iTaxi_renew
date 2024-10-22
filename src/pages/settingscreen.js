import React, { Component } from 'react';
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { vw, vh } from 'react-native-expo-viewport-units';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import userStore from '../../stores/user'

export default class Setting extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      
      headerRight: (
        <TouchableOpacity
          onPress = {() => Alert.alert(
            '로그아웃',
            '로그아웃 하시겠습니까?',
            [
              {text: '취소', onPress: () => console.log('cancel')},
              {text: '확인', onPress: () => {
                userStore.resetAutoLogin().then(() => navigation.navigate("First"))
              }}
            ],
            )
          }
        >
          <Icon style = {{marginRight: vw(3), color: '#3FA9F5'}} name = "logout" size = {vw(8.5)} />
        </TouchableOpacity>
      ),
    };
  };

  render() {
    const list = [
      {
        title: '공지사항',
        icon: 'list',
        next: "Notice",
      },
      {
        title: '내정보',
        icon: 'mood',
        next: "Myinfo",

      },
      {
        title: '버전정보/개발자',
        icon: 'info',
        next: "Version",

      },
      {
        title: '알림',
        icon: 'alarm',
        next: "Alarm",
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

    return (
      <View>
        <View style={styles.contain}>
          {
            list.map((item, i) => (
              <ListItem
                // onPress = {() => {
                //   this.props.navigation.navigate('Notice')
                // }}
                onPress={() => this.props.navigation.navigate(`${item.next}`)}
                style={styles.line}
                Component={TouchableOpacity}
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon, color: 'gray' }}
                chevron
              />
            ))
          }
        </View>
        <View style={styles.bottom}>
          <Text style={styles.cra}>Powered by CRA</Text>
        </View>
      </View>
    )


  }
}



const styles = StyleSheet.create({
  contain: {

  },
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray'
  },
  bottom: {
    padding: vw(2),
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  cra: {
    fontSize: vw(4),
    color: '#3FA9F5',
  },
})