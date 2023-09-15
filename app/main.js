import {
    createStackNavigator,
    createAppContainer,
} from '@react-navigation/native-stack';


import Splash from './splash';
import Home from './home'
const Stack = createStackNavigator();

const MainNavigator = createStackNavigator({
    Splash: { screen: Splash },
    Home: { screen: Home },
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default createAppContainer(
    MainNavigator
);