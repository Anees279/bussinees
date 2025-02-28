import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

export const MainlandContent = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={{ xs: 2, sm: 3, md: 4 }}
      sx={{ maxWidth: '100%', mx: 'auto' }}
    >
      <Box
        sx={{
          textAlign: 'left',
          maxWidth: '100%',
          width: { xs: '100%', sm: '100%', md: '80%', lg: '1000px' },
          padding: { xs: '16px', sm: '24px', md: '32px' },
        }}
      >
        {/* Center the line */}
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            mb: 2,
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "3px",
              backgroundColor: "#FF6347",
            }}
          ></Box>
        </Box>

        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 3,
            color: "#FF6347",
            fontSize: {
              xs: "1.5rem", // For small devices (phones)
              sm: "2rem",   // For medium devices (tablets)
              md: "2.5rem", // For large devices (desktops)
              lg: "3rem",   // For extra-large devices (large desktops)
            },
          }}
        >
          Mainland Company Setup in the UAE
        </Typography>

        <Typography variant="body1" paragraph>
          Setting up a mainland company in the United Arab Emirates (UAE) offers numerous advantages, including access to a diverse market and a strategic location for business growth. At [Your Company Name], we provide comprehensive mainland company setup services to help you establish your business with ease.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Our Mainland Company Setup Services
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary="Company Registration"
              secondary="We assist you in registering your mainland company with the Department of Economic Development (DED), ensuring compliance with all legal requirements."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Local Sponsorship"
              secondary="We help you find a reliable local sponsor who meets the legal requirements and can act as a silent partner in your business."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Company Formation Consultation"
              secondary="Our expert consultants will guide you through the process of company formation in the UAE, providing you with valuable insights and advice to help you make informed decisions."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="PRO Services"
              secondary="Our Public Relations Officer (PRO) services ensure smooth communication with government authorities and timely processing of visas and permits."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="License Processing"
              secondary="We facilitate the process of obtaining the necessary licenses and permits required for your business activities."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Office Setup"
              secondary="From finding the right office space to setting up utilities, we help you establish a physical presence for your mainland company."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Visa Assistance"
              secondary="We provide visa assistance services for you and your employees, ensuring a smooth transition to living and working in the UAE."
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
