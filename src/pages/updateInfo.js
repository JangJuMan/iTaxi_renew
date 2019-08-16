import React, { Component } from 'react';
import { View, Text, Button,StyleSheet,ScrollView,TouchableOpacity,Input,TextInput, KeyboardAvoidingView, Keyboard, Platform} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { vw, vh }  from 'react-native-expo-viewport-units';
import { inject, observer } from 'mobx-react';


@inject('userStore')

@observer
export default class Info extends Component{
    constructor(props) {
        super(props);
        const { navigation } = this.props;

    
        this.state = { loading: false, phone_number: navigation.getParam('phone_number', 0)};
    }

    submit() {
        const { userStore } = this.props;
        this.setState({ loading: true });
                
        userStore.updateUser(this.state.phone_number)
        .then(result => {
            if (userStore.state == "error") {
                alert("Error: ", userStore.errorData);
            }
            else {
                Alert.alert('개인 정보 수정','성공적으로 변경되었습니다.');
                this.props.navigation.goBack();
            }
        })
        .finally(() => {
            this.setState({ loading: false });
        });
    }
    
    render() {
        return (
            <View style={styles.info}>
                <Text style={{fontSize:14,marginLeft:9,color:'gray',fontFamily: "titleFont",fontWeight:"200"}}>휴대폰 번호</Text>
                <Text>{phone_number}</Text>
                <TextInput
                    style={{height: 40, borderBottomWidth:1, borderBottomColor: '#CCCCCC', flexGrow: 1}}
                    placeholder="정보를 입력하시오"
                    onChangeText={(text) => this.setState({phone_number: text})}
                    //value={'${this.phone}'}
                    keyboardType={'numeric'}
                />
                <View style={styles.profileButton}>
                    <TouchableOpacity onPress={() => {
                        this.submit();
                    }}>
                    <View style={styles.changeInfo}>
                        <Text style={styles.changeInfoText}>변경하기</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
// export default class changeInfo extends Component {
//     state={
//         visibleHeight : 216,
//     }

//     componentWillMount(){
//         this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this))
//     }

//     componentWillUnmount () {
//         this.keyboardDidShowListener.remove()
//     }

//     keyboardDidShow(e){
//         let newSize = e.endCoordinates.height
//         console.log(`keyboard size : ${newSize}`);
//         this.setState({
//             visibleHeight: newSize,
//         })
//     }

//     render() {
//         const keyboardHeight = Platform.OS === 'ios' ? this.state.visibleHeight*0.33 : this.state.visibleHeight*0.31
//         return (
//         <KeyboardAvoidingView style={styles.container} behavior='padding' contentContainerStyle={{ flex: 1 }} keyboardVerticalOffset={keyboardHeight} >  
//                 <ScrollView>
//                     <View>
//                         <Info info='학번' private='21900398'/>
//                         <Info info='이름' private='홍길동'/>
//                         <Info info='번호' private='010-1234-5687'/>
//                         <Info info='이메일' private='2190000@handong.edu'/>
//                         <Info info='계좌은행' private='기업'/>
//                         <Info info='계좌번호' private='000000'/>
//                     </View>
//                     <View style={styles.profileButton}>
//                         <TouchableOpacity onPress={() => this.props.navigation.navigate('Update')}>
//                         <View style={styles.changeInfo}>
//                             <Text style={styles.changeInfoText}>개인정보 수정</Text>
//                         </View>
//                         </TouchableOpacity>
//                     </View>
//                 </ScrollView>
//         </KeyboardAvoidingView>
//         )
//     }
// }


// export default class changeInfo extends Component {
//     constructor(props) {
//         super(props);
//         const { navigation } = this.props;
    
//         this.state = { loading: false, student_id: navigation.getParam('student_id',"") };
//       }
//     submit() {
//         const { userStore } = this.props;
//         this.setState({ loading: true });
        
//         userStore.updateUser(this.state.student_id, this.state.name, this.state.user_id, this.state.phone)
//           .then(result => {
//             if (userStore.state == "error") {
//               alert("Error: ", userStore.errorData);
//             }
//             else 
//               this.props.navigation.goBack();
//           })
//           .finally(() => {
//             this.setState({ loading: false });
//           });
//       }

//     render() {
//         return (
//         <ScrollView>
//             <View>
//                 <Info info='학번'/>
//                 <Info info='이름'/>
//                 <Info info='번호'/>
//                 <Info info='이메일'/>
//                 <Info info='계좌은행'/>
//                 <Info info='계좌번호'/>
//             </View>
//             <View style={styles.profileButton}>
//                 <TouchableOpacity onPress={() => {
//                     this.submit();
//                     Alert.alert('개인 정보 수정','성공적으로 변경되었습니다.')
//                 }}>
//                 <View style={styles.changeInfo}>
//                     <Text style={styles.changeInfoText}>변경하기</Text>
//                 </View>
//                 </TouchableOpacity>
//             </View>
//         </ScrollView>
//         )
//     }
// }

const styles = StyleSheet.create({
    info: {
        height:vh(15),
        padding:20,
        
    },
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
            fontFamily: "titleFont",
            fontWeight:"200"
        },
        profileButton:{
            height:vw(15),
            justifyContent:'center',
            alignItems:'center'
        },
});
