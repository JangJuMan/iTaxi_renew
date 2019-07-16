import React, { Component } from 'react';
import{ View } from 'react-native';
import ListView from './pages/list_view';

export default class App extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <ListView />
            </View>
        );
    }
}
