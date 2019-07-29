import React, { Component } from 'react';
import { StyleSheet, Image, Modal, Text, TouchableHighlight, View, Alert, TouchableOpacity } from 'react-native';
import { arrowImg, calendarImg, locateButtonImg, startImg, endImg } from '../../variable/assets';
import First from '../arrow/first';
import Third from '../arrow/third';
import { vw, vh }  from 'react-native-expo-viewport-units';


export default class SearchModal extends Component {
    state = {
        arrowmodal: false,
    }

    setArrowModal(visible) {
        this.setState({ arrowmodal: visible });
    }


    render() {
        return (
            <View>
                <View>
                   
                    <TouchableOpacity onPress={() => this.setArrowModal(true)}>
                        <Image source={endImg} style={styles.spinner} />
                    </TouchableOpacity>
                    <Modal
                        transparent={false}
                        visible={this.state.arrowmodal}
                    >
                        <View style = {styles.pad}>
                        <View style={{ height: 100 }}></View>
                        <View style={styles.choose}>
                            <First />
                            <Third />
                            <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => this.setArrowModal(!this.state.arrowmodal)}>
                                    <Text style={{ color: '#4D8ECF', fontSize: 15 }}>확인</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        </View>
                    </Modal>
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

    spinner: {
        width: 100,
        height: 30,
        margin: 20,
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