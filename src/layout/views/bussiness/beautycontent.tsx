import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export const Beautycontent = () => {
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
          Starting a Beauty Salon in Dubai Mainland
        </Typography>

        <Typography variant="body1" paragraph>
          Dubai Mainland is the preferred choice for starting your beauty salon
          business, offering more business opportunities compared to a free zone
          setup. The Department of Economic Development (DED) regulates all
          types of businesses in Dubai Mainland. Here are the steps to start
          your beauty salon:
        </Typography>
      </Box>
    </Box>
  );
};
