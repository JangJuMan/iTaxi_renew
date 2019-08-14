import React, { Component } from 'react';
import{ StyleSheet, View, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EmptyList from '../components/emptyList';
import MakeRoom from '../components/modal/MakeRoom';
import ModalControl from '../variable/modalControl';
import SearchMenu from '../components/searchMenu';
import { observer } from 'mobx-react';
import Modal from '../elements/modal';

@observer
export default class ListView extends Component{
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <TouchableOpacity
                    onPress={() => ModalControl.modalVisible_carpool=true}>
                    <Icon style={{marginRight:10, color:'dodgerblue'}}name="ios-add-circle-outline" size={30}/>
                </TouchableOpacity>
            ),
        };
    };
    
    render(){
        return(
            <View style={styles.container}>
                {/* 중단 수평선 */}
                <SearchMenu 
                    style={{marginTop: 10, marginBottom: 10}}/>
                <View style={[styles.horizontal_divider]} />

                <EmptyList 
                    navigation={this.props.navigation}/>
                <Modal
                    animationType = {'fade'}
                    transparent={true}
                    visible={ModalControl.modalVisible_carpool}
                    onRequestClose={() => ModalControl.modalVisible_carpool=false}
                    render={
                        <MakeRoom 
                            navigation={this.props.navigation}
                            onOkButton = {() => {
                                ModalControl.modalVisible_carpool=false,
                                this.props.navigation.navigate('Chat');
                            }}
                            onCancelButton = {() => ModalControl.modalVisible_carpool=false}/>
                    }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    horizontal_divider:{
        borderBottomWidth: 1.0, 
        borderBottomColor: '#0b0b0b25', 
    },
})