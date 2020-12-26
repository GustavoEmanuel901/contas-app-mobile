import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Register from './pages/Register'
import Initial from './pages/Initial'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'

const { Navigator, Screen } = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen
                    name='Initial'
                    component={Initial}
                />

                <Screen
                    name='Register'
                    component={Register}
                    options={{ 
                        headerShown: true,
                        header: () => <Header title='Adicione uma nova conta'/>
                    }}
                />

                <Screen
                    name='Dashboard'
                    component={Dashboard}
                />

            </Navigator>
        </NavigationContainer>
    )
}