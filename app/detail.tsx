import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const detailScreen = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    return (
        <SafeAreaView style={styles.view}>
            <Stack.Screen options={{
                title: params.name || "detail"
            }} />
            <View>
                <Text style={styles.text}>Đây là trang Detail</Text>
                <Text onPress={() => {
                    router.setParams({ name: "update" })
                }}>Click me</Text>
            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25
    },
    view: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 100,
        height: 30,
        borderRadius: 10,
        backgroundColor: 'green',
        marginTop: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default detailScreen