import * as SecureStore from 'expo-secure-store';
import { useCallback, useEffect, useState } from 'react';
import { Platform } from 'react-native';

export function useLocalStorage(key: string): [[boolean, string | null], (value: string | null) => void] {
    const [value, setValue] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    //khi mở ứng dụng thì ta sẽ lấy cái session được lưu trước đó từ localStorage nếu là web và từ SecureStore nếu là app
    useEffect(() => {
        const load = async () => {
            let storeValue: string | null = null;
            if (Platform.OS == 'web') {
                try {
                    storeValue = localStorage.getItem(key);
                } catch (error) {
                    console.error('LocalStorage error:', error);

                }


            }
            else {
                storeValue = await SecureStore.getItemAsync(key)
            }
            setValue(storeValue);
            setIsLoading(false);
        }
        load();


    }, [key])
    const save = useCallback((newValue: string | null) => {
        setValue(newValue);

        if (Platform.OS === 'web') {
            try {
                if (newValue === null) {
                    localStorage.removeItem(key);
                } else {
                    localStorage.setItem(key, newValue);
                }
            } catch (e) {
                console.error('LocalStorage error:', e);
            }
        } else {
            if (newValue === null) {
                SecureStore.deleteItemAsync(key);
            } else {
                SecureStore.setItemAsync(key, newValue);
            }
        }
    }, [key]);
    return [[isLoading, value], save];
}
