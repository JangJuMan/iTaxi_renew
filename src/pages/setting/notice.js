import React, { Component } from 'react';
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert ,TouchableOpacity} from 'react-native';
import { ListItem } from 'react-native-elements';
import { vw } from 'react-native-expo-viewport-units';
import { observer, inject } from 'mobx-react';

export default class Setting extends Component{
  
    render(){ 
      const list = [
      {
        subtitle: '2019-08-14',
        title: '아이택시가 새로 바뀌었어요!',
      },
      {
        subtitle: '2019-08-13',
        title: '영현이가 바보래요',
      },
      {
        subtitle: '2019-08-11',
        title: '영현이 짱~',
      },
      {
        subtitle: '2019-08-10',
        title: '안녕하세요',
      },
      {
        subtitle: '2019-08-09',
        title: '사랑해요',
      },
      ]
    
      
        return(
          <View style={styles.contain}>
              {
                list.map((item, i) => (
                  <ListItem
                    onPress = {() => {
                      this.props.navigation.navigate('detailNotice',{
                        date: item.subtitle,
                        title: item.title,
                      } )
                    }}
                    style={styles.line}
                    Component={TouchableOpacity}
                    key={i}
                    subtitle={
                      <View>
                        <Text style = {{color: '#999999', fontSize: vw(4)}}>{item.subtitle}</Text>
                      </View>
                    }
                    title={item.title}
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