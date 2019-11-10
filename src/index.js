import React from 'react';
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator, View, Text} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ListView from './pages/taxiList';
import RiderLog from './pages/rideLog';
import Setting from './pages/settingscreen';
import Carpool from './pages/carpoolList'
import ChatRoom from './pages/chatRoom';
import UpdateInfo from '../src/pages/updateInfo';
import Servicepage from './pages/termsOfservice';
import FirstPage from './pages/loginPage';
import NoticeScreen from '../src/pages/setting/notice'
import MyinfoScreen from '../src/pages/setting/myInfo';
import VersionScreen from '../src/pages/setting/version';
import AlarmScreen from '../src/pages/setting/alarm';
import BugScreen from '../src/pages/setting/bug';
import TermScreen from '../src/pages/setting/service';
import detailNoticeScreen from '../src/pages/setting/detailNotice';

const TaxiTab = createStackNavigator({
    Home: ListView,
  }, {
  headerLayoutPreset:'center',
  defaultNavigationOptions: {
    title: "조회 / 모집",
    headerTitleStyle:{
      // fontFamily: "titleFont",
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
        // fontFamily: "titleFont",
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
        // fontFamily: "titleFont",
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
      // fontFamily: "titleFont",
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
      navigationOptions:{
        // title:"이용 약관",
        // headerTitleStyle:{
        //   color:'blue'
        // }
        
      }
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
    },
    Notice:{
      screen: NoticeScreen,
    },
    Myinfo: {
      screen: MyinfoScreen,
    },
    Version: {
      screen: VersionScreen,
    },
    Alarm: {
      screen: AlarmScreen,
    },
    Bug: {
      screen: BugScreen,
    },
    TermsOfservice: {
      screen: TermScreen,
    },
    detailNotice:{
      screen:detailNoticeScreen,
    }

  },
  {
    initialRouteName: 'First', 
    defaultNavigationOptions: {
        gesturesEnabled: false,
    },
  }
)

export default createAppContainer(navigator);
