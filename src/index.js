import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ListView from './pages/taxiList';
import RiderLog from './pages/rideLog';
import Setting from './pages/settingscreen';
import Carpool from './pages/carpoolList'
import ChatRoom from './pages/chatRoom';
import EnteringRoom from './pages/going _into_room';


class TaxiList extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ListView />
      </View>
    );
  }
}



const TaxiTab = createStackNavigator({
    Home: ListView,
    RoomDoor: EnteringRoom,
    TaxiRoom: ChatRoom,
  }, {
  defaultNavigationOptions: {
    title: "조회 / 모집",
  }
});

class CarpoolList extends Component {
  render() {
    return (
      <View style={{ flex: 1,}}>
        <Carpool />
      </View>
    )
  }
}
const CarpoolTab = createStackNavigator({
    Home: CarpoolList,
  }, {
  defaultNavigationOptions: {
    title: "조회 / 모집",
  }
});

class RideHistory extends Component {
  render() {
    return (
      <View style={{ flex: 1,justifyContent:'center',alignContent:'center'}}>
        <RiderLog />
      </View>
    )
  }
}
const RideHistoryTab = createStackNavigator({
    Home: RideHistory,
  }, {
  defaultNavigationOptions: {
    title: "탑승 내역",
  }
});

class MyPage extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Setting/>
      </View>
    )
  }
}
const MyPageTab = createStackNavigator({
    Home: MyPage,
  }, {
  defaultNavigationOptions: {
    title: "설정",
  }
});

const TabNavigator = createBottomTabNavigator({
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
}, {
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
  },
});

// const TaxiContainer = createAppContainer(TaxiTab);

export default createAppContainer(TabNavigator);