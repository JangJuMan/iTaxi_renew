import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';

/**
 * @props   time    Time to leave
 * @props   seats   Number of current seats
 * @props   from    
 * @props   to      
 * @props   carrier Number of carriers
 */
export default class List extends Component{
    render(){
        const { seats, carrier } = this.props;

        // const seat_img = "./seat" + seats + ".png";
        // const carrier_img = "./carrier" + carrier + ".png";
        const seat_img = "./site.png";
        const carrier_img = "./carrier.png";

        return(
            <View style={[styles.container, this.props.style]}>
                <View style={styles.time_seat_location}>
                    <Text style={styles.time}>
                        {this.props.time}
                    </Text>
                    <Image 
                        style={styles.seat}
                        source={require(seat_img)}  />
                </View>

                <View style={styles.destination_location}>
                    <Image
                        style={styles.destination_image}
                        source = {require('./len.png')} />
                    <View style={styles.destination_text_location}>
                        <Text style={styles.destination_text}>
                            {this.props.from}
                        </Text>
                        <Text style={styles.destination_text}>
                            {this.props.to}
                        </Text>
                    </View>
                </View>

                <Image 
                    style={styles.carrier}
                    source={require(carrier_img)} />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flexDirection: 'row',

        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor:'gray',
        shadowOpacity:0.3,
        elevation: 3,

        padding: vw(2.4),
        paddingRight: 0,
        paddingBottom: vw(3.6),
    },

        time_seat_location: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-end',
        },

            time: {
                color: 'gray',
                fontSize: vw(5),
            },

            seat: {
                width: vw(9.6),
                height: vw(9.6),
                marginTop: vw(2.4),
            },

        destination_location: {
            flex: 3,
            marginLeft: vw(4.8),
            justifyContent: 'center',
            flexDirection: 'row',
        },

            destination_image: {
                width: vw(7.2),
                height: vw(19.2),
            },

            destination_text_location: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            },

                destination_text: {
                    color: 'gray',
                    margin: vw(2.4),
                },

        carrier: {
            flexGrow: 1,
            alignSelf: 'flex-end',
        },
});
