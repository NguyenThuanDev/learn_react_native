import { SplashScreenController } from '../context/splash';
import { Stack } from 'expo-router';
import React from 'react';
import { SessionProvider, useSession } from '../context/ctx';

function RootNavigation() {
    const { session } = useSession();
    return (<Stack>
        <Stack.Protected guard={session}>
            <Stack.Screen name='(protected)'></Stack.Screen>
        </Stack.Protected>
        <Stack.Protected guard={!session}>
            <Stack.Screen name='sign-in'></Stack.Screen>
        </Stack.Protected>
    </Stack>)
}



const RootLayout = () => {

    return (
        <SessionProvider>
            <SplashScreenController />
            <RootNavigation />




        </SessionProvider>

    )
}

export default RootLayout