import React, { Component } from 'react';
import { Modal, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';

/**
 * @props render        Component to render
 */
export default class extends Component {
    render() {
        return (
            <Modal 
                {...this.props}>
                <TouchableWithoutFeedback 
                    style={styles.modalBackground}
                    onPress={this.props.onRequestClose} >
                    <View style={styles.modalBackground} />
                </TouchableWithoutFeedback>
                <View style={[styles.modalContent, this.props.modalStyle]}>
                    {this.props.render}
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalBackground: {
        position: 'absolute',
        width: vw(100),
        height: vh(100),
        backgroundColor: "#00000040",
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        position: 'absolute',
        alignSelf: 'center',
        top: vh(20),
        maxHeight: vh(80),
        backgroundColor: '#FFFFFF',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor:'#999999',
        shadowOpacity:0.5,
        elevation: 2,
    }
})