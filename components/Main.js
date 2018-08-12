import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Icon } from 'native-base'

import Home from './Home/Home'
import Skills from './Skills/Skills'
import Profile from './Profile/Profile'
import Tasks from './Tasks/Tasks'
import Courses from './Courses/Courses'
import Trainee from './Trainees/Trainees'

const config = {
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (<Icon type="Octicons" name="home" style={{color: tintColor, fontSize: 24}}/>)

        },
    },  
    Skills: {
        screen: Skills,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
                <Icon type="Entypo" name="tools" style={{color: tintColor, fontSize: 24}} />,

        },
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
                <Icon type="MaterialIcons" name="person-outline" style={{color: tintColor, fontSize: 24}} />
        },
    },
    Tasks: {
        screen: Tasks,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
                <Icon type="FontAwesome" name="tasks"  style={{color: tintColor, fontSize: 24}} />
        },
    },
    Courses: {
        screen: Courses,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
                <Icon type="Foundation" name="play-circle"  style={{color: tintColor, fontSize: 24}} />
        },
    },
    Trainees: {
        screen: Trainee,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) =>
                <Icon  type="Foundation" name="torsos-all" style={{color: tintColor, fontSize: 24}} />
        },
    }
    
}
export default createMaterialBottomTabNavigator(config, {activeTintColor: 'orange', inactiveTintColor: 'grey', barStyle: { backgroundColor: '#232323'}})

