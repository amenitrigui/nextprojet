import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
    providers: [
        CredentialsProvider({
        name: "Credentials",
        credentials: {
        email: {
        label: "email:",
        type: "text",
        },
        password: {
        label: "password:",
        type: "password",
        },
        },
        async authorize(credentials) {
        try {
        const res = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        email: credentials?.email,
        password: credentials?.password,
        }),
        });
        const response = await res.json();
        console.log(response)
        if (response.success===false) {
        throw new Error("Invalid credentials");
        }
        if (response.user) { console.log(response.user)
        return { ...response.user, password: null, role:
        response.user.role , image: response.user.avatar};
        } else {
        return null;
        
    
        
        }
        } catch (error) {
        console.log(error);
        }
        return null;
        },
        }),




GitHubProvider({
clientId: " b2f21be5fe476d70e299",
clientSecret: "72bf163e88af3878fe3fc99f57f3adf14514228c",
}),
GoogleProvider({
    clientId: " b2f21be5fe476d70e299",
    clientSecret: "72bf163e88af3878fe3fc99f57f3adf14514228c",
})
],
secret: process.env.SECRET,
callbacks: {
async jwt({ token, user }) {
if (user){
token.role = user.role;
token.image = user.image;
}
return token;
},
async session({ session, token }) {
if (session?.user) {
session.user.role = token.role;
session.user.image = token.image;
}
return session;
},
},
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }




