import { useSession } from '@/context/ctx'
import { Button } from '@react-navigation/elements'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const SignInScreen = () => {
    const { signIn } = useSession()
    return (
        <SafeAreaView style={styles.safeview}>
            <View>
                <Text style={styles.text}>Đây là trang Login</Text>
                <Button onPressIn={() => {
                    signIn()
                }}>Click Me</Button>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeview: {
        justifyContent: 'center',
        marginTop: 100,
        alignItems: 'center',
    },
    text: {
        fontSize: 25
    },

})

export default SignInScreen