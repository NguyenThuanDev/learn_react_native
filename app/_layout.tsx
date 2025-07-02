import { Stack } from "expo-router";
import { Image, StyleSheet } from "react-native";

function LogoTitle() {
    return <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />

}
export default function RootLayOut() {
    return (
        <>
            <Stack>

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