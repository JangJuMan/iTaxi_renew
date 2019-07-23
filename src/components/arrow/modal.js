import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight, TouchableOpacity } from 'react-native';
import First from './first';
import Third from './third';



export default class Search extends Component {
    state = { modalVisible: false, };
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }


    render() {
        let {text} = this.props;
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={() => { this.setModalVisible(true); }}>
                    <Text style = {{fontSize: 100}}>click</Text>
                    
                </TouchableHighlight>

                <Modal
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <View style={{ height: 100 }}></View>
                    <View style={styles.choose}>

                        <First />
                      
                        
                        <Third />
                        <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => this.setModalVisible(!this.state.modalVisible) }>
                                <Text style={{ color: '#4D8ECF', fontSize: 15 }}>확인</Text>
                            </TouchableOpacity>
                        </View>
                        
                        
                        
                    </View>
                </Modal>
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
        height: 310,
        
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


