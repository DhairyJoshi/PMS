import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware running...");
  const url = request.nextUrl;
  const path = url.pathname;

  if (path.startsWith("/_next/") || path.startsWith("/api/") || path.startsWith("/public/")) {
    return NextResponse.next();
  }

  const userRole = request.cookies.get("userRole")?.value || null;

  const authPaths = [
    "/authentication/sign-in",
    "/authentication/sign-up",
    "/authentication/forgot-password",
    "/authentication/lock-screen",
    "/authentication/confirm-mail",
    "/authentication/logout",
  ];

  // Define role-based accessible paths
  const rolePaths = {
    Admin: ["/*"],
    Client: ["/client-dashboard"],
    Employee: ["/employee-dashboard"],
  };

  if (authPaths.includes(path)) {
    return NextResponse.next();
  }

  if (!userRole) {
    return NextResponse.redirect(new URL("/authentication/sign-in", request.url));
  }

  if (userRole === "Admin") {
    return NextResponse.next();
  }

  const allowedPaths = rolePaths[userRole] || [];

  if (allowedPaths.length && !allowedPaths.some((allowedPath) => path.startsWith(allowedPath))) {
    console.log(`Unauthorized access by ${userRole}. Redirecting to /access-denied...`);
    return NextResponse.redirect(new URL("/access-denied", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|api|public|authentication).*)",
};