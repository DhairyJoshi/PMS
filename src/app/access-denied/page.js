"use client";

import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";
import Button from "@mui/material/Button";
import Image from "next/image";
import withAuth from "@/components/Common/withAuth";

const AccessDenied = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          paddingBottom: "40px",
        }}
      >
        <Image src="/images/access-denied.png" alt="access denied" width={500} height={103} />  

        <Typography
          as="h1"
          sx={{
            fontWeight: "500",
            fontSize: "22px",
            mt: "-10px",
            mb: "10px",
          }}
        >
          You are not authorized to access this!
        </Typography>

        <Typography>
          You don't have the access rights to view the page you are looking for
        </Typography>

        <Link href="/" className="text-decoration-none">
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              textTransform: "capitalize",
              borderRadius: "8px",
              fontWeight: "500",
              fontSize: "13px",
              padding: "12px 30px",
              color: "#fff !important",
            }}
          >
            Back To Home
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default AccessDenied