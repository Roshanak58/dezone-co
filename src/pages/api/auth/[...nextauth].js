// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Users } from "@/constants/Users";

export default NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { username, password } = credentials ?? {};

        if (!username || !password) {
          throw new Error("لطفا اطلاعات معتبر وارد کنید.");
        }

        const user = Users.find(u => u.username === username);
        if (!user) {
          throw new Error("ایمیل یا رمز عبور اشتباه است.");
        }

        if (user.password !== password) {
          throw new Error("ایمیل یا رمز عبور اشتباه است.");
        }

        return {
          id: user.id,
          username: user.username,
          level: user.level,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.level = user.level;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.level = token.level;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
