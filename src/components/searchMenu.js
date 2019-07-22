import React, { Component } from 'react';
import { StyleSheet, Image, Modal, Text, TouchableHighlight, View, Alert, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'

import CustomCalendar from '../elements/calendar';

import { arrowImg, calendarImg, locateButtonImg } from '../variable/assets';

export default class SearchMenu extends Component {
    // State가 ../elements/calendar.js에 있는 state랑 겹치는데, 중복 제거 필요
    state={
        date: String("0" + new Date().getDate()).slice(-2),
        tomorrow: String("0" + (new Date().getDate()+1)).slice(-2),
        thedayafter: String("0" + (new Date().getDate()+2)).slice(-2),
    
        month : String("0" + (new Date().getMonth() + 1)).slice(-2),
        year : new Date().getFullYear(),
        minmaxmonth:String("0" + (new Date().getMonth() + 3)).slice(-2),
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    
    render(){
        return(
            <View style={[styles.container, this.props.style]}>
                <View style={styles.search_from_to}>
                    {/* It should be spinner */}
                    <Image source={locateButtonImg} style={styles.spinner} />
                    <Image source={arrowImg} style={styles.arrow} />
                    {/* It should be spinner */}
                    <Image source={locateButtonImg} style={styles.spinner} />
                </View>

                {/* 오늘이 아니면 숨기거나 하는 기능이 필요할듯. 근데 디자인이 오늘이 아니면 없어지는게 맞는걸까? */}
                <View style={styles.today}>
                    <Text style={styles.today_font}>오늘</Text>
                </View>

                <View style={styles.search_date}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 5 }}>
                        {/* 선택한 Date에 따라 유동적으로 변경될 수 있도록 변경 필요 */}
                        <Swiper>    
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

                    <View style={styles.calendar}>
                        <TouchableHighlight onPress={()=> this.setModalVisible(true)}>
                            <Image source={calendarImg} style={styles.calendar_img} />
                        </TouchableHighlight>
                    </View>
                </View>

                {/* Modal 사용하기 불편한 점들 수정 필요 */}
                <Modal
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setModalVisible(false)}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <CustomCalendar />
                            <TouchableOpacity onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                                <Text>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        height: 110,
    },
        search_from_to: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

            flex: 3.5,
        },
            spinner: {
                width: 100,
                height: 30,
                margin: 20,
            },
            arrow: {
                width: 30,
                height: 30,
            },

        today: {
            justifyContent: 'center',
            alignItems: 'center',

            flex: 1.5,
        },
            today_font: {
                color: '#4dabf7',
                fontSize: 13,
            },

        search_date: {
            flexDirection: 'row',

            flex: 4,
        },
            slide: {
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                backgroundColor: 'white',
            },
                text: {
                    color: '#4dabf7',
                    fontSize: 14,
                    fontWeight: 'bold'
                },
            
            calendar: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            },
                calendar_img: {
                    width: 30,
                    height: 30,
                },
});
