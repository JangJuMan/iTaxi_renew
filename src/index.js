import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ListView from './pages/taxiList';
import RiderLog from './pages/rideLog';
import Setting from './pages/settingscreen';
import Carpool from './pages/carpoolList'
import ChatRoom from './pages/chatRoom';
import EnteringRoom from './pages/going_into_room';
import UpdateInfo from '../src/pages/updateInfo';

const TaxiTab = createStackNavigator({
    Home: ListView,
    // TaxiRoomDoor: EnteringRoom,
    // TaxiRoom: ChatRoom,
    // createTaxiRoomInfo: Setting,
  }, {
  defaultNavigationOptions: {
    title: "조회 / 모집",
  }
});

const CarpoolTab = createStackNavigator({
    Home: Carpool,
    CarpoolRoomDoor: EnteringRoom,
    // CarpoolRoom: ChatRoom,
    // createCarpoolRoomInfo: Setting,
  }, {
  defaultNavigationOptions: {
    title: "조회 / 모집",
    // headerTitleStyle:{flexDirection:'column', justifyContent:'center', alignItems:'center',  color:'blue', borderWidth:1},
  }
});

const RideHistoryTab = createStackNavigator({
    Home: RiderLog,
    // pastRoom: ChatRoom,
  }, {
  defaultNavigationOptions: {
    title: "탑승 내역",
  }
});

const MyPageTab = createStackNavigator({
    Home: Setting,
    Update: UpdateInfo,
  }, {
  defaultNavigationOptions: {
    title: "설정",
  }
});

// // 기존의 것
// const TabNavigator = createBottomTabNavigator({
//   TaxiList: {
//     screen: TaxiTab,
//     navigationOptions: {
//       title: "택시",
//     },
//   },
//   CarpoolList: {
//     screen: CarpoolTab,
//     navigationOptions: {
//       title: "카풀",
//     },
//   },
//   RideHistory: {
//     screen: RideHistoryTab,
//     navigationOptions: {
//       title: "내역",
//     },
//   },
//   MyPage: {
//     screen: MyPageTab,
//     navigationOptions: {
//       title: "설정",
//     },

//   },
// }, {
//   defaultNavigationOptions: ({ navigation }) => ({
//     tabBarIcon: ({ focused, horizontal, tintColor }) => {
//       const { routeName } = navigation.state;
//       let IconComponent = Icon;
//       let iconName;
      
//       switch (routeName) {
//       case 'TaxiList':
//         iconName = 'taxi';
//         break;
//       case 'CarpoolList':
//         iconName = 'car';
//         break;
//       case 'RideHistory':
//         iconName = 'clock';
//         break;
//       case 'MyPage':
//         iconName = 'sliders-h';
//         break;
//       }

//       return <IconComponent name={iconName} size={25} color={tintColor} />;
//     },
//   }),
//   tabBarOptions: {
//     activeTintColor: 'skyblue',
//     inactiveTintColor: 'gray',
//   },
// });

// 새로운 것
const TabNavigator = createMaterialTopTabNavigator({
  TaxiList: {
    screen: TaxiTab,
    navigationOptions: {
      title: "택시",
    },
  },
  CarpoolList: {
    screen: CarpoolTab,
    navigationOptions: {
      title: "카풀",
    },
  },
  RideHistory: {
    screen: RideHistoryTab,
    navigationOptions: {
      title: "내역",
    },
  },
  MyPage: {
    screen: MyPageTab,
    navigationOptions: {
      title: "설정",
    },
  },
  
}, 
{
  initialRouteName: 'RideHistory',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Icon;
      let iconName;
      
      switch (routeName) {
      case 'TaxiList':
        iconName = 'taxi';
        break;
      case 'CarpoolList':
        iconName = 'car';
        break;
      case 'RideHistory':
        iconName = 'clock';
        break;
      case 'MyPage':
        iconName = 'sliders-h';
        break;
      }

      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'skyblue',
    inactiveTintColor: 'gray',
    showIcon:true,
    tabStyle:{
      height:55,
      padding:0,
      margin:0,
    },
    style:{
      backgroundColor:'white',
    },
    indicatorStyle:{
      height:0,
    }
  },
  tabBarPosition:'bottom',
});

const navigator = createStackNavigator(
  {
    Home:{
      screen: TabNavigator,
      navigationOptions:{
        header:null,
      }
    },
    Chat: {
      screen: ChatRoom,
    }
  },
  {
    initialRouteName: 'Home', 
  }
)

export default createAppContainer(navigator);
