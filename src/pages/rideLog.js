import React, { Component } from 'react';
import{ StyleSheet, Text, View, ScrollView, TouchableOpacity,FlatList, Button } from 'react-native';
import { inject, observer } from 'mobx-react';
import OC from 'open-color';
import Swiper from 'react-native-swiper'
import RideSoon from '../components/nodateElement';
import RideLog from '../components/taxiElement';

@inject('taxiStore')
@inject('carpoolStore')

@observer
export default class RiderLog extends Component{
    constructor(props) {
        super(props);
    }

    state = {
        isTaxi : true
    }

    componentDidMount() {
        const { taxiStore } = this.props;
        const { carpoolStore } = this.props;
        taxiStore.getTaxiList();
        carpoolStore.getCarpoolList();
    }

    changeColor = (value) => {
        this.setState({isTaxi: value});
    }

    render(){
        // const check = 'taxi';
        const { taxiStore } = this.props;
        const { carpoolStore } = this.props;
            return (
                <View style={{flex:1}}>
                {/* 곧 탑승예정 */}
                <Text style={styles.top_title}>곧 탑승 예정</Text>
                <TouchableOpacity
                    onPress = {() => {
                        this.props.navigation.navigate('Chat');
                    }}>
                    <View style={styles.top_highlighted_log}>
                        <RideSoon seat = '3' carrier= '4' time = '13:00' from="한동대학교" to="포항역"/>
                    </View>
                </TouchableOpacity>

                {/* 중단 수평선 */}
                <View style={styles.past_log}>
                    <Text style={styles.past_log_title}>지난탑승내역</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                            style={{marginRight:10}}
                            onPress = {() => {
                                this.changeColor(true)
                            }}
                        >
                            <Text style={this.state.isTaxi ? styles.taxi_carpool_highlight_font : styles.taxi_carpool_font}>택시</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{marginRight:10}}
                            onPress = {() => {
                                this.changeColor(false);
                            }}
                        >
                            <Text style={this.state.isTaxi ? styles.taxi_carpool_font : styles.taxi_carpool_highlight_font}>카풀</Text>
                        </TouchableOpacity>   
                    </View>
                </View>
                {/* 지난 탑승 내역들 */}                
                <ScrollView>
                    <View style={styles.past_log_contents}>
                        <FlatList
                            data = {this.state.isTaxi ? taxiStore.taxiList : carpoolStore.carpoolList}
                            keyExtractor={(item, index) => item._id.toString()}
                            renderItem = {({item}) => 
                            <View>
                                <TouchableOpacity
                                    onPress = {() => {
                                        taxiStore.taxiId = item;
                                        this.props.navigation.navigate('Chat');
                                    }}>
                                    <RideLog style = {{marginBottom: 20}} date = {item.departure_date} time = {item.departure_time} from = {item.departure_place} to = {item.arrival_place} seat={item.num_people} carrier={item.num_carrier}/>
                                </TouchableOpacity>
                            </View>
                        
                        }/>
                    </View>
                    
                </ScrollView>
            </View>

            )
    }
}

const styles = StyleSheet.create({
    top_title:{
        color:'#89B2E9',
        fontSize:18, 
        fontWeight: 'bold', 
        margin: 10, 
        marginLeft: 24
    },
    top_highlighted_log:{
        marginRight: 24, 
        marginLeft:24,
        borderWidth:2, 
        borderColor: '#00BFFF',
    },
    past_log:{
        flexDirection: 'row', 
        alignItems:'center', 
        justifyContent:'space-between',
        borderBottomWidth: 1.0, 
        borderBottomColor: '#0b0b0b25', 
        padding: 5,
        marginTop: 5,
    },
    past_log_title:{
        fontSize: 16, 
        color: '#a0a0a0', 
        fontWeight: 'bold', 
        marginLeft:14,
    },
    taxi_carpool_font:{
        // color:'#89B2E9', 
        color:OC.blue[3], 
        fontSize:16, 
        padding:5,
        paddingRight:15,
        paddingLeft:15,
    },
    taxi_carpool_highlight_font:{
        color:OC.blue[5], 
        fontSize:16, 
        padding:5,
        paddingRight:15,
        paddingLeft:15,
        borderWidth:0.5,
        borderColor:OC.cyan[3],
        borderRadius: 7,
    },
    past_log_container:{
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingTop: 10
    },
    past_log_contents:{
        marginLeft: 24, 
        marginRight: 24, 
    },
    past_date_bar:{
        color:'#bbb',
        fontSize:18,
        padding:10,
    },
    horizontal_past_date_bar:{
        borderBottomWidth: 1.0, 
        borderBottomColor: '#0b0b0b25',
        flexGrow: 1,
    },
})
