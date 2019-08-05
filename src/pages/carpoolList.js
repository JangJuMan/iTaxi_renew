import React, { Component } from 'react';
import{ StyleSheet, Text, View, ScrollView, TouchableOpacity, } from 'react-native';
import SearchMenu from '../components/searchMenu';
import ListEntry from '../components/taxiElement';
import NewRoom from '../components/newRoom';
import Icon from 'react-native-vector-icons/Ionicons';
import EmptyList from '../components/emptyList';
import MakeRoom from '../pages/MakeRoom';
import ModalControl from '../variable/modalControl';
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
                <EmptyList 
                    navigation={this.props.navigation}/>
                <Modal
                    transparent={true}
                    visible={ModalControl.modalVisible_carpool}
                    onRequestClose={() => ModalControl.modalVisible_carpool=false}
                    render={
                    <View style={styles.modalBackground}>
                        <View style={styles.activityIndicatorWrapper}>
                            <MakeRoom 
                                navigation={this.props.navigation}
                                onOkButton = {() => {
                                    ModalControl.modalVisible_carpool=false,
                                    this.props.navigation.navigate('CarpoolRoom');
                                }}
                                onCancelButton = {() => ModalControl.modalVisible_carpool=false}/>
                        </View>
                    </View>
                    }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityIndicatorWrapper: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    }
})