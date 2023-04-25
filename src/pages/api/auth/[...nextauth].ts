import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "TechBlog Machovei",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (
          credentials &&
          credentials?.username === "admin" &&
          credentials?.password === "admin"
        ) {
          return {
            id: 1,
            name: 'Administrador',
            email:''
          }
        } else {
          return null;
        }
      }
    }),
  ],
});


