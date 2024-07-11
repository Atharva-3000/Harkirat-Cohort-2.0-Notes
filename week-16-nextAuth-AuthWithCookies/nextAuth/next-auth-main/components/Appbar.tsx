"use client"
import { signIn, signOut, useSession } from "next-auth/react";
export const Appbar = () => {
    const session = useSession();
    return (
        <div className="flex gap-6">
            <button onClick={()=>{
                signIn();
            }}>
                SignIn
            </button>
            <button onClick={()=>{
                signOut();
            }}>
                Logout
            </button>
            {JSON.stringify(session)}
        </div>
    )
}