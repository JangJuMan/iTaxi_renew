import React, { Component } from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class first extends Component<{}>{
    constructor() {
        super();

        this.state = {
            expand: false,
            buttonText: 'more',
            updateHeight: 0,
            textLayoutHeight: 0,
        }
    }
    expand_collapse_Function = () => {
        if(this.state.expand == false) {
            this.setState({
                expand: true,
                updateHeight: this.state.textLayoutHeight,
                buttonText: 'less'
            });
        }
        else {
            this.setState({
                updateHeight: 0,
                expand: false,
                buttonText: 'more'
            });
        }
    }

    getHeight(height) {
        this.setState({textLayoutHeight: height})
    }
    render() {
        return (
            <View style={{ height: 130 }}>
                <View style={{ height: 30, flexDirection: 'row', }}>
                    <View style={{ flex: 6 }}>
                        <TextInput
                            style={styles.textinput}
                            placeholder="직접입력"
                            borderBottomWidth='0.5'
                            borderBottomColor='#888C90'
                            onChangeText={(text) => this.setState({ text })}

                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image
                            source={require('./gps.png')}
                            style={styles.ImageStyle}
                        />
                    </View>
                    <View style={{ flex: 2 }}></View>
                </View>

                <View style = {{height: 100}}>
                 <View style={{ height: 30, flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Text style={styles.text}>한동대학교</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.text}>포항역</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.text}>고속버스터미널</Text>
                        </TouchableOpacity>
                        </View>

                        <View style={{ height: 30, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Text style={styles.text}>하나로마트</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.text}>커피유야</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.text}>세차장</Text>
                        </TouchableOpacity>
                        </View>
                    

                    <View style = {{height: this.state.updateHeight, overflow: 'hidden'}}>
                        <View style = {{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            {/* 여기에 text추가! */}
                            <TouchableOpacity>
                            <Text style = {{padding: 20,  paddingTop: 10, fontSize: 14, color: '#888C90',  marginBottom: 2}}
                                onLayout = {(value) => this.getHeight(value.nativeEvent.layout.height)}>E1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                            <Text style = {{padding: 20,  paddingTop: 10, fontSize: 14, color: '#888C90',  marginBottom: 2}}
                                onLayout = {(value) => this.getHeight(value.nativeEvent.layout.height)}>영일대</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                            <Text style = {{padding: 20,  paddingTop: 10, fontSize: 14, color: '#888C90',  marginBottom: 2}}
                                onLayout = {(value) => this.getHeight(value.nativeEvent.layout.height)}>포항공대</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <TouchableOpacity 
                        activeOpacity = {0.7}
                        onPress = {this.expand_collapse_Function}      
                    >
                        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                            <View style ={styles.arrow_down} />
                        </View>
                    </TouchableOpacity>
                    
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
        margin: 10
    },
    text: {
        fontSize: 14,
        color: '#888C90',
        margin: 10,
        marginBottom: 2,
    },
    textinput: {
        padding: 10,
        marginLeft: 10,
    },
    item: {
        marginVertical: 6,
        marginHorizontal: 6,
        padding: 10,
        backgroundColor: '#ffffff',
    },
    expandText: {
        color: '#014c92',
        textAlign: 'center',
    },
    readMeExpandText: {
        color: '#014c92',
        textAlign: 'right',
        marginTop: 12,
    },
    arrow_down: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 10,
        height: 10,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#4D8ECF',
        transform: [{ rotate: '45deg' }],
    },
    

})