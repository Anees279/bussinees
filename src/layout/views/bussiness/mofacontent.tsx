import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export const Mofacontent = () => {
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
          Dubai is an attractive business hub for entrepreneurs from around the
          globe due to its many lifestyle and business advantages, not least its
          wide array of business setup options – depending on your requirements
          and desired type of venture you can opt for the UAE mainland, Free
          Zones or offshore jurisdictions for company registration.
        </Typography>
        <Typography variant="body1" paragraph>
          To establish a business in the UAE, your documents must first be
          attested by the Ministry of Foreign Affairs (MOFA). Attestation
          verifies their authenticity and makes them acceptable in this country.
          Prior to submitting them for MOFA attestation, however, you must have
          them pre-attested by an embassy of your country of origin.
        </Typography>

        <Typography variant="body1" paragraph>
          Once your documents have been attested, they should be submitted to
          the MOFA office in UAE where they will verify their authenticity
          before stamping and signing them – this marks the last step in the
          attestation process.
        </Typography>

        <Typography variant="body1" paragraph>
          To save yourself the stress, hire a professional attestation service
          provider who will handle the process on your behalf. They will save
          you from unnecessary delays or rejections in official matters in UAE;
          additionally they provide invaluable guidance and support that are
          essential in setting up businesses here successfully.
        </Typography>
      </Box>
    </Box>
  );
};
