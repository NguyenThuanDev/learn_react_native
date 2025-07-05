import Feather from '@expo/vector-icons/Feather';
import { Tabs } from 'expo-router';
import React from 'react';


const TabLayout = () => {

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'red' }}>
            <Tabs.Screen name='(home)' options=
                {{
                    headerShown: false,
                    tabBarIcon: ({ color }) => {
                        return (<Feather name="home" size={24} color={color} />)
                    },
                    title: 'Home'
                }}>



            </Tabs.Screen>

            <Tabs.Screen name='setting' options={{
                headerShown: false,
                tabBarIcon: ({ color }) => {
                    return (<Feather name="settings" size={24} color={color} />)
                }
            }}></Tabs.Screen>

        </Tabs >
    )
}

export default TabLayout