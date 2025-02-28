import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export const FreezoneContent = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={{ xs: 2, sm: 3, md: 4 }}
      sx={{ maxWidth: "100%", mx: "auto" }}
    >
      <Box
        sx={{
          textAlign: "left",
          maxWidth: "100%",
          width: { xs: "100%", sm: "100%", md: "80%", lg: "1000px" },
          padding: { xs: "16px", sm: "24px", md: "32px" },
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
              sm: "2rem", // For medium devices (tablets)
              md: "2.5rem", // For large devices (desktops)
              lg: "3rem", // For extra-large devices (large desktops)
            },
          }}
        >
          Free Zone Authority
        </Typography>

        <Typography variant="body1" paragraph>
          If you wish to establish a company in the UAE, first select its type
          and legal structure. Options available include setting up as either an
          LLC (with individual shareholders), branch of foreign or local company
          and freelancer license. Furthermore, select and register a trade name
          with relevant free zone authorities and Departments of Economic
          Development authorities before finalising these steps.
        </Typography>
        <Typography variant="body1" paragraph>
          Once you’ve submitted the necessary documentation, the free zone
          authority will review your application and issue initial approval
          documents – this step gives your business legal permission to operate
          within a free zone and gives you legal permission for operating an
          office space and bank account in it. With your license in hand, the
          next steps in setting up business can begin: finding office space and
          opening bank accounts.
        </Typography>

        <Typography variant="body1" paragraph>
          Applying for visas is also a critical component of business setup.
          While applying can be time-consuming and complex, working with an
          expert company setup specialist can save time and stress in this
          regard. By working directly with relevant departments and agencies to
          expedite your visa process faster so you can start up faster.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Taxes
        </Typography>
        <Typography variant="body1" paragraph>
          Free Zones offer business owners many advantages, from tax exemptions
          and reduced overhead expenses, to no taxes on dividends and interest
          payments which makes repatriating profits easier and managing funds
          simpler. Furthermore, no currency restrictions make managing funds
          simpler.
        </Typography>
        
      </Box>
    </Box>
  );
};
