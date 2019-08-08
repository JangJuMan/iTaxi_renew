import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,ScrollView,AppRegistry,Button,Alert,Switch} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { vw } from 'react-native-expo-viewport-units';
import { observer, inject } from 'mobx-react';


class Profile_info extends Component {
  render() {
    return (
      <View style={{flex:3,justifyContent:'center',alignItems:'center',}}>
        <Text style={{fontSize:16,color:'#999999'}}>{this.props.info} {'\n'}</Text>
      </View>
    );
  }
}

class Profile_my extends Component {
  render() {
    return (
      <View style={{flex:3,justifyContent:'center',alignItems:'center',}}>
        <Text style={{fontSize:16,color:'black'}}>{this.props.info} {'\n'}</Text>
      </View>
    );
  }
}

@inject('userStore')
@observer
export default class Setting extends Component{
  constructor(props){
    super(props);
}
  state={chattingSwitchValue:true}
  CHATtoggleSwitch=(Chatvalue)=>{
    this.setState({ChattingSwitchValue: Chatvalue})
  }

  state={switchValue:true}
  toggleSwitch=(value)=>{
    this.setState({switchValue: value})
  }
  componentDidMount() {
    const { userStore } = this.props;
    userStore.getUserId();
  }
  
    render(){ 
      const { userStore } = this.props; 
      const data = userStore.userId;
        return(
          
          <ScrollView>
                <View style={styles.profileTop}>
                    <Text style={{fontSize:15,color:'#3FA9F5'}}>Profile</Text>
                    <View style={{borderBottomWidth:1,margin:9, borderBottomColor: '#CCCCCC', flexGrow: 1}}></View>
                </View>
                <View style={styles.profileBottom}>
                    <View style={{flex:3}}>
                      <Profile_info info='학번'/>
                      <Profile_info info='한글이름'/>
                      <Profile_info info='닉네임'/>
                      <Profile_info info='휴대폰 번호'/>
                      <Profile_info info='Email'/>
                      <Profile_info info='계좌 은행'/>
                      <Profile_info info='계좌 번호'/>
                    </View>
                    
                    <View style={{flex:5}}>
                      <Profile_my info={data.student_id}/>
                      <Profile_my info={data.name}/>
                      <Profile_my info={data.user_id}/>
                      <Profile_my info={data.phone}/>
                      <Profile_my info={data.student_id + '@handong.edu'}/>
                      <Profile_my info='기업'/>
                      <Profile_my info={data.phone}/>
                    </View>
                </View>
                <View style={styles.profileButton}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Update')}>
                    <View style={styles.changeInfo}>
                      <Text style={styles.changeInfoText}>개인정보 수정</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.AlarmTop}>
                    <Text style={{fontSize:15,color:'#3FA9F5'}}>Alarm</Text>
                    <View style={{borderBottomWidth:1,margin:9, borderBottomColor: '#CCCCCC', flexGrow: 1,}}></View>
                </View>
                <View style={styles.AlarmBottom}>
                    <View style={styles.chatAlarm}>
                      <Text style={{fontSize:16,color:'black'}}>채팅 알람</Text>
                      {/* switch버튼 */}
                      <View style={styles.switch}>
                        <Switch
                          onValueChange = {this.CHATtoggleSwitch}
                          value = {this.state.ChattingSwitchValue}/>
                      </View>
                    </View>
                    <View style={styles.alertAlarm}>
                      <Text style={{fontSize:16,color:'black'}}>공지 알람</Text>
                      {/* switch버튼 */}
                      <View style={styles.switch}>
                        <Switch
                          onValueChange = {this.toggleSwitch}
                          value = {this.state.switchValue}/>
                      </View>
                    </View>
                </View>
                <View style={styles.versionTop}>
                    <Text style={{fontSize:15,color:'#3FA9F5'}}>Version</Text>
                    <View style={{borderBottomWidth:1,margin:9, borderBottomColor: '#CCCCCC', flexGrow: 1,}}></View>
                </View>
                <View style={styles.versionBottom}>
                  <Text style={{fontSize:16,color:'black'}}>2.0.0-alpha</Text>
                </View>
                <View style={styles.versionTop}>
                    <Text style={{fontSize:15,color:'#3FA9F5'}}>Contact Us(버그신고및 문의)</Text>
                    <View style={{borderBottomWidth:1,margin:9, borderBottomColor: '#CCCCCC', flexGrow: 1,}}></View>
                </View>
                <View style={styles.versionBottom}>
                  <Text style={{fontSize:16,color:'black'}}>cra.handong.service@gmail.com</Text>
                </View>
          </ScrollView>
        )
  
  
    }
  }
  
  

  const styles=StyleSheet.create({
    changeInfo: {
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#3FA9F5',
      paddingLeft: 10,
      paddingRight: 10,
      flex: 0.9,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
  },
      changeInfoText: {
          color: '#3FA9F5',
      },
      switch: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    profileTop:{
      flexDirection:'row',
      marginLeft:10,
      marginTop:10,
      height:vw(5), 
      alignItems:'flex-start'
    },
    profileBottom:{
      flexDirection:'row',
      marginTop:20,
      height:vw(80),
      justifyContent:'center',
      alignContent:'center'
    },
    profileButton:{
      height:vw(15),
      justifyContent:'center',
      alignItems:'center'
    },
    AlarmTop:{
      height:vw(5),
      marginLeft:10,
      flexDirection:'row',
      alignItems:'flex-start'
    },
    AlarmBottom:{
      flexDirection:'column',
      marginTop:20,height:vw(20),
      justifyContent:'center',
      alignContent:'center'
    },
    chatAlarm:{
      flex:1,
      justifyContent:'space-between',
      paddingHorizontal:50,
      flexDirection:'row'
    },
    alertAlarm:{
      flex:1,
      justifyContent:'space-between',
      paddingHorizontal:50,
      flexDirection:'row'
    },
    versionTop:{
      height:vw(5),
      marginLeft:10,
      flexDirection:'row',
      alignItems:'flex-start'
    },
    versionBottom:{
      flexDirection:'row',
      marginTop:20,
      height:vw(10),
      justifyContent:'center',
      alignContent:'center'
    },
    contactTop:{
      height:vw(5),
      marginLeft:10,
      flexDirection:'row',
      alignItems:'flex-start'
    },
    contactBottom:{
      flexDirection:'row',
      marginTop:20,
      height:vw(10),
      justifyContent:'center',
      alignContent:'center'
    }
    })