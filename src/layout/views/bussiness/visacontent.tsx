import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export const VisaContent = () => {
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
          Business Setup Dubai
        </Typography>

        <Typography variant="body1" paragraph>
          When starting a business in the UAE, it’s essential to secure all of
          the appropriate documentation. To start your venture successfully, an
          entry visa and work permit (also referred to as labor card) are both
          essential documents. Furthermore, the Ministry of Labour requires a
          letter from your current sponsor certifying no objection against your
          operation.
        </Typography>
        <Typography variant="body1" paragraph>
          Business Setup consultants assist entrepreneurs with setting up
          businesses in the UAE and other countries through providing an array
          of services – local sponsorship, VAT registration, office space rental
          agreements and more – at competitive rates. Their experienced team is
          at hand to guide you through the entire process quickly so your
          business is running as soon as possible.
        </Typography>

        <Typography variant="body1" paragraph>
          UAE is an ideal environment for starting a business, thanks to its
          robust economy, low crime rate, and world-class infrastructure. In
          particular, Dubai’s free zones offer tax exemptions and other
          incentives designed to attract foreign investment.
        </Typography>
       
        <Typography variant="body1" paragraph>
          Recent government action through the Work Bundle platform has
          drastically cut paperwork and processing times for companies – saving
          over 62 million working days annually! Furthermore, renewals and
          cancellations as well as medical examinations and fingerprinting are
          now also reduced; providing employees with more time for focused work
          while giving customers better experiences. This new system may lead to
          an increase in productivity by freeing employees to focus on what
          matters – while improving customer experiences with improved
          productivity levels and greater customer experience..
        </Typography>
      </Box>
    </Box>
  );
};
