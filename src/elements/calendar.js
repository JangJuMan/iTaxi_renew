import React, { Component } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Modal from './modal';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class MyCalendar extends Component {
  state = {visible: false}

  setModalVisiable(visible) {
    this.setState({visible});
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.setModalVisiable(true)}>
          {this.props.render}
        </TouchableOpacity>

        <Modal
          transparent={true}
          visible={this.state.visible}
          onRequestClose={() => this.setModalVisiable(false)}
          render={<Calendar />} />
      </View>
    )
  }
}