import React from 'react';
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ListView from './pages/taxiList';
import RiderLog from './pages/rideLog';
import Setting from './pages/settingscreen';
import Carpool from './pages/carpoolList'
import ChatRoom from './pages/chatRoom';
import UpdateInfo from '../src/pages/updateInfo';
import titleFont from '../src/variable/assets';
import Servicepage from './pages/termsOfservice';
import FirstPage from './pages/loginPage';

const TaxiTab = createStackNavigator({
    Home: ListView,
  }, {
  headerLayoutPreset:'center',
  defaultNavigationOptions: {
    title: "조회 / 모집",
    headerTitleStyle:{
      fontFamily: titleFont,
      fontWeight: "200"
    }
  },
});

const CarpoolTab = createStackNavigator({
    Home: Carpool,
  }, {
    headerLayoutPreset:'center',
    defaultNavigationOptions:{
      title: "조회 / 모집",
      headerTitleStyle:{
        fontFamily: titleFont,
        fontWeight: "200"
      }
  }
});

const RideHistoryTab = createStackNavigator({
    Home: RiderLog,
  }, {
    headerLayoutPreset:'center',
    defaultNavigationOptions: {
      title: "탑승 내역",
      headerTitleStyle:{
        fontFamily: titleFont,
        fontWeight: "200"
      }
  }
});

const MyPageTab = createStackNavigator({
    Home: Setting,
  }, {
  headerLayoutPreset:'center',
  defaultNavigationOptions: {
    title: "설정",
    headerTitleStyle:{
      fontFamily: titleFont,
      fontWeight: "200"
    }
  }
});

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
  initialRouteName: 'TaxiList',
  
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
    Service: {
      screen: Servicepage,
    },
    First:{
      screen: FirstPage,
      navigationOptions:{
        header:null,
      }
    },
    Home:{
      screen: TabNavigator,
      navigationOptions:{
        header:null,
      }
    },
    Chat: {
      screen: ChatRoom,
    },
    Update:{
      screen: UpdateInfo,
    }
  },
  {
    initialRouteName: 'First', 
  }
)

export default createAppContainer(navigator);
