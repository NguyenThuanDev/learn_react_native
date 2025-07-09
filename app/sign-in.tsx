import { useSession } from '@/context/ctx';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const SignInScreen = () => {
    const { signIn } = useSession();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            await signIn(email, password);
        } catch (err) {
            setMessage('User không tồn tại hoặc sai mật khẩu');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng nhập</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Button title="Đăng nhập" onPress={handleLogin} />

            {message ? <Text style={styles.error}>{message}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 24,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        padding: 12,
        marginBottom: 16,
        borderRadius: 8,
        fontSize: 16,
    },
    error: {
        color: 'red',
        marginTop: 12,
        textAlign: 'center',
    },
});

export default SignInScreen;
