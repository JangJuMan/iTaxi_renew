import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { vh, vw } from 'react-native-expo-viewport-units';


export default class service extends Component {
    state = {
        checked: false,
        s_checked: false,
    }
    
    render() {
        return(
            <View style  = {styles.container}>
                
                <View>
                    <Text style = {styles.text}>이용약관</Text>
                        <View style = {styles.block}>
                            <View style = {styles.box}>
                                <ScrollView>
                                    <Text>hi</Text>
                                </ScrollView>
                            </View>
                        </View>
                </View>
                
                <View style = {{margin: vw(1)}}></View>

                <View>
                    <Text style = {styles.text}>개인정보 보호를 위한 동의 사항</Text>
                        <View style = {styles.block}>
                            <View style = {styles.box}>
                                <ScrollView>
                                    <Text>bye</Text>
                                </ScrollView>
                            </View>
                        </View>
                </View>
                
                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {()=> this.props.navigation.goBack()}>
                    <Text style = {styles.buttontext}>확인</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: vh(70),
    },
    head: {
        height: vh(10),
        //marginTop: vh(3),
        backgroundColor: '#3FA9F5',
        justifyContent: 'center',
    },
        headtext: {
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: 10,
            fontSize: vw(6),
        },
    block: {
        justifyContent: 'center',
        alignItems: 'center'

    },
    box: {
        height: vh(23),
        width: vw(85),
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#999999'
    },
    text: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: vw(5),
        padding: vw(3),
    },
    button: {
        backgroundColor: '#3FA9F5',
        borderRadius: 4,
        alignContent: 'stretch',
        margin: vw(3)
    },
        buttontext: {
            textAlign: 'center',
            color: 'white',
            padding: vw(5),
        }
})