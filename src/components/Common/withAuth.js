import { fetchUserData } from "@/lib/auth/loginSlice";
import { Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const withAuth = (Component, allowedRoles = []) => {
  const Auth = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const userRole = useSelector((state) => state.login.userRole);
    const user = useSelector((state) => state.login.user);

    const [authenticated, setAuthenticated] = useState(false); 
    const [loading, setLoading] = useState(true); // Added a loading state

    useEffect(() => {
      const localToken = localStorage.getItem("localToken");
      const sessionToken = sessionStorage.getItem("sessionToken");
      const storedEmail = localStorage.getItem("user_email");
      const storedPassword = localStorage.getItem("user_password");

      if (!localToken && !sessionToken) {
        router.replace("/authentication/sign-in/");
        return;
      }

      if (!user && storedEmail && storedPassword) {
        dispatch(fetchUserData(storedEmail, storedPassword));
      }
    }, [dispatch]);

    useEffect(() => {
      if (user) {
        if (allowedRoles.length && !allowedRoles.includes(userRole)) {
          router.replace("/access-denied");
          return;
        }
        setAuthenticated(true);
      }
      setLoading(false);
    }, [user, userRole]);

    // Show loader while fetching user data
    if (loading || !authenticated) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      );
    }

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;