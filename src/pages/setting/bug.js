import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, AppRegistry, Button, Alert, Switch } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { vw, vh } from 'react-native-expo-viewport-units';
import { observer, inject } from 'mobx-react';
import titleFont from '../../variable/assets';


export default class bug extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <View style={styles.contactTop}>
                    <Text style={{ fontSize: 15, color: '#3FA9F5', fontFamily: titleFont, fontWeight: "200" }}>Contact Us(버그신고및 문의)</Text>
                    <View style={{ borderBottomWidth: 1, margin: 9, borderBottomColor: '#CCCCCC', flexGrow: 1, }}></View>
                </View>
                <View style={styles.contactBottom}>
                    <Text style={{ fontSize: 16, color: 'black', fontFamily: titleFont, fontWeight: "200" }}>cra.handong.service@gmail.com</Text>
                </View>


                <View style={styles.contactTop}>
                    <Text style={{ fontSize: 15, color: '#3FA9F5', fontFamily: titleFont, fontWeight: "200" }}>문의 양식</Text>
                    <View style={{ borderBottomWidth: 1, margin: 9, borderBottomColor: '#CCCCCC', flexGrow: 1, }}></View>
                </View>

                <View style={{ margin: vw(3) }}></View>
                <View style={styles.firstbox}>
                    <ScrollView>
                        <Text selectable ={true} style={{ margin: vw(3) }}>
                            효과적인 제보를 위해 아래 양식을 맞추어 {'\n'}메일로 보내주시기 바랍니다.{'\n\n'}

                            분류: (버그 제보 / 건의사항){'\n\n'}
                            내용{'\n'}
                            * 버그 제보일 경우{'\n'}
                            {'\t'}- 휴대폰 기종: {'\n'}
                            {'\t'}- iOS / Android 버전: {'\n'}
                            {'\t'}- 내용: {'\n'}
                            {'\t'}- 재현하는 방법: {'\n'}
                            {'\t'}- 스크린샷: {'\n\n'}

                            * 건의사항일 경우{'\n'}
                            {'\t'}- 내용: {'\n'}
                            {'\t'}- 원하는 기대효과(Expected behavior):
        
                  </Text>
                    </ScrollView>
                </View>
                <View style={{ margin: vw(3) }}></View>
            </View>
        )


    }
}



const styles = StyleSheet.create({
    firstbox: {
        height: vh(48),
        borderWidth: 0.5,
        borderColor: '#CCCCCC',
        width: vw(85),
        marginLeft: vw(6)

    },
    contactTop: {
        height: vw(5),
        marginTop: vw(6),
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    contactBottom: {
        flexDirection: 'row',
        marginTop: 20,
        height: vw(10),
        justifyContent: 'center',
        alignContent: 'center'
    }
})