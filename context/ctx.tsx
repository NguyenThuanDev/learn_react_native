import { createContext, useContext, type PropsWithChildren } from "react";
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext<{
    signIn: () => void,
    signOut: () => void,
    session?: string | null,
    isLoading: boolean

}>({
    signIn: () => null,
    signOut: () => null,
    session: null,
    isLoading: false,
})

export function useSession() {
    const value = useContext(AuthContext);
    if (!value) {
        throw new Error('Error')
    }
    return value
}

export function SessionProvider({ children }: PropsWithChildren) {
    const [[isLoading, session], setSession] = useLocalStorage('session');
    return <AuthContext
        value={{
            signIn: () => {
                setSession('xxx');
            },
            signOut: () => {
                setSession(null);
            },
            isLoading,
            session
        }}
    >{children}</AuthContext>

}

