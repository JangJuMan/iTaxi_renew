import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class third extends Component {
    state = { modalVisible: false, };
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={styles.container}>
                
                <View style={{ height: 180 }}>


                    <View style ={{height: 10}}></View>
                    <View style={{ borderWidth: 0.8, borderColor: '#C3C7CB', marginLeft: 10, marginRight: 10 }}></View>

                    <View style={{ height: 170 }}>
                        <View style={{ height: 40 }}>
                            <Text style={{ fontSize: 14, color: '#888C90', marginLeft: 7, padding: 5 }}>최근 검색 기록</Text>
                        </View>

                        <View style={{ height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#888C90', padding: 10 }}>한동대학교</Text>
                            <Image
                                source={require('./line.png')}
                                style={{ width: 20, height: 15, marginLeft: 5, marginRight: 5 }}
                            />
                            <Text style={{ color: '#888C90', padding: 10 }}>포항역</Text>
                        </View>

                        <View style={{ height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#888C90', padding: 10 }}>커피유야</Text>
                            <Image
                                source={require('./line.png')}
                                style={{ width: 20, height: 15, marginLeft: 5, marginRight: 5 }}
                            />
                            <Text style={{ color: '#888C90', padding: 10 }}>육거리</Text>
                        </View>
                    </View>

                </View>
            </View>


        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },

    choose: {
        height: 290,

    },
    ImageStyle: {
        marginTop: 10,
        height: 20,
        width: 20,
    },
    text: {
        fontSize: 14,
        color: '#888C90',
        margin: 10,
    },
    textinput: {
        padding: 10,
        marginLeft: 10,
    }

})