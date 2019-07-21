import React, { Component } from 'react';
import { Calendar } from 'react-native-calendars';

export default class MyCalendar extends Component {
  state={
    date: String("0" + new Date().getDate()).slice(-2),
    tomorrow: String("0" + (new Date().getDate()+1)).slice(-2),
    thedayafter: String("0" + (new Date().getDate()+2)).slice(-2),

    month : String("0" + (new Date().getMonth() + 1)).slice(-2),
    year : new Date().getFullYear(),
    minmaxmonth:String("0" + (new Date().getMonth() + 3)).slice(-2)
  }

  render() {
    return (
      <Calendar
        // Initially visible month. Default = Date()
        current={`${this.state.year}-${this.state.month}-${this.state.date}`}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={`${this.state.year}-${this.state.minmaxmonth}`-10}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={`${this.state.year}-${this.state.minmaxmonth}`-30}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {console.log('selected day', day)}}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {console.log('selected day', day)}}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {console.log('month changed', month)}}
        // Hide month navigation arrows. Default = false
        hideArrows={true}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(direction) => (<Arrow />)}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={true}
        // Show week numbers to the left. Default = false
        showWeekNumbers={true}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={substractMonth => substractMonth()}
        // Handler which gets executed when press arrow icon left. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
      />
    )
  }
}