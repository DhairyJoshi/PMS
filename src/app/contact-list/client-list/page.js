"use client";

import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import PageTitle from "@/components/Common/PageTitle";
import Image from "next/image";
import withAuth from "@/components/Common/withAuth";
import { useDispatch, useSelector } from "react-redux";
import { fetchClientsData } from "@/lib/client/clientSlice";

const Page = () => {
  const dispatch = useDispatch();
  const clientsData = useSelector((state) => state.client.clients);
  const [contactLists, setContactLists] = useState([]);

  useEffect(() => {
    dispatch(fetchClientsData());
  }, [dispatch]);


  useEffect(() => {
    if (clientsData?.users?.length > 0) {
      const formattedClients = clientsData.users.map((client) => ({
        image: client.image || "/images/member1.png",
        name: `${client.firstName} ${client.lastName}`,
        userName: `@${client.username}`,
        email: client.email,
        projectUrl: "#",
      }));
      setContactLists(formattedClients);
    }
  }, [clientsData]);

  return (
    <>
      <PageTitle
        pageTitle="Client List"
        dashboardUrl="/"
        dashboardText="Dashboard"
      />

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        {contactLists.map((contactList) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={contactList.name}>
            <Card
              sx={{
                textAlign: "center",
                boxShadow: "none",
                borderRadius: "10px",
                p: "20px 15px",
                mb: "15px",
              }}
            >
              <Image
                src={contactList.image}
                alt="Member"
                width={148}
                height={148}
                className="borRadius100"
              />
              <Typography
                as="h4"
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  mt: "10px",
                }}
              >
                {contactList.name}
              </Typography>

              <Typography
                sx={{
                  fontSize: 13,
                  color: "#A9A9C8",
                  mb: 2,
                }}
              >
                {contactList.userName}
              </Typography>

              <Box>
                <Link
                  href={`mailto:${contactList.email}`}
                  className="text-decoration-none"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      textTransform: "capitalize",
                      borderRadius: "8px",
                      m: "0 5px",
                      color: "#fff !important",
                    }}
                  >
                    Message
                  </Button>
                </Link>

                <Link
                  href={contactList.projectUrl}
                  className="text-decoration-none"
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      textTransform: "capitalize",
                      borderRadius: "8px",
                      m: "0 5px",
                      color: "#fff !important",
                    }}
                  >
                    Projects
                  </Button>
                </Link>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default withAuth(Page, ['Admin']);