import React, { Component } from 'react';
import { View, SafeAreaView} from 'react-native';
import ChatRoomInfo from '../components/chatRoomInfo';
import Chatting from '../components/chatting';
import { inject } from 'mobx-react';
import TaxiStore from '../../stores/taxi';
// 
@inject('taxiStore')
export default class ChatRoom extends Component{
    // state = {
    //     roomTitle: ''
    // }

    constructor(props){
        super(props)
        // const { taxiStore } = this.props;
        // this.setState({roomTitle:taxiStore.taxi.host_name})
    }

    static navigationOptions = ({navigation}) =>{
        return{
            title: 'OOO 방장 (O/O)',
            // title: this.state.roomTitle
        };
    };

    render(){
        // console.log(this.props);
        return(
            <SafeAreaView style={{flex:1}}>
                <ChatRoomInfo navigation={this.props.navigation} />
                <Chatting />
            </SafeAreaView>
        );
    }
}
