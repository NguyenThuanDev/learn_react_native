import { Link } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const homeScreen = () => {
    return (
        <SafeAreaView style={styles.safeview}>
            <View>
                <Text style={styles.text}>Đây là trang home Screen</Text>
                <Link href='/detail' asChild>
                    <Pressable style={styles.button}>
                        <Text>Go to Detail</Text>
                    </Pressable>
                </Link>
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
})
export default homeScreen