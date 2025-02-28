import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export const Medicalcontent = () => {
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
          About MOH, DHA, and HAAD Licensing
        </Typography>

        <Typography variant="body1" paragraph>
          In the United Arab Emirates (UAE), healthcare professionals must
          obtain a license from the respective regulatory authorities to
          practice in the country. The Ministry of Health (MOH), Dubai Health
          Authority (DHA), and Health Authority Abu Dhabi (HAAD) are the key
          regulatory bodies responsible for issuing licenses to healthcare
          practitioners.
        </Typography>
      </Box>
    </Box>
  );
};
