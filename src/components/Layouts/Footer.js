"use client";

import React from "react";
import { Stack, Box, Link, Grid, Typography } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <Stack
        sx={{
          backgroundColor: "#fff",
          p: "25px",
          borderRadius: "10px 10px 0 0",
          textAlign: "center",
          mt: "15px"
        }}
        className="footer"
      >
        <Box>
          <Box mb={2}>
            <Link
              href="/"
              underline="none"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src="/images/logo.webp"
                alt="Logo"
                className="black-logo"
                width={150}
                height={40}
              />
            </Link>
          </Box>

          <Grid
            container
            spacing={{ xs: 4, md: 10 }}
            direction="row"
            mb={3}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}>

            <Grid item>
              <Link color="#5c5c5c" underline="none">First Link</Link>
            </Grid>
            <Grid item>
              <Link color="#5c5c5c" underline="none">Second Link</Link>
            </Grid>
            <Grid item>
              <Link color="#5c5c5c" underline="none">Third Link</Link>
            </Grid>
            <Grid item>
              <Link color="#5c5c5c" underline="none">Fourth Link</Link>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            direction="row"
            mb={3}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}>

            <Grid item>
              <Link>
                <Image
                  src="/images/whatsapp.png"
                  alt="Logo"
                  className="black-logo"
                  width={35}
                  height={35}
                />
              </Link>
            </Grid>
            <Grid item>
              <Link>
                <Image
                  src="/images/facebook.png"
                  alt="Logo"
                  className="black-logo"
                  width={35}
                  height={35}
                />
              </Link>
            </Grid>
            <Grid item>
              <Link>
                <Image
                  src="/images/linkedin.png"
                  alt="Logo"
                  className="black-logo"
                  width={35}
                  height={35}
                />
              </Link>
            </Grid>
            <Grid item>
              <Link>
                <Image
                  src="/images/twitter.png"
                  alt="Logo"
                  className="black-logo"
                  width={30}
                  height={30}
                />
              </Link>
            </Grid>
          </Grid>

          <Typography>
            Copyright  {' '}
            <strong>PMS</strong> is Proudly Owned by {' '}
            <Link
              href="https://icode49.com/"
              target="_blank" 
              underline="none"
              rel="noreferrer"
            >
              Icode49
            </Link>
          </Typography>

        </Box>
      </Stack>
    </>
  );
};

export default Footer;
