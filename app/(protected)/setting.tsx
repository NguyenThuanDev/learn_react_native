import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const settingScreen = () => {
    return (
        <SafeAreaView style={styles.safeview}>
            <View>
                <Text style={styles.text}>Đây là trang setting</Text>

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

export default settingScreen