import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { vw, vh }  from 'react-native-expo-viewport-units';
import OpenColor from 'open-color';
import SelectDestination from '../destinationSelect';
import Modal from '../../elements/modal';

/**
 * @props onSelect  Callback function when select the location
 * @props onSelectLog   Callback function when select the log
 */
export default class SearchModal extends Component {
    state = {
        modalVisiable: false,
        location: "선택"
    }

    setModalVisiable(visible) {
        this.setState({ modalVisiable: visible });
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableOpacity style={styles.location_button} onPress={() => this.setModalVisiable(true)}>
                    <Text style={styles.text}>{this.state.location}</Text>
                    <Icon name="md-arrow-dropdown" size={vw(5)} color={OpenColor.gray[6]} />
                </TouchableOpacity>

                <Modal
                    animationType = {'fade'}
                    modalStyle={this.props.modalStyle}
                    transparent={true}
                    visible={this.state.modalVisiable}
                    onRequestClose={() => this.setModalVisiable(false)}
                    render={
                        <SelectDestination
                            onSelectLocation={(location) => {
                                this.setState({location});
                                this.props.onSelect ? this.props.onSelect(location) : null;
                            }}
                            onSelectLog={(departure, destination) => {
                                this.props.onSelectLog ? this.props.onSelectLog(departure, destination) : null;
                            }}
                            onSubmit={() => this.setModalVisiable(false)} />
                    } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    location_button: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: OpenColor.gray[4],
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    modalBackground: {
        width: vw(100),
        height: vh(100),
        backgroundColor: "#00000040",
        justifyContent: 'center',
        alignItems: 'center',
    },
        modalContent: {
            position: 'absolute',
            left: vw(10),
            top: vh(10),
            width: vw(80),
            marginBottom: vh(20),
            backgroundColor: '#FFFFFF',

            shadowOffset: {
                width: 1,
                height: 1,
            },
            shadowColor:'#999999',
            shadowOpacity:0.5,
            elevation: 2,
        },
    text:{
        fontFamily: "titleFont",
        fontWeight:"200"
    }
});