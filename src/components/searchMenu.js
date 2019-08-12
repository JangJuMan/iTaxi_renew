import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper'
import Calendar from '../elements/calendar';
import SearchModal from './modal/searchModal';
import Icon from 'react-native-vector-icons/AntDesign';
import NowDate from '../../stores/nowDate';
import {titleFont,numFont} from '../variable/assets';


/**
 * @props onSearch  Callback function when departure or destination is changed.
 */
export default class SearchMenu extends Component {
    state = {
        date: new Date(),
        departure: "",
        destination: "",
    }

    renderDays() {
        let render = [];
        for(const index of Array(31).keys()) {
            render.push(
                <View style={styles.slide}>
                    <Text style={styles.text}>{new Date(new Date().setDate(this.state.date.getDate() + index)).format('MM-dd')}</Text>
                </View>
            );
        }
        return render;
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <View style={styles.search_from_to}>
                    <SearchModal
                        onSelect={(location) => {
                            this.setState({departure: location},
                                () => this.props.onSearch(this.state.departure, this.state.destination));
                        }}
                        onSelectLog={(departure, destination) => {
                            this.setState({departure, destination},
                                () => this.props.onSearch(this.state.departure, this.state.destination));
                        }}
                        style={styles.search_modal} />
                    <Icon name="arrowright" size={35} color="gray" />
                    <SearchModal
                        onSelect={(location) => {
                            this.setState({departure: location},
                                () => this.props.onSearch(this.state.departure, this.state.destination));
                        }}
                        onSelectLog={(departure, destination) => {
                            this.setState({departure, destination},
                                () => this.props.onSearch(this.state.departure, this.state.destination));
                        }}
                        style={styles.search_modal} />
                </View>

                <View style={styles.search_date}>
                    <View style={{ flex: 1 ,}}></View>
                    <View style={{ flex: 5 ,}}>
                        <Swiper 
                            showsButtons={true}
                            loop={false}
                            showsPagination={false}
                            onIndexChanged={(index) => {
                                NowDate.date = new Date(new Date().setDate(new Date().getDate() + index))
                                console.log(new Date(new Date().setDate(new Date().getDate() + index)).format('yyyyMMdd'))
                            }}
                            ref={ref => this.swiper = ref} >
                            {this.renderDays()}
                        </Swiper>
                    </View>

                    <View style={styles.calendar}>
                        <Calendar
                            style={{ padding: 30, }}
                            onDayPress={(day) => { this.swiper.scrollBy(Math.ceil((new Date(day.dateString) - new Date()) / 86400000) - this.swiper.state.index); }}
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
        flexDirection: 'column',
    },
    search_from_to: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    search_modal: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    search_date: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
        text: {
            color: '#4dabf7',
            fontSize: 14,
            fontWeight: 'bold',
        },
    calendar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


