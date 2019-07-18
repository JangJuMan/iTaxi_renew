import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Image,Modal,Text,TouchableHighlight,View,Alert} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import Swiper from 'react-native-swiper'

// LocaleConfig.locales['fr'] = {
//     monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
//     monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
//     dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
//     dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
//     today: 'Aujourd\'hui'
//   };
//   LocaleConfig.defaultLocale = 'fr';


export default class Calender extends Component{
    
    
    state={
        date: String("0" + new Date().getDate()).slice(-2),
        tomorrow: String("0" + (new Date().getDate()+1)).slice(-2),
        thedayafter: String("0" + (new Date().getDate()+2)).slice(-2),

        month : String("0" + (new Date().getMonth() + 1)).slice(-2),
        year : new Date().getFullYear(),
        modalVisible: false,
        minmaxmonth:String("0" + (new Date().getMonth() + 3)).slice(-2)
    }
       
        setModalVisible(visible) {
            this.setState({modalVisible: visible});
          }
    
    render(){
      return(
        <View style={styles.container}>
            <View style={{height:40}}></View>
            <View style={styles.calender}>
                <View style={{flex:3.5,flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
                    <Image source ={require('./locatebutton.png')} style={{width:100,height:30,margin:20}}/>
                    <Image source ={require('./site.png')} style={{width:30,height:30}}/>
                    <Image source ={require('./locatebutton.png')} style={{width:100,height:30,margin:20}}/>
                </View>
                <View style={{flex:1.5,justifyContent:'center',alignItems:'center',}}>
                    <Text style={{color:'#4dabf7',fontSize:13, }}>오늘</Text>
                </View>
                <View style={{flex:4,flexDirection:'row',}}>
                    <View style={{flex:1,}}></View>
                    <View style={{flex:5,}}>
                        <Swiper style={styles.wrapper} >
                             <View style={styles.slide}>
                                 <Text style={styles.text}>{this.state.month}-{this.state.date}</Text>
                            </View>
                            <View style={styles.slide}>
                                <Text style={styles.text}>{this.state.month}-{this.state.tomorrow}</Text>
                            </View>
                            <View style={styles.slide}>
                                <Text style={styles.text}>{this.state.month}-{this.state.thedayafter}</Text>
                            </View>
                        </Swiper>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <TouchableHighlight
                            onPress={()=> {this.setModalVisible(true);}}>
                            <Image source ={require('./site.png')} style={{width:30,height:30}}/>
                        </TouchableHighlight>
                        <Modal
                                            
                            transparent={false}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            }}>
                            <View style={{marginTop: 22}}>
                                <View > 
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



                                    <TouchableHighlight
                                        onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                        <Text>Hide Modal</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Modal>

                        
                    </View>
                </View>
            </View>
        </View>
      )
  
  
    }
  }

   
   

  const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',   
    },
    calender:{
        height:110,
        borderWidth:0.5
    },
    slide: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'white'
      },
      
      text: {
        color: '#4dabf7',
        fontSize: 14,
        fontWeight: 'bold'
      }
  
    
    

    })
