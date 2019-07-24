import React, { Component } from 'react';
import{ StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import {inject, observer} from 'mobx-react';
import SearchMenu from '../components/searchMenu';
import ListEntry from '../components/taxiElement';


@inject('userStore')

@observer
export default class TaxiList extends Component{
   constructor(props) {
       super(props);
   }
    componentDidMount() {
        const { userStore } = this.props;
        //userStore.getTaxiList();
        
        console.log(userStore.taxiList);
      }

    render(){
        const {userStore} = this.props;

        return(
            
            <View style={styles.conatiner}>
                <View style={styles.horizontal_divider}>
                    <SearchMenu />
                </View>

                <ScrollView>
                    <View style={styles.log_container}>
                        <Text style={styles.date_of_logs}>OO월 OO일 O요일</Text>
                        <View style={styles.horizontal_date_bar}></View>
                    </View>
                    <View style={styles.log_contents}>
                        <TouchableOpacity onPress={() => console.log(1)}>
                            <ListEntry style={{marginBottom:20}}time="13:20" from="한동대학교" to="포항역"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListEntry style={{marginBottom:20}}time="13:20" from="한동대학교" to="포항역"/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.log_container}>
                        <Text style={styles.date_of_logs}>OO월 OO일 O요일</Text>
                        <View style={styles.horizontal_date_bar}></View>
                    </View>
                    
                    
                    <View style={styles.log_contents}>
                        
                        <FlatList
                            data = {userStore.taxiList}
                            
                            renderItem = {({item}) => 
                            <View>
                            {/* <TouchableOpacity>
                                <ListEntry style = {{marginBottom: 20}}time = {item.taxi_id} from = {item.departure_place} to = {item.arrival_place}/>
                            </TouchableOpacity> */}
                            <Text style = {{fontSize: 16}}>from: {item.departure_place}</Text>
                            <Text style = {{fontSize: 16}}>to: {item.arrival_place}</Text>
                            </View>
                        
                        }/>

                    </View>
                    
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
    },
    
    horizontal_divider:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        borderBottomWidth: 1.0, 
        borderBottomColor: '#0b0b0b25', 
        padding: 5,
    },

    log_contents:{
        marginLeft: 24, 
        marginRight: 24, 
    },
        date_of_logs:{
            color: '#bbb',
            fontSize: 18,
            padding: 10,
        },
        horizontal_date_bar:{
            borderBottomWidth: 1.0, 
            borderBottomColor: '#0b0b0b25',
            flexGrow: 1,
        },
    
    log_container:{
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingTop: 10
    },
})