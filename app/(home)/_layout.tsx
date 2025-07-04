import { Stack } from "expo-router";
import { StyleSheet } from "react-native";


export default function RootLayOut() {
    return (
        <>
            <Stack screenOptions={{ headerShown: false }}>

                <Stack.Screen name='index'
                ></Stack.Screen>
            </Stack >

        </>);


}


const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30
    }
})