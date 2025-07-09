import {
    createContext,
    useContext,
    type PropsWithChildren,
} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext<{
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
    session?: string | null;
    isLoading: boolean;
}>({
    signIn: async () => { },
    signOut: () => { },
    session: null,
    isLoading: false,
});

export function useSession() {
    const value = useContext(AuthContext);
    if (!value) {
        throw new Error('AuthContext must be used within a SessionProvider');
    }
    return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
    const [[isLoading, session], setSession] = useLocalStorage('session');

    const signIn = async (email: string, password: string) => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok || !data.userId) {
                setSession(null);
                throw new Error(data.message || 'Đăng nhập thất bại');
            }

            setSession(data.userId);
        } catch (error) {
            console.error('Login error:', error);
            setSession(null);
            throw error;
        }
    };

    const signOut = () => {
        setSession(null);
    };

    return (
        <AuthContext.Provider
            value={{
                signIn,
                signOut,
                session,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
