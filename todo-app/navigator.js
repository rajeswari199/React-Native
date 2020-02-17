import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/login';
import Todo from './components/todo';
import RainTerrace from './components/rain-terrace';
import Links from './components/links';
import Weather from './components/weather/weather';
import Levenshtein from './components/levenshteinProblem';
import Hoc from './components/HOC';

const MainNavigator = createStackNavigator({
    Login: {
        screen: Login, headerTitleStyle: { alignSelf: 'center' },
        title: 'Center Title'
    },
    Todo: { screen: Todo },
    RainTerrace: { screen: RainTerrace },
    Links: { screen: Links },
    Levenshtein: { screen: Levenshtein },
    Hoc: { screen: Hoc },
    Weather: {
        screen: Weather, navigationOptions: {
            title: 'Weather....'
        }
    }
}, { headerLayoutPreset: 'center' },
);

const Navigation = createAppContainer(MainNavigator);

export default Navigation;