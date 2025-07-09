import { useSession } from '@/context/ctx'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const settingScreen = () => {
    const { signOut } = useSession()
    return (
        <SafeAreaView style={styles.safeview}>
            <View>
                <Text style={styles.text}>Đây là trang setting</Text>
                <Pressable style={styles.button} onPress={() => signOut()}>
                    <Text>Log Out</Text>
                </Pressable>
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
    button: {
        width: 100,
        height: 30,
        borderRadius: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        alignSelf: 'center',

    }

}

)

export default settingScreen