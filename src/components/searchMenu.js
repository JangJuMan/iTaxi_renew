import React, { Component } from 'react';
import { StyleSheet, Image, Modal, Text, TouchableHighlight, View, Alert, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'
import Calendar from '../elements/calendar';
import SearchModal from './searchModal';
import Icon from 'react-native-vector-icons/AntDesign';
import { days } from '../variable/date';

import { vw, vh }  from 'react-native-expo-viewport-units';

export default class SearchMenu extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={styles.search_from_to}>
                    <SearchModal />
                    <Icon name="arrowright" size={35} color="gray" />
                    <SearchModal />
                </View>

                <View style={styles.search_date}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 5, flexDirection: 'column', alignContent: "space-between", justifyContent: 'center' }}>
                        {/* 선택한 Date에 따라 유동적으로 변경될 수 있도록 변경 필요 */}
                        <Swiper>
                            <View style={styles.slide}>
                                <Text style={styles.text}>   오늘{'\n'}{days.month}-{days.date}</Text>
                            </View>
                            <View style={styles.slide}>
                                <Text style={styles.text}>   내일{'\n'}{days.month}-{days.tomorrow}</Text>
                            </View>
                            <View style={styles.slide}>
                                <Text style={styles.text}>   모레{'\n'}{days.month}-{days.thedayafter}</Text>
                            </View>
                        </Swiper>
                    </View>

                    <View style={styles.calendar}>
                        <Calendar
                            render={
                                <Icon name="calendar" color="#4dabf7" size={30} />
                            } />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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

        flex: 5.5,
    },
    slide: {
        flex: 1,
        justifyContent: 'flex-start',
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
    choose: {
        height: vh(55),
 
 
    },
    pad: {
        
        padding: vw(2.4),
        paddingBottom: vw(3.6),
        borderRadius: 5,
        padding:30,
    },
    
});


