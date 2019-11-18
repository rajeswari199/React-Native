import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/login';
import Todo from './components/todo';
import RainTerrace from './components/rain-terrace';
import Links from './components/links'

const MainNavigator = createStackNavigator({
    Login: { screen: Login },
    Todo: { screen: Todo },
    RainTerrace: { screen: RainTerrace },
    Links: { screen: Links  }
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;