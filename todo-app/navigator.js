import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/login';
import Todo from './components/todo';
import RainTerrace from './components/rain-terrace';
import Links from './components/links';
import Weather from './components/weather/weather';

const MainNavigator = createStackNavigator({
    Login: {
        screen: Login, headerTitleStyle: { alignSelf: 'center' },
        title: 'Center Title'
    },
    Todo: { screen: Todo },
    RainTerrace: { screen: RainTerrace },
    Links: { screen: Links },
    Weather: {
        screen: Weather, navigationOptions: {
            title: 'Weather....'
        }
    }
}, { headerLayoutPreset: 'center' },
);

const Navigation = createAppContainer(MainNavigator);

export default Navigation;