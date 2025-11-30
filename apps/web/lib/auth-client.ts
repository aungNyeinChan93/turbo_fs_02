import { createAuthClient } from "better-auth/react";


export const authClient = createAuthClient({
    basePath: '/api/auth',
    // baseURL: 'http//localhost:3002/api'
})

export const { signIn, signUp, signOut, useSession, getSession } = authClient;