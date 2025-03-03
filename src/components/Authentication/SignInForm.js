"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Radio, RadioGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../lib/auth/loginSlice";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const userData = useSelector((state) => state.login.user);
  const userRole = useSelector((state) => state.login.userRole);
  const error = useSelector((state) => state.login.error);
  const [formData, setFormData] = useState({ email: "", password: "", desiredRole: "" });
  const [rememberUser, setRememberUser] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(fetchUserData(formData.email, formData.password, formData.desiredRole));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (userData?.statuscode === 200) {
      if (rememberUser) {
        localStorage.setItem("localToken", "access-token-here");
      } else {
        sessionStorage.setItem("sessionToken", "access-token-here");
      }
      localStorage.setItem("user_email", formData.email);
      localStorage.setItem("user_password", formData.password);
      localStorage.setItem("desired_role", formData.desiredRole);
      router.push("/");
    }
  }, [userData, rememberUser, router]);


  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="authenticationBox">
        <Box
          component="main"
          sx={{
            maxWidth: "510px",
            ml: "auto",
            mr: "auto",
            padding: "50px 0 100px",
          }}
        >
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box>
              <Typography as="h1" fontSize="28px" fontWeight="700" mb="5px">
                Sign In{" "}
              </Typography>

              <Typography fontSize="15px" mb="30px">
                Already have an account?{" "}
                <Link
                  href="/authentication/sign-up"
                  className="primaryColor text-decoration-none"
                >
                  Sign up
                </Link>
              </Typography>

              <Box component="form" noValidate onSubmit={handleSubmit}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="desiredRole"
                  value={formData.userRole}
                  onChange={handleInputChange}
                  row
                  required
                  sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    marginBottom: '20px'
                  }}
                >
                  {["Admin", "Employee", "Client"].map((role) => (
                    <Box
                      key={role}
                      sx={{
                        border: `2px solid ${formData.userRole === role ? "#757FEF" : "#5B5B98"}`,
                        color: `${formData.userRole === role ? "#757FEF" : "#5B5B98"}`,
                        borderRadius: "7px",
                        padding: "5px 0px 5px 15px",
                        margin: "5px 10px",
                        transition: "border-color 0.3s ease-in-out",
                      }}
                    >
                      <FormControlLabel value={role} control={<Radio />} label={role} />
                    </Box>
                  ))}
                </RadioGroup>

                <Box
                  sx={{
                    background: "#fff",
                    padding: "30px 20px",
                    borderRadius: "10px",
                    mb: "20px",
                  }}
                  className="bg-black"
                >
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12}>
                      <Typography
                        component="label"
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "10px",
                          display: "block",
                        }}
                      >
                        Email
                      </Typography>

                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        autoComplete="email"
                        InputProps={{
                          style: { borderRadius: 8 },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography
                        component="label"
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "10px",
                          display: "block",
                        }}
                      >
                        Password
                      </Typography>

                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        autoComplete="new-password"
                        InputProps={{
                          style: { borderRadius: 8 },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={6} sm={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={rememberUser}
                          color="primary"
                          onChange={() => setRememberUser(!rememberUser)} />
                      }
                      label="Remember me."
                    />
                  </Grid>

                  <Grid item xs={6} sm={6} textAlign="end">
                    <Link
                      href="/authentication/forgot-password"
                      className="primaryColor text-decoration-none"
                    >
                      Forgot your password?
                    </Link>
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    textTransform: "capitalize",
                    borderRadius: "8px",
                    fontWeight: "500",
                    fontSize: "16px",
                    padding: "12px 10px",
                    color: "#fff !important",
                  }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default SignInForm;