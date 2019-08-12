import React, { Component } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Modal from './modal';
import { TouchableOpacity } from 'react-native-gesture-handler';

/**
 * @props onDayPress  Callback function when press the day
 * @props onDayLongPress  Callback function when long press the day
 */
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
          animationType = {'fade'}
          transparent={true}
          visible={this.state.visible}
          onRequestClose={() => this.setModalVisiable(false)}
          render={
            <Calendar
              style={{padding: 10, paddingLeft: 10, paddingRight: 10}}
              minDate={new Date()}
              maxDate={new Date().setDate(new Date().getDate() + 31)}
              monthFormat={'MMM yyyy'}
              
              onDayPress={(day) => {
                this.props.onDayPress(day);
                this.setModalVisiable(false);
              }}
              onDayLongPress={(day) => {this.props.onDayLongPress ? this.props.onDayLongPress(day) : null}}
              
              // renderArrow={(direction) => {
              //   if (direction == 'left') {
                  
              //   }
              //   else if (direction == 'right') {

              //   }
              // }}
            />
          } />
      </View>
    )
  }
}