import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const COOKIE_NAME = "auth_token";
const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes
  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get(COOKIE_NAME)?.value;

    if (!token) {
      // No token, redirect to login
      const url = new URL("/login", request.url);
      return NextResponse.redirect(url);
    }

    try {
      // Verify token
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      // Invalid token, redirect to login
      const url = new URL("/login", request.url);
      return NextResponse.redirect(url);
    }
  }

  // Redirect logged-in users away from /login or /register
  const publicAuthRoutes = ["/login", "/register"];
  if (publicAuthRoutes.includes(pathname)) {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (token) {
      try {
        await jwtVerify(token, secret);
        // Valid token found, redirect to admin instead of showing login
        return NextResponse.redirect(new URL("/admin", request.url));
      } catch (error) {
        // Invalid token, allow access to login/register to get a new one
        return NextResponse.next();
      }
    }
  }

  return NextResponse.next();
}

// Config to match only the routes we want to protect
export const config = {
  matcher: ["/admin/:path*", "/login", "/register"],
};
