"use client";

import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
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
        designation: `${client.company.title}`,
        email: client.email,
        phoneNumber: client.phone,
      }));
      setContactLists(formattedClients);
    }
  }, [clientsData]);

  return (
    <>
      <PageTitle
        pageTitle="Employee Grid"
        dashboardUrl="/"
        dashboardText="Dashboard"
      />

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        {contactLists.map((contactList) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={contactList.name}>
            <Card
              sx={{
                textAlign: "center",
                boxShadow: "none",
                borderRadius: "10px",
                p: "20px 15px",
                mb: "15px",
              }}
            >
              <Box>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-end"
                  spacing={1}
                >
                  <Tooltip title="Delete" arrow placement="top">
                    <IconButton aria-label="delete" size="small">
                      <DeleteIcon
                        fontSize="inherit"
                        sx={{
                          color: "#A9A9C8",
                        }}
                      />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Edit" arrow placement="top">
                    <IconButton aria-label="edit" size="small">
                      <EditIcon
                        fontSize="inherit"
                        sx={{
                          color: "#A9A9C8",
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Box>

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
                as="h4"
                sx={{
                  fontSize: 13,
                  color: "#A9A9C8",
                  mb: 2,
                }}
              >
                {contactList.designation}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textAlign: "center",
                  mt: "30px",
                }}
              >
                <Box>
                  <CallIcon
                    sx={{
                      color: "#A9A9C8",
                      mb: "3px",
                    }}
                  />
                  <Typography fontWeight="500" fontSize="14px">
                    {contactList.phoneNumber}
                  </Typography>
                </Box>

                <Box>
                  <MailOutlineIcon
                    sx={{
                      color: "#A9A9C8",
                      mb: "3px",
                    }}
                  />
                  <Typography fontWeight="500" fontSize="14px">
                    {contactList.email}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default withAuth(Page, ['Admin']);