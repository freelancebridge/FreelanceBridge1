import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      const isAuth = !!token;
      return isAuth;
    },
  },
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/messages/:path*",
    "/jobs/post",
  ],
};
