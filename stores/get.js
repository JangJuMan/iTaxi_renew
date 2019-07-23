import React, { Component } from 'react';
import { Text, View, Button } from 'react-native'
import { observer, inject, asyncAction, observable } from 'mobx-react';

@inject('userStore')
@observer
export default class Get extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { userStore } = this.props;
    userStore.getUserId();
   
  }


  render() {
    const { userStore } = this.props;
    return(
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          onPress = {() => {userStore.getTaxiList()}}
          title = 'Taxi list'
        />
         <Button
          onPress = {() => {userStore.getCarpoolList()}}
          title = 'Carpool list'
        />
         <Button
          onPress = {() => {userStore.getTaxiId()}}
          title = 'Taxi Id'
        />
         <Button
          onPress = {() => {userStore.getCarpoolId()}}
          title = 'carpool Id'
        />
         <Button
          onPress = {() => {userStore.getUserId()}}
          title = 'User Id'
        />
         <Button
          onPress = {() => {userStore.getLog()}}
          title = 'Log'
        />
       
      </View>
    );
  }
}
