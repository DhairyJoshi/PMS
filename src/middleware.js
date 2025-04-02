import { NextResponse } from "next/server";

// Helper to check path against a list of disabled paths for a user role
const isPathDisabled = (path, disabledPaths) => 
  disabledPaths.some((disabledPath) => path.startsWith(disabledPath));

export function middleware(request) {
  const url = request.nextUrl;
  const path = url.pathname;

  // Exclude next.js internal and static resources
  if (path.startsWith("/_next/") || path.startsWith("/api/") || path.startsWith("/public/") || path.startsWith("/images/")) {
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

  // Disabled paths for roles
  const disabledPaths = {
    Employee: [
      "/contact-list/",
      "/projects/project-create/",
      "/projects/clients/",
      "/projects/team/",
      "/projects/user/",
      "/analytics/",
    ],
    Client: [
      "/contact-list/",
      "/apps/to-do/",
      "/projects/project-create/",
      "/projects/clients/",
      "/projects/team/",
      "/projects/user/",
      "/projects/task/",
      "/analytics/customers/",
      "/forms/",
      "/pages/",
      "/ui-elements/",
    ],
  };

  // Role-based accessible paths
  const rolePaths = {
    Admin: ["/"],
    Client: ["/"],
    Employee: ["/"],
  };

  // If the requested path is an authentication path, allow it
  if (authPaths.includes(path)) {
    return NextResponse.next();
  }

  // If no user role, redirect to sign-in page
  if (!userRole) {
    return NextResponse.redirect(new URL("/authentication/sign-in", request.url));
  }

  // Admin can access everything
  if (userRole === "Admin") {
    return NextResponse.next();
  }

  // If the user is an Employee or Client, check if the path is disabled for them
  if (
    (userRole === "Employee" || userRole === "Client") &&
    isPathDisabled(path, disabledPaths[userRole])
  ) {
    return NextResponse.redirect(new URL("/access-denied", request.url));
  }

  // If the user's role is authorized for the path, allow access
  if (rolePaths[userRole] && rolePaths[userRole].some((allowedPath) => path.startsWith(allowedPath))) {
    return NextResponse.next();
  }

  // If the path is not allowed for the user's role, redirect to access-denied page
  console.log("Unauthorized access attempt. Redirecting to /access-denied...", userRole);
  return NextResponse.redirect(new URL("/access-denied", request.url));
}

export const config = {
  matcher: "/((?!_next|api|public|images|authentication).*)",
};