import React, { Component } from 'react';
import {AppRegistry, Text, View,StyleSheet,Image} from 'react-native';

export default class List extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.time_seat_location}>
                    <Text style={styles.time}>
                        13:00
                    </Text>
                    <Image 
                        style={styles.seat}
                        source={require('./site.png')}  />
                </View>

                <View style={styles.destination_location}>
                    <Image
                        style={styles.destination_image}
                        source = {require('./len.png')} />
                    <View style={styles.destination_text_location}>
                        <Text style={styles.destination_text}>
                            한동대학교
                        </Text>
                        <Text style={styles.destination_text}>
                            커피유야
                        </Text>
                    </View>
                </View>

                <Image 
                    style={styles.carrier}
                    source={require('./carrier.png')} />
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

        padding: 10,
        paddingRight: 0,
        paddingBottom: 15,
    },

        time_seat_location: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-end',
        },

            time: {
                color: 'gray',
                fontSize: 25,
            },

            seat: {
                width: 40,
                height: 40,
                marginTop: 10,
            },

        destination_location: {
            flex: 3,
            marginLeft: 20,
            justifyContent: 'center',
            flexDirection: 'row',
        },

            destination_image: {
                width: 30,
            },

            destination_text_location: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            },

                destination_text: {
                    color: 'gray',
                    margin: 10,
                },

        carrier: {
            flexGrow: 1,
            alignSelf: 'flex-end',
        },
});

AppRegistry.registerComponent('AwesomeProject', () =>list);