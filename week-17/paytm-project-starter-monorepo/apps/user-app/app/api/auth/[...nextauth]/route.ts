import NextAuth from "next-auth"
import { authOptions } from "../../../lib/auth"

const handler = NextAuth(authOptions)

// handling both requests at the same time
export { handler as GET, handler as POST }